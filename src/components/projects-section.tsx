"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, GitFork, Loader2, Globe } from "lucide-react";
import { useEffect, useState } from "react";

interface Project {
  name: string;
  description: string;
  tags: string[];
  stars: number;
  forks: number;
  url: string;
  liveUrl?: string;
}

interface GithubRepo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  topics: string[];
  html_url: string;
}

const projectRepos = [
  "AetherCanvas",
  "Synergy-Flow",
  "GB-Coder-Public-Beta",
  "Lade-Studio",
  "Lade-Stack-AI-Dev-Hub",
  "Artify"
];

const fallbackProjects: Project[] = [
  {
    name: "AetherCanvas",
    description: "A powerful AI-driven design tool for creating stunning visuals and graphics with ease.",
    tags: ["TypeScript", "Next.js", "AI", "Canvas API"],
    stars: 0,
    forks: 0,
    url: "https://github.com/girishlade111/AetherCanvas",
    liveUrl: "https://aethercanvas.vercel.app"
  },
  {
    name: "Synergy-Flow",
    description: "Collaborative workflow management platform with real-time synchronization and team features.",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    stars: 0,
    forks: 0,
    url: "https://github.com/girishlade111/Synergy-Flow",
    liveUrl: "https://synergy-flow.vercel.app"
  },
  {
    name: "GB-Coder Public Beta",
    description: "An intelligent code editor with AI-powered suggestions and syntax highlighting.",
    tags: ["TypeScript", "Monaco Editor", "AI", "Electron"],
    stars: 0,
    forks: 0,
    url: "https://github.com/girishlade111/GB-Coder-Public-Beta"
  },
  {
    name: "Lade-Studio",
    description: "Creative studio suite for designers and developers with integrated tools and plugins.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    stars: 0,
    forks: 0,
    url: "https://github.com/girishlade111/Lade-Studio",
    liveUrl: "https://lade-studio.vercel.app"
  },
  {
    name: "Lade-Stack-AI-Dev-Hub",
    description: "AI development hub with pre-built templates, models, and deployment pipelines.",
    tags: ["Python", "TensorFlow", "Docker", "FastAPI"],
    stars: 0,
    forks: 0,
    url: "https://github.com/girishlade111/Lade-Stack-AI-Dev-Hub"
  },
  {
    name: "Artify",
    description: "Transform your photos into art with AI-powered filters and creative effects.",
    tags: ["React", "TensorFlow.js", "Canvas", "WebGL"],
    stars: 0,
    forks: 0,
    url: "https://github.com/girishlade111/Artify",
    liveUrl: "https://artify-demo.vercel.app"
  }
];

export const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch(`/api/github/repos?repos=${projectRepos.join(",")}`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch repository data");
        }

        const data = await response.json();
        
        if (data.repos && data.repos.length > 0) {
          const updatedProjects = data.repos.map((repo: GithubRepo) => {
            const fallbackProject = fallbackProjects.find(p => p.name === repo.name);
            return {
              name: repo.name,
              description: repo.description || fallbackProject?.description || "No description available",
              tags: repo.topics.length > 0 ? repo.topics.slice(0, 4) : [repo.language].filter(Boolean),
              stars: repo.stars,
              forks: repo.forks,
              url: repo.html_url,
              liveUrl: fallbackProject?.liveUrl
            };
          });
          setProjects(updatedProjects);
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
        // Keep fallback data
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepoData();
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Pinned Projects
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            A showcase of my most notable open-source contributions and personal projects.
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-primary transition-colors"
                        title="View Live Demo"
                      >
                        <Globe size={20} />
                      </a>
                    )}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-primary transition-colors"
                      title="View on GitHub"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-secondary mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-secondary">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400" />
                    <span>{project.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork size={16} />
                    <span>{project.forks}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};