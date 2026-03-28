"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative py-10 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Logo + Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Terminal size={12} className="text-white" />
              </div>
              <span className="font-mono text-sm text-blue-400">imam.dev</span>
            </div>
            <p className="text-slate-600 text-xs">
              © {new Date().getFullYear()} {personalInfo.name}. All rights
              reserved.
            </p>
          </div>

          {/* Center: Status */}
          <motion.div
            className="flex items-center gap-2 glass rounded-full px-4 py-2 text-xs"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
            <span className="text-slate-400">System Status: Optimal</span>
          </motion.div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-3">
            {[
              {
                icon: Github,
                href: personalInfo.github,
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: personalInfo.linkedin,
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: `mailto:${personalInfo.email}`,
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-500 hover:text-slate-200 hover:border-white/20 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
