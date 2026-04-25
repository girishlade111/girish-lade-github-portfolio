"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

export const ContributionsSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contributions" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            GitHub Contributions
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            A visual representation of my coding activity and open-source contributions over the past year.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-2xl p-8 overflow-x-auto"
        >
          {mounted && (
            <div className="flex justify-center">
              <GitHubCalendar
                username="girishlade111"
                colorScheme="dark"
                blockSize={14}
                blockMargin={5}
                fontSize={14}
                theme={{
                  dark: ['#0D1117', '#0e4429', '#006d32', '#26a641', '#39d353'],
                }}
              />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
