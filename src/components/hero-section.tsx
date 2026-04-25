"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { GithubIcon, ArrowRightIcon, StarIcon, GitForkIcon, ExternalLinkIcon, PlayIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { TerminalIcon, LayersIcon, CoffeeIcon, GlobeIcon } from "lucide-react";

const techStack = [
  { name: "React", color: "from-cyan-400 to-blue-500" },
  { name: "Next.js", color: "from-gray-300 to-gray-500" },
  { name: "TypeScript", color: "from-blue-400 to-indigo-500" },
  { name: "Tailwind CSS", color: "from-cyan-400 to-teal-500" },
  { name: "Node.js", color: "from-green-400 to-emerald-500" },
  { name: "Python", color: "from-yellow-400 to-orange-500" },
];

const achievements = [
  { value: "600+", label: "Projects", icon: LayersIcon },
  { value: "3.8K+", label: "Commits", icon: TerminalIcon },
  { value: "588", label: "Stars", icon: StarIcon },
  { value: "2.5K+", label: "Downloads", icon: CoffeeIcon },
];

export const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    const roles = ["UX/UI Designer", "AI Agent Builder", "Open Source Dev", "Startup Founder"];
    const currentText = roles[currentRole];
    
    let charIndex = 0;
    setIsTyping(true);
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentText.length) {
        setDisplayedText(currentText.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }, 2000);
        }, 100);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_0%,rgba(99,102,241,0.12),rgba(139,92,246,0.08),transparent_70%)]" />
        
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-primary/5 via-accent/5 to-transparent rounded-[50%] blur-[100px]" />
        
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
        
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-[80px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-2xl text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-secondary">Open to Work</span>
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Girish</span>
              <br />
              <span className="text-foreground/90">Balaso Lade</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <h2 className="text-xl md:text-2xl text-secondary flex items-center gap-2 justify-center lg:justify-start">
                <span>I'm a</span>
                <span className="text-primary font-semibold">
                  {displayedText}
                  <span className="animate-pulse ml-1">|</span>
                </span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              Building tools people actually use… for free. Passionate about open source, 
              AI, and creating beautiful digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start"
            >
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.05 }}
                >
                  <Badge
                    variant="outline"
                    className={`px-3 py-1.5 text-xs font-medium border-primary/20 bg-primary/5 bg-gradient-to-r ${tech.color} bg-clip-text text-transparent hover:border-primary/40 transition-colors`}
                  >
                    {tech.name}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
                <div className="absolute inset-[1px] bg-zinc-950 rounded-xl" />
                <span className="relative z-10 flex items-center gap-2 text-white font-semibold">
                  View Projects
                  <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="https://github.com/girishlade111"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass-card border border-white/10 hover:border-primary/30 text-secondary hover:text-primary transition-all"
              >
                <GithubIcon size={18} />
                <span>GitHub</span>
                <ExternalLinkIcon size={14} className="opacity-50" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 max-w-lg"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="w-72 h-72 md:w-80 md:h-80 mx-auto relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-violet-500 animate-spin" style={{ animationDuration: "6s" }} />
                  <div className="absolute inset-[6px] rounded-full bg-zinc-950" />
                  <div className="absolute inset-[20px] md:inset-[26px] rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden">
                    <GithubIcon size={64} className="text-primary" />
                  </div>
                  <div className="absolute -top-4 right-0 glass-card px-3 py-1.5 rounded-lg animate-bounce" style={{ animationDuration: "3s" }}>
                    <div className="flex items-center gap-2 text-xs">
                      <StarIcon size={12} className="text-yellow-400 fill-yellow-400" />
                      <span className="text-secondary">588+ Stars</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-0 glass-card px-3 py-1.5 rounded-lg animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}>
                    <div className="flex items-center gap-2 text-xs">
                      <GitForkIcon size={12} />
                      <span className="text-secondary">200+ Forks</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px]" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12"
        >
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.1 }}
            >
              <Card className="glass-card rounded-2xl p-5 text-center hover:border-primary/30 transition-all duration-300 group">
                <item.icon className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">{item.value}</div>
                <div className="text-xs text-muted-foreground">{item.label}</div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll Down</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};