"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { GithubIcon, ArrowRightIcon, PlayIcon, ChevronDownIcon, Code2Icon, PaletteIcon, LightbulbIcon, RocketIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const roles = ["UX/UI Designer", "AI Agent Builder", "Open Source Developer", "Startup Founder"];
const roleColors = ["from-pink-500 to-rose-500", "from-violet-500 to-purple-500", "from-emerald-500 to-teal-500", "from-amber-500 to-orange-500"];

const skills = [
  { name: "React", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Next.js", level: 88 },
  { name: "Node.js", level: 82 },
  { name: "Python", level: 75 },
  { name: "AI/ML", level: 70 },
];

const highlights = [
  { icon: Code2Icon, title: "Clean Code", desc: "Well-structured, maintainable code" },
  { icon: PaletteIcon, title: "Beautiful UI", desc: "Pixel-perfect designs with attention to detail" },
  { icon: LightbulbIcon, title: "Innovation", desc: "Creative solutions to complex problems" },
  { icon: RocketIcon, title: "Performance", desc: "Optimized for speed and efficiency" },
];

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => (p >= 100 ? 0 : p + 2));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((r) => (r + 1) % roles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-zinc-950">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
        
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 50 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-px bg-white/30 rounded-full"
              initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: 0 }}
              animate={{ 
                opacity: [0, 0.5, 0],
                y: `${Math.random() * 100}%`,
                scale: [1, 2, 1]
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative flex h-2.5 w-2.5"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </motion.span>
              <span className="text-sm font-medium text-secondary">Open for Opportunities</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <div className="relative w-28 h-28 md:w-36 md:h-36">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-violet-500 animate-spin" style={{ animationDuration: "8s" }} />
              <div className="absolute inset-[4px] md:inset-[6px] rounded-full bg-zinc-950" />
              <div className="absolute inset-[12px] md:inset-[16px] rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                <GithubIcon size={48} className="text-primary" />
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">Girish</span>
            <span className="gradient-text"> Balaso Lade</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8 h-12 flex items-center justify-center"
          >
            <div className="flex items-center gap-3 text-xl md:text-2xl">
              <span className="text-secondary">I'm a</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ duration: 0.5 }}
                  className={`font-bold bg-gradient-to-r ${roleColors[currentRole]} bg-clip-text text-transparent`}
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Building tools people actually use… for free. Passionate about open source, 
            AI innovation, and crafting beautiful digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" className="h-14 px-8 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/25 group">
              <a href="#projects" className="flex items-center gap-2">
                <span className="font-semibold">View Projects</span>
                <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-xl border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10">
              <a href="https://github.com/girishlade111" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <GithubIcon size={18} />
                <span className="font-semibold">GitHub</span>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-8 rounded-xl border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10">
              <a href="mailto:admin@ladestack.in" className="flex items-center gap-2">
                <span className="font-semibold">Contact</span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl mb-16"
          >
            {[
              { value: "600+", label: "Repositories", color: "text-blue-400" },
              { value: "3.8K+", label: "Commits", color: "text-emerald-400" },
              { value: "588", label: "Stars", color: "text-yellow-400" },
              { value: "2.5K+", label: "Downloads", color: "text-violet-400" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
              >
                <Card className="rounded-2xl p-5 text-center bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
              >
                <Card className="rounded-2xl p-4 text-center bg-white/5 backdrop-blur-sm border-white/10 hover:border-primary/30 transition-all duration-300 group">
                  <item.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-sm font-semibold mb-1">{item.title}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll Down</span>
          <ChevronDownIcon size={20} className="text-secondary animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
};