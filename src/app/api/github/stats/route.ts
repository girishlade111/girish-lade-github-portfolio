import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Calculate date one year ago
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const dateQuery = oneYearAgo.toISOString().split('T')[0];

    // Fetch commit count from last year
    const commitsResponse = await fetch(
      `https://api.github.com/search/commits?q=author:girishlade111+author-date:>=${dateQuery}&per_page=1`,
      {
        headers: {
          Accept: "application/vnd.github.cloak-preview+json",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!commitsResponse.ok) {
      throw new Error("Failed to fetch commits");
    }

    const commitsData = await commitsResponse.json();
    const totalCommits = commitsData.total_count || 0;

    // Fetch user stats
    const userResponse = await fetch(
      `https://api.github.com/users/girishlade111`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 3600 },
      }
    );

    if (!userResponse.ok) {
      throw new Error("Failed to fetch user data");
    }

    const userData = await userResponse.json();

    return NextResponse.json({
      totalCommits,
      publicRepos: userData.public_repos || 0,
      followers: userData.followers || 0,
      following: userData.following || 0,
    });
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch GitHub stats" },
      { status: 500 }
    );
  }
}
