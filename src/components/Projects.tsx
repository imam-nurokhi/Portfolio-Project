"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/variants";
import { X, ExternalLink, Zap } from "lucide-react";

const accentBorders: Record<string, string> = {
  blue: "hover:border-blue-500/40",
  gold: "hover:border-amber-500/40",
  purple: "hover:border-purple-500/40",
  green: "hover:border-green-500/40",
};

const accentText: Record<string, string> = {
  blue: "text-blue-400",
  gold: "text-amber-400",
  purple: "text-purple-400",
  green: "text-green-400",
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section id="projects" className="relative py-24 px-6">
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
            Portfolio
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Selected <span className="text-gradient-blue">Projects</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-slate-400 mt-4 max-w-xl mx-auto text-sm"
          >
            Click any project to explore full details, architecture decisions,
            and impact metrics.
          </motion.p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              whileHover={{ y: -6, scale: 1.01 }}
              onClick={() => setSelectedProject(project)}
              className={`glass-strong rounded-2xl overflow-hidden cursor-pointer group transition-all ${
                accentBorders[project.accentColor]
              } ${i === 0 ? "md:col-span-1 md:row-span-1" : ""}`}
            >
              {/* Gradient placeholder */}
              <div
                className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-2">
                      {project.id === 1
                        ? "🏗️"
                        : project.id === 2
                        ? "🔧"
                        : project.id === 3
                        ? "🖥️"
                        : "📦"}
                    </div>
                    <div
                      className={`text-sm font-semibold ${
                        accentText[project.accentColor]
                      }`}
                    >
                      {project.role}
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 glass rounded-lg flex items-center justify-center">
                    <ExternalLink size={14} className="text-slate-300" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-slate-100 text-lg mb-1">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {project.shortDesc}
                </p>

                {/* Impact badge */}
                <div
                  className={`flex items-center gap-1.5 text-xs font-medium mb-4 ${
                    accentText[project.accentColor]
                  }`}
                >
                  <Zap size={12} />
                  {project.impact}
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 glass rounded-full text-slate-400 border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0.2 }}
              className="glass-strong rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal gradient header */}
              <div
                className={`h-40 bg-gradient-to-br ${selectedProject.gradient} relative`}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-8 h-8 glass rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X size={16} className="text-slate-300" />
                </button>
                <div className="absolute bottom-4 left-6">
                  <span
                    className={`text-xs font-mono px-2 py-1 glass rounded-full ${
                      accentText[selectedProject.accentColor]
                    }`}
                  >
                    {selectedProject.role}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-100 mb-2">
                  {selectedProject.title}
                </h3>
                <div
                  className={`flex items-center gap-1.5 text-sm font-medium mb-4 ${
                    accentText[selectedProject.accentColor]
                  }`}
                >
                  <Zap size={14} />
                  {selectedProject.impact}
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
                    Key Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-slate-300 text-sm"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="text-sm px-3 py-1 glass rounded-lg text-slate-300 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
