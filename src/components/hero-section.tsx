"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { GithubIcon, ArrowRightIcon, SparklesIcon, MousePointerIcon, CodeIcon, ZapIcon, StarIcon, GitForkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const features = [
  { icon: CodeIcon, label: "Clean Code", color: "text-blue-400" },
  { icon: SparklesIcon, label: "AI Powered", color: "text-purple-400" },
  { icon: ZapIcon, label: "Fast Performance", color: "text-yellow-400" },
];

const floatingElements = [
  { icon: StarIcon, x: "10%", y: "20%", delay: 0 },
  { icon: GitForkIcon, x: "85%", y: "15%", delay: 0.5 },
  { icon: CodeIcon, x: "15%", y: "70%", delay: 1 },
  { icon: SparklesIcon, x: "80%", y: "75%", delay: 1.5 },
];

export const HeroSection = () => {
  const ref = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(99,102,241,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#0a0a0f_0deg,rgba(99,102,241,0.05)_180deg,#0a0a0f_360deg)]" />
        
        <div className="absolute inset-0">
          {floatingElements.map((el, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.15, scale: 1 }}
              transition={{ duration: 0.8, delay: el.delay }}
              className={`absolute ${el.color} blur-sm`}
              style={{ left: el.x, top: el.y }}
            >
              <el.icon size={32} />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-violet-500/20 blur-[120px]"
          style={{
            x: mousePosition.x * 2,
            y: mousePosition.y * 2,
            left: "50%",
            top: "40%",
            translateX: "-50%",
            translateY: "-50%",
          }}
        />

        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 container mx-auto px-6 py-32">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card border-primary/20">
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative flex h-2.5 w-2.5"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </motion.span>
              <span className="text-sm font-medium text-secondary">Open for Opportunities</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-10 relative"
          >
            <div className="w-36 h-36 md:w-44 md:h-44 relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-primary via-accent to-violet-500"
              >
                <div className="w-full h-full rounded-full bg-zinc-950" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-dashed border-primary/30"
              />
              <div className="absolute inset-3 md:inset-4 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden border border-white/10">
                <GithubIcon size={48} className="text-primary" />
              </div>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -inset-4 rounded-full bg-primary/10 blur-xl"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {["Open Source", "AI Enthusiast", "TypeScript", "Next.js Expert", "React", "Creative"].map((tag, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                <Badge className="px-3 py-1.5 text-xs font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          >
            <span className="gradient-text">Girish Balaso Lade</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <Typewriter roles={["UX/UI Designer", "AI Agent Builder", "Open Source Dev", "Startup Founder"]} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg md:text-xl text-secondary max-w-2xl mb-10 leading-relaxed"
          >
            Obsessed with building tools people actually use… for free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" className="h-12 px-8 rounded-xl bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-lg shadow-primary/25 group">
              <a href="#projects" className="flex items-center gap-2">
                <span>Explore Work</span>
                <ArrowRightIcon size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-xl glass-card border-white/10 hover:border-primary/30 hover:text-primary">
              <a href="https://github.com/girishlade111" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <GithubIcon size={18} />
                <span>GitHub</span>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-xl glass-card border-white/10 hover:border-primary/30 hover:text-primary">
              <a href="mailto:admin@ladestack.in" className="flex items-center gap-2">
                <span>Contact Me</span>
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl"
          >
            {[
              { value: "600+", label: "Repositories", color: "from-blue-400 to-cyan-400" },
              { value: "3.8K+", label: "Commits", color: "from-emerald-400 to-teal-400" },
              { value: "588", label: "Stars", color: "from-yellow-400 to-orange-400" },
              { value: "16", label: "PRs Merged", color: "from-violet-400 to-purple-400" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="glass-card rounded-2xl p-5 text-center group hover:border-primary/30 transition-all duration-300"
              >
                <div className={`text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MousePointerIcon size={12} />
            <span>Scroll to explore</span>
          </div>
          <div className="w-7 h-11 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-2.5 rounded-full bg-gradient-to-b from-primary to-accent"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

function Typewriter({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      const current = roles[index];

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(isDeleting ? text.slice(0, -1) : current.slice(0, text.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, roles]);

  return (
    <h2 className="text-2xl md:text-3xl font-semibold">
      <span className="text-secondary mr-2">I'm a</span>
      <span className="gradient-text">{text}</span>
      <span className="animate-pulse text-primary ml-1">|</span>
    </h2>
  );
}