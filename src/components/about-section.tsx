"use client";

import { motion } from "framer-motion";
import { Star, GitCommit, GitPullRequest, AlertCircle, FolderGit2, Activity } from "lucide-react";

const stats = [
  { icon: Star, label: "Stars Earned", value: "588", color: "text-yellow-400" },
  { icon: GitCommit, label: "Total Commits (Last Year)", value: "3.8K+", color: "text-green-400" },
  { icon: GitPullRequest, label: "Pull Requests", value: "16", color: "text-purple-400" },
  { icon: AlertCircle, label: "Issues", value: "42", color: "text-red-400" },
  { icon: FolderGit2, label: "Repositories", value: "614", color: "text-blue-400" },
  { icon: Activity, label: "Contributions", value: "3,183+", color: "text-primary" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
            I'm <span className="text-primary font-semibold">Girish Balaso Lade</span> — a developer, designer, and AI enthusiast 
            passionate about creating open-source tools and modern web experiences. 
            I love mixing creativity with code to bring design to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/10 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-background/50 ${stat.color}`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-secondary">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
