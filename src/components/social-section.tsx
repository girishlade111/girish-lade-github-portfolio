"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Github, Mail, Users } from "lucide-react";
import { SiCodepen } from "react-icons/si";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/girish_lade_/",
    color: "hover:text-pink-500",
    bg: "hover:bg-pink-500/10"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/girish-lade-075bba201/",
    color: "hover:text-blue-400",
    bg: "hover:bg-blue-400/10"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/girishlade111",
    color: "hover:text-primary",
    bg: "hover:bg-primary/10"
  },
  {
    name: "CodePen",
    icon: SiCodepen,
    url: "https://codepen.io/Girish-Lade-the-looper",
    color: "hover:text-emerald-400",
    bg: "hover:bg-emerald-400/10"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:girish@ladestack.in",
    color: "hover:text-rose-400",
    bg: "hover:bg-rose-400/10"
  }
];

export const SocialSection = () => {
  return (
    <section id="social" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <Users size={16} />
            <span>Get In Touch</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-lg text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Feel free to reach out on any platform. I'm always open to interesting conversations and collaborations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.15, y: -4 }}
                className={`glass-card p-5 rounded-2xl text-secondary ${social.color} ${social.bg} transition-all duration-300 hover:shadow-lg hover:shadow-primary/10`}
              >
                <social.icon size={28} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};