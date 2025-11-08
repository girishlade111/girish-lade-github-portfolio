"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, GitFork } from "lucide-react";

const projects = [
  {
    name: "AetherCanvas",
    description: "A powerful AI-driven design tool for creating stunning visuals and graphics with ease.",
    tags: ["TypeScript", "Next.js", "AI", "Canvas API"],
    stars: 124,
    forks: 23,
    url: "https://github.com/girishlade111/AetherCanvas"
  },
  {
    name: "Synergy-Flow",
    description: "Collaborative workflow management platform with real-time synchronization and team features.",
    tags: ["React", "Node.js", "WebSocket", "PostgreSQL"],
    stars: 98,
    forks: 15,
    url: "https://github.com/girishlade111/Synergy-Flow"
  },
  {
    name: "GB-Coder Public Beta",
    description: "An intelligent code editor with AI-powered suggestions and syntax highlighting.",
    tags: ["TypeScript", "Monaco Editor", "AI", "Electron"],
    stars: 156,
    forks: 32,
    url: "https://github.com/girishlade111/GB-Coder-Public-Beta"
  },
  {
    name: "Lade-Studio",
    description: "Creative studio suite for designers and developers with integrated tools and plugins.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    stars: 87,
    forks: 18,
    url: "https://github.com/girishlade111/Lade-Studio"
  },
  {
    name: "Lade-Stack-AI-Dev-Hub",
    description: "AI development hub with pre-built templates, models, and deployment pipelines.",
    tags: ["Python", "TensorFlow", "Docker", "FastAPI"],
    stars: 201,
    forks: 45,
    url: "https://github.com/girishlade111/Lade-Stack-AI-Dev-Hub"
  },
  {
    name: "Artify",
    description: "Transform your photos into art with AI-powered filters and creative effects.",
    tags: ["React", "TensorFlow.js", "Canvas", "WebGL"],
    stars: 143,
    forks: 28,
    url: "https://github.com/girishlade111/Artify"
  }
];

export const ProjectsSection = () => {
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
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>

              <p className="text-sm text-secondary mb-4 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
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
      </div>
    </section>
  );
};
