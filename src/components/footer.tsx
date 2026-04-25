"use client";

import { motion } from "framer-motion";
import { HeartIcon, GithubIcon, LinkedinIcon, InstagramIcon, MailIcon, ArrowUpIcon, Code2Icon, SparklesIcon } from "lucide-react";
import { SiCodepen } from "react-icons/si";

const socialLinks = [
  { name: "GitHub", icon: GithubIcon, url: "https://github.com/girishlade111", gradient: "hover:bg-primary/20" },
  { name: "LinkedIn", icon: LinkedinIcon, url: "https://www.linkedin.com/in/girish-lade-075bba201/", gradient: "hover:bg-blue-500/20" },
  { name: "Instagram", icon: InstagramIcon, url: "https://www.instagram.com/girish_lade_/", gradient: "hover:bg-pink-500/20" },
  { name: "CodePen", icon: SiCodepen, url: "https://codepen.io/Girish-Lade-the-looper", gradient: "hover:bg-emerald-500/20" },
  { name: "Email", icon: MailIcon, url: "mailto:admin@ladestack.in", gradient: "hover:bg-rose-500/20" },
];

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contributions", href: "#contributions" },
  { label: "Connect", href: "#social" },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/50 to-transparent" />
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative container mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <SparklesIcon size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Girish Lade</span>
            </div>
            <p className="text-secondary text-sm leading-relaxed mb-6">
              UX/UI Designer & Developer obsessed with building tools people actually use… for free.
            </p>
            <div className="flex items-center gap-2 text-sm text-secondary">
              <Code2Icon size={16} className="text-primary" />
              <span>Designed & Built with passion</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-2 rounded-full glass-card text-sm text-secondary hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-secondary text-sm mb-4">Have a project in mind? Let's connect!</p>
            <a
              href="mailto:admin@ladestack.in"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
            >
              <MailIcon size={18} />
              <span>Say Hello</span>
            </a>
          </motion.div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="order-2 md:order-1"
          >
            <p className="text-secondary text-sm flex items-center gap-2">
              <span>© {currentYear} Lade Stack</span>
              <span className="text-white/20">•</span>
              <span>All rights reserved</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="order-1 md:order-2 flex items-center gap-3"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.2, y: -2 }}
                className={`p-2.5 rounded-xl glass-card text-secondary hover:text-primary transition-all duration-300 ${social.gradient}`}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="order-3 md:order-3"
          >
            <p className="text-muted-foreground text-xs flex items-center gap-2">
              <span>Built with</span>
              <HeartIcon size={12} className="text-rose-400 fill-rose-400 animate-pulse" />
              <span>using Next.js</span>
            </p>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 p-3 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUpIcon size={20} />
        </motion.button>
      </div>
    </footer>
  );
};