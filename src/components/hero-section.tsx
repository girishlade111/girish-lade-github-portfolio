"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { GithubIcon, ArrowRightIcon, ZapIcon, SparklesIcon, StarIcon, GitCommitIcon, UsersIcon, AwardIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const roles = ["UX/UI Designer", "AI Agent Builder", "Open Source Dev", "Startup Founder"];

const features = [
  { icon: SparklesIcon, label: "AI-Powered", color: "text-violet-400", bg: "bg-violet-400/10" },
  { icon: StarIcon, label: "Open Source", color: "text-yellow-400", bg: "bg-yellow-400/10" },
  { icon: GitCommitIcon, label: "Active Dev", color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { icon: UsersIcon, label: "Collaborator", color: "text-blue-400", bg: "bg-blue-400/10" },
];

const stats = [
  { value: "600+", label: "Repositories", suffix: "" },
  { value: "3.8", label: "Commits", suffix: "K+" },
  { value: "588", label: "Stars Earned", suffix: "" },
  { value: "2.5", label: "Downloads", suffix: "K+" },
];

export const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 30);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 30);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 3000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
        
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/30 via-accent/20 to-violet-500/30 blur-[150px]"
        />

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-primary/40"
              initial={{ 
                x: `${Math.random() * 100}%`, 
                y: `${Math.random() * 100}%`,
                opacity: 0
              }}
              animate={{ 
                opacity: [0, 1, 0],
                y: `${Math.random() * 100}%`
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.08),transparent)]" />
        
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="rgba(99,102,241,0.3)" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="url(#lineGrad)" strokeWidth="1" />
          <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="url(#lineGrad)" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border-primary/20">
                <motion.span
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="relative flex h-2.5 w-2.5"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </motion.span>
                <span className="text-sm text-secondary font-medium">Available for freelance & collaborations</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
            >
              <span className="text-foreground">Hi, I'm </span>
              <br className="hidden sm:block" />
              <span className="gradient-text">Girish Balaso Lade</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 text-xl md:text-2xl text-secondary">
                <span>I'm a</span>
                <span className="text-primary font-bold min-w-[200px] text-left">
                  {displayText}
                  <span className="animate-pulse ml-0.5">|</span>
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed"
            >
              Passionate about creating tools that people actually use. Building open-source projects, 
              exploring AI, and designing delightful experiences — all for free.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {features.map((feature, i) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${feature.bg} border border-white/5`}>
                    <feature.icon size={14} className={feature.color} />
                    <span className="text-xs font-medium text-secondary">{feature.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl overflow-hidden"
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
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass-card border border-white/10 hover:border-primary/30 hover:text-primary text-secondary transition-all duration-300"
              >
                <GithubIcon size={18} />
                <span className="font-medium">GitHub Profile</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-violet-500 p-[3px]">
                      <div className="w-full h-full rounded-full bg-zinc-950" />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-3 md:inset-4 rounded-full border border-dashed border-primary/40"
                  />

                  <div className="absolute inset-[16px] md:inset-[22px] rounded-full bg-gradient-to-br from-zinc-800 via-zinc-900 to-zinc-950 flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl">
                    <GithubIcon size={72} className="text-primary" />
                  </div>

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute -top-4 -right-4 glass-card rounded-2xl px-4 py-3 animate-bounce"
                style={{ animationDuration: "2.5s" }}
              >
                <div className="flex items-center gap-2">
                  <AwardIcon size={18} className="text-yellow-400" />
                  <span className="text-sm font-medium">Top Developer</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-4 -left-4 glass-card rounded-2xl px-4 py-3 animate-bounce"
                style={{ animationDuration: "3s", animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-2">
                  <ZapIcon size={18} className="text-primary" />
                  <span className="text-sm font-medium">600+ Projects</span>
                </div>
              </motion.div>

              <div className="absolute inset-0 bg-primary/30 rounded-full blur-[120px]" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.1 }}
            >
              <Card className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 group">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
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
          className="flex flex-col items-center gap-3"
        >
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-gradient-to-b from-primary to-accent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};