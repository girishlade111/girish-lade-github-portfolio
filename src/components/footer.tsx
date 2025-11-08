"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          
          <p className="text-secondary flex items-center justify-center gap-2 flex-wrap">
            <span>Copyright © 2025 Lade Stack — Built with</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span>by <span className="text-primary font-semibold">Girish Lade</span></span>
          </p>
          
          <p className="text-sm text-muted-foreground mt-4">
            Powered by Next.js, Tailwind CSS & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
