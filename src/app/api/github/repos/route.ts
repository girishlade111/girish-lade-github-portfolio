import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const repos = searchParams.get("repos")?.split(",") || [];

  if (repos.length === 0) {
    return NextResponse.json({ error: "No repositories specified" }, { status: 400 });
  }

  try {
    const repoDataPromises = repos.map(async (repoName) => {
      const response = await fetch(
        `https://api.github.com/repos/girishlade111/${repoName.trim()}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            ...(process.env.GITHUB_TOKEN && {
              Authorization: `token ${process.env.GITHUB_TOKEN}`,
            }),
          },
          next: { revalidate: 3600 }, // Cache for 1 hour
        }
      );

      if (!response.ok) {
        return null;
      }

      const data = await response.json();
      return {
        name: data.name,
        description: data.description,
        stars: data.stargazers_count,
        forks: data.forks_count,
        language: data.language,
        topics: data.topics || [],
        html_url: data.html_url,
        updated_at: data.updated_at,
      };
    });

    const repoData = await Promise.all(repoDataPromises);
    const validRepos = repoData.filter((repo) => repo !== null);

    return NextResponse.json({ repos: validRepos });
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return NextResponse.json(
      { error: "Failed to fetch repository data" },
      { status: 500 }
    );
  }
}
