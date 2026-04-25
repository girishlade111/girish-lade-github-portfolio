"use client";

import { motion } from "framer-motion";
import { InstagramIcon, LinkedinIcon, GithubIcon, MailIcon, UsersIcon, GlobeIcon } from "lucide-react";
import { SiCodepen } from "react-icons/si";

const socialLinks = [
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://www.instagram.com/girish_lade_/",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-pink-500/20"
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/girish-lade-075bba201/",
    gradient: "from-blue-500 to-blue-600",
    bgGradient: "hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-blue-600/20"
  },
  {
    name: "GitHub",
    icon: GithubIcon,
    url: "https://github.com/girishlade111",
    gradient: "from-primary to-accent",
    bgGradient: "hover:bg-gradient-to-br hover:from-primary/20 hover:to-accent/20"
  },
  {
    name: "CodePen",
    icon: SiCodepen,
    url: "https://codepen.io/Girish-Lade-the-looper",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "hover:bg-gradient-to-br hover:from-emerald-500/20 hover:to-teal-500/20"
  },
  {
    name: "Email",
    icon: MailIcon,
    url: "mailto:admin@ladestack.in",
    gradient: "from-rose-500 to-red-500",
    bgGradient: "hover:bg-gradient-to-br hover:from-rose-500/20 hover:to-red-500/20"
  },
  {
    name: "Website",
    icon: GlobeIcon,
    url: "https://ladestack.in",
    gradient: "from-violet-500 to-indigo-500",
    bgGradient: "hover:bg-gradient-to-br hover:from-violet-500/20 hover:to-indigo-500/20"
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
            <UsersIcon size={16} />
            <span>Get In Touch</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-lg text-secondary mb-12 max-w-3xl mx-auto leading-relaxed">
            Feel free to reach out on any platform. I'm always open to interesting conversations and collaborations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5">
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
                whileHover={{ scale: 1.15, y: -6 }}
                className={`group relative glass-card p-5 rounded-2xl transition-all duration-300 hover:shadow-lg ${social.bgGradient}`}
              >
                <div className="relative z-10">
                  <social.icon size={28} className="text-secondary group-hover:text-white transition-colors duration-300" />
                </div>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};