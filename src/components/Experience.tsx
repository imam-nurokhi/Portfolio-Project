"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { fadeInUp, fadeInLeft, staggerContainer, lineGrow } from "@/lib/variants";
import { Calendar } from "lucide-react";

const accentColors: Record<string, string> = {
  blue: "border-blue-500/40 bg-blue-500/10 text-blue-400",
  gold: "border-amber-500/40 bg-amber-500/10 text-amber-400",
  purple: "border-purple-500/40 bg-purple-500/10 text-purple-400",
};

const dotColors: Record<string, string> = {
  blue: "bg-blue-500 shadow-blue-500/50",
  gold: "bg-amber-500 shadow-amber-500/50",
  purple: "bg-purple-500 shadow-purple-500/50",
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto">
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
            Career Journey
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Work <span className="text-gradient-blue">Experience</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/5 md:left-1/2">
            <motion.div
              variants={lineGrow}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full bg-gradient-to-b from-blue-500/60 via-amber-500/40 to-purple-500/30 h-full origin-top"
            />
          </div>

          {/* Experience items */}
          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                variants={fadeInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1 }}
                className={`relative pl-16 md:pl-0 ${
                  i % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 top-6 w-4 h-4 rounded-full shadow-lg ${
                    dotColors[exp.color]
                  } md:left-1/2 md:-translate-x-1/2 z-10`}
                />

                {/* Card */}
                <motion.div
                  className="glass-strong rounded-2xl p-6 hover:border-white/20 transition-all group"
                  whileHover={{ y: -4 }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="font-bold text-slate-100 text-lg leading-tight">
                        {exp.role}
                      </h3>
                      <div className="text-blue-400 font-medium text-sm mt-0.5">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 flex-shrink-0">
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
                          accentColors[exp.color]
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                    <Calendar size={12} />
                    {exp.period}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-slate-400 text-sm"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/60 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 glass rounded-full text-slate-400 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
