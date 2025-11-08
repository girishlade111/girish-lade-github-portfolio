"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, GitFork, Loader2, Globe, X, AlertCircle, RefreshCw } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

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
  const [error, setError] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const fetchRepoData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/github/repos?repos=${projectRepos.join(",")}`);
      
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error("GitHub API rate limit exceeded. Showing cached project data.");
        } else if (response.status === 404) {
          throw new Error("Repository data not found. Showing fallback project data.");
        } else if (response.status >= 500) {
          throw new Error("GitHub service is currently unavailable. Showing fallback project data.");
        } else {
          throw new Error("Failed to fetch live project data. Showing fallback data.");
        }
      }

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
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
      } else {
        throw new Error("No repository data received. Showing fallback project data.");
      }
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
      const errorMessage = error instanceof Error ? error.message : "Unable to fetch live project data from GitHub.";
      setError(errorMessage);
      // Keep fallback data visible
      setProjects(fallbackProjects);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRepoData();
  }, []);

  // Extract all unique tags from all projects
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    projects.forEach(project => {
      project.tags.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, [projects]);

  // Filter projects based on selected tags
  const filteredProjects = useMemo(() => {
    if (selectedTags.length === 0) {
      return projects;
    }
    return projects.filter(project => 
      selectedTags.some(tag => project.tags.includes(tag))
    );
  }, [projects, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

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

        {/* Error Banner */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-8 p-4 rounded-lg bg-destructive/10 border border-destructive/20 flex items-start gap-3"
          >
            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm text-foreground">
                {error}
              </p>
            </div>
            <button
              onClick={fetchRepoData}
              disabled={isLoading}
              className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md bg-destructive/20 hover:bg-destructive/30 text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              title="Retry fetching data"
            >
              <RefreshCw size={14} className={isLoading ? "animate-spin" : ""} />
              Retry
            </button>
            <button
              onClick={() => setError(null)}
              className="text-secondary hover:text-foreground transition-colors"
              title="Dismiss error"
            >
              <X size={18} />
            </button>
          </motion.div>
        )}

        {/* Filter Tags Section */}
        {!isLoading && allTags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="flex flex-wrap items-center gap-3 justify-center">
              <span className="text-sm text-secondary font-medium">Filter by:</span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`text-sm px-4 py-2 rounded-full border transition-all ${
                    selectedTags.includes(tag)
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                      : "bg-card/50 text-secondary border-border hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {tag}
                </button>
              ))}
              {selectedTags.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm px-4 py-2 rounded-full bg-destructive/10 text-destructive border border-destructive/20 hover:bg-destructive/20 transition-all flex items-center gap-1"
                >
                  <X size={14} />
                  Clear Filters
                </button>
              )}
            </div>
            {selectedTags.length > 0 && (
              <p className="text-center text-sm text-secondary mt-4">
                Showing {filteredProjects.length} of {projects.length} projects
              </p>
            )}
          </motion.div>
        )}

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-lg text-secondary">
              No projects found matching the selected filters.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 text-primary hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
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