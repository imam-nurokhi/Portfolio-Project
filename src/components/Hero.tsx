"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Download, ArrowDown, Github, Linkedin, MapPin } from "lucide-react";
import { personalInfo } from "@/lib/data";

const taglineColors = [
  "text-gradient-blue",
  "text-gradient-gold",
  "text-gradient-blue",
  "text-gradient-gold",
];

function ProfilePhoto() {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600/30 to-amber-500/20">
        <span
          className="text-7xl font-bold text-gradient-blue select-none"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          IN
        </span>
      </div>
    );
  }

  return (
    <Image
      src="/IMG_5400.png"
      alt="Muhammad Imam Nurokhi"
      fill
      className="object-cover object-top"
      priority
      onError={() => setImgError(true)}
    />
  );
}

export default function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % personalInfo.taglines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── Left: Text content ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 glass rounded-full text-xs text-slate-400 mb-8"
            >
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <MapPin size={11} />
              {personalInfo.location} · Available for opportunities
            </motion.div>

            {/* Main Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 leading-none"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="text-white">Muhammad</span>
              <br />
              <span className="text-gradient-blue">Imam Nurokhi</span>
            </motion.h1>

            {/* Animated Tagline */}
            <div className="h-10 md:h-12 flex items-center justify-center lg:justify-start mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTagline}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className={`text-xl md:text-2xl font-semibold ${taglineColors[currentTagline]}`}
                >
                  {personalInfo.taglines[currentTagline]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-slate-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              {personalInfo.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <motion.a
                href="#projects"
                className="group flex items-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all glow-blue"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View My Work
                <ArrowDown
                  size={16}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-7 py-3.5 glass hover:bg-white/10 text-slate-200 font-semibold rounded-xl transition-all border border-white/10 hover:border-white/20"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                  <Linkedin size={15} />
                </div>
                LinkedIn
              </a>
              <div className="w-px h-4 bg-white/10" />
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200 transition-colors group"
              >
                <div className="w-8 h-8 glass rounded-lg flex items-center justify-center group-hover:border-white/30 transition-colors">
                  <Github size={15} />
                </div>
                GitHub
              </a>
            </motion.div>
          </div>

          {/* ── Right: Profile Photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            {/* Rotating gradient ring */}
            <div className="relative">
              <motion.div
                className="absolute -inset-[3px] rounded-[2rem] z-0"
                style={{
                  background:
                    "conic-gradient(from 0deg, #3b82f6, #f59e0b, #3b82f6)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              {/* Photo container */}
              <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-[1.875rem] overflow-hidden z-10 glass-strong">
                <ProfilePhoto />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0e1a]/80 to-transparent pointer-events-none" />
                {/* Name tag overlay */}
                <div className="absolute bottom-4 left-4 right-4 pointer-events-none">
                  <div className="glass rounded-xl px-3 py-2 backdrop-blur-md">
                    <p className="text-white text-xs font-semibold">Muhammad Imam Nurokhi</p>
                    <p className="text-blue-300 text-[10px] mt-0.5">Product Architect · Full Stack Dev</p>
                  </div>
                </div>
              </div>

              {/* Floating badge: Available */}
              <motion.div
                className="absolute -top-3 -right-3 z-20 glass rounded-full px-3 py-1.5 flex items-center gap-1.5 text-[11px] font-medium text-green-300 border border-green-500/30 shadow-lg"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                Available
              </motion.div>

              {/* Floating badge: Experience */}
              <motion.div
                className="absolute -bottom-3 -left-3 z-20 glass rounded-full px-3 py-1.5 flex items-center gap-1.5 text-[11px] font-medium text-amber-300 border border-amber-500/30 shadow-lg"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                ✦ 5+ Years Exp
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-xs text-slate-600 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-px h-10 bg-gradient-to-b from-blue-500/50 to-transparent"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
}
