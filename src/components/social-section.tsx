"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Github, Mail } from "lucide-react";
import { SiCodepen } from "react-icons/si";

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/girish_lade_/",
    color: "hover:text-pink-500"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/girish-lade-075bba201/",
    color: "hover:text-blue-500"
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/girishlade111",
    color: "hover:text-primary"
  },
  {
    name: "CodePen",
    icon: SiCodepen,
    url: "https://codepen.io/Girish-Lade-the-looper",
    color: "hover:text-green-400"
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:girish@ladestack.in",
    color: "hover:text-red-400"
  }
];

export const SocialSection = () => {
  return (
    <section id="social" className="py-20 px-6 bg-background/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-secondary mb-12 max-w-3xl mx-auto">
            Feel free to reach out on any platform. I'm always open to interesting conversations and collaborations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className={`glass-card rounded-full p-6 text-secondary ${social.color} transition-all hover:shadow-lg hover:shadow-primary/20`}
              >
                <social.icon size={32} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
