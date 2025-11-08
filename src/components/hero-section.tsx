"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Code2, Sparkles, Rocket } from "lucide-react";

export const HeroSection = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const roles = [
    "UX/UI Designer",
    "AI Agent Builder",
    "Open Source Developer",
    "Startup Founder"
  ];

  useEffect(() => {
    if (charIndex < roles[currentIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentText(roles[currentIndex].slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setCurrentText("");
        setCurrentIndex((currentIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 left-10 text-primary/20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Code2 size={40} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-primary/20"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Sparkles size={40} />
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-primary/20"
        animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity }}
      >
        <Rocket size={35} />
      </motion.div>

      <div className="container mx-auto px-6 py-20 text-center max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/20">
            <div className="w-full h-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
              <Github size={80} className="text-primary" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent"
        >
          Girish Balaso Lade
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-xl md:text-2xl text-secondary mb-6 max-w-3xl mx-auto"
        >
          UX/UI Designer & Developer obsessed with building stuff people actually use… for free.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="h-12 flex items-center justify-center"
        >
          <span className="text-2xl font-mono text-primary">
            {currentText}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12"
        >
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20"
          >
            <span>Explore My Work</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
