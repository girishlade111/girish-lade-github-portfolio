"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Code2, Sparkles, Rocket, ArrowDown } from "lucide-react";

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
      }, 2500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 text-primary/10"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code2 size={40} />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-12 text-accent/10"
          animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={36} />
        </motion.div>
        <motion.div
          className="absolute top-44 right-24 text-primary/8"
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Rocket size={32} />
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-1/4 text-accent/8"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={24} />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 py-20 text-center max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <div className="w-44 h-44 mx-auto mb-8 relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 blur-2xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 glow-subtle">
              <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <Github size={72} className="text-primary" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text tracking-tight"
        >
          Girish Balaso Lade
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="text-lg md:text-xl text-secondary mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          UX/UI Designer & Developer obsessed with building stuff people actually use… for free.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="h-14 flex items-center justify-center"
        >
          <span className="text-2xl md:text-3xl font-mono text-primary/90">
            {currentText}
            <span className="animate-pulse text-primary">|</span>
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
          className="mt-16"
        >
          <a
            href="#about"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-primary/10 border border-primary/30 text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
          >
            <span>Explore My Work</span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={18} />
            </motion.span>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-white/40"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};