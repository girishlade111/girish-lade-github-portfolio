"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Activity } from "lucide-react";

export const ContributionsSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contributions" className="py-24 px-6 bg-zinc-950/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <Activity size={16} />
            <span>Activity</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            GitHub Contributions
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
            A visual representation of my coding activity and open-source contributions over the past year.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 md:p-10 overflow-x-auto"
        >
          {mounted && (
            <div className="flex justify-center min-w-[700px]">
              <GitHubCalendar
                username="girishlade111"
                colorScheme="dark"
                blockSize={14}
                blockMargin={5}
                fontSize={14}
                theme={{
                  dark: ['#0a0a0f', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};