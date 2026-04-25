"use client";

import { motion } from "framer-motion";
import { HeartIcon, ZapIcon } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-10" />
          
          <p className="text-secondary flex items-center justify-center gap-2 flex-wrap text-base">
            <span>© 2025 Lade Stack</span>
            <span className="mx-2 text-white/20">•</span>
            <span>Built with</span>
            <HeartIcon size={16} className="text-rose-400 fill-rose-400" />
            <span>by</span>
            <span className="text-primary font-semibold">Girish Lade</span>
          </p>
          
          <div className="flex items-center justify-center gap-2 mt-5 text-sm text-muted-foreground">
            <ZapIcon size={14} className="text-primary" />
            <span>Powered by Next.js, Tailwind CSS & Framer Motion</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};