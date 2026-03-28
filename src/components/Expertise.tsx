"use client";

import { motion } from "framer-motion";
import { expertise, techStack } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/variants";

const categoryColors: Record<string, string> = {
  language: "border-blue-500/40 bg-blue-500/10 text-blue-300",
  frontend: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300",
  backend: "border-green-500/40 bg-green-500/10 text-green-300",
  erp: "border-amber-500/40 bg-amber-500/10 text-amber-300",
  database: "border-purple-500/40 bg-purple-500/10 text-purple-300",
  devops: "border-orange-500/40 bg-orange-500/10 text-orange-300",
  tool: "border-pink-500/40 bg-pink-500/10 text-pink-300",
};

export default function Expertise() {
  return (
    <section id="expertise" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-xs font-mono text-blue-400 tracking-widest uppercase px-3 py-1 glass rounded-full border border-blue-500/20 inline-block mb-4"
          >
            What I Do
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Areas of{" "}
            <span className="text-gradient-gold">Expertise</span>
          </motion.h2>
        </motion.div>

        {/* Expertise Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              variants={scaleIn}
              custom={i}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-strong rounded-2xl p-6 cursor-default group hover:border-blue-500/30 transition-all"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-slate-100 mb-2 text-base">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {item.highlights.map((h) => (
                  <span
                    key={h}
                    className="text-xs px-2 py-0.5 glass rounded-full text-slate-400 border border-white/5"
                  >
                    {h}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-center text-slate-500 text-sm font-mono uppercase tracking-widest mb-8">
            Tech Stack
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.name}
                variants={scaleIn}
                whileHover={{ scale: 1.1, y: -3 }}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-sm font-medium cursor-default transition-all ${
                  categoryColors[tech.category] || categoryColors.tool
                }`}
              >
                <span className="text-base leading-none">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
