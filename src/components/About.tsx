"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { personalInfo, metrics } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/variants";
import { MapPin, Mail, Globe } from "lucide-react";

function AvatarPhoto() {
  const [imgError, setImgError] = useState(false);
  if (imgError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600/40 to-amber-500/20">
        <span
          className="text-4xl font-bold text-gradient-blue select-none"
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
      onError={() => setImgError(true)}
    />
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Bio */}
          <div>
            {/* Avatar */}
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 ring-2 ring-blue-500/40">
                <AvatarPhoto />
              </div>
              <div>
                <p className="text-slate-200 font-semibold text-sm">{personalInfo.name}</p>
                <p className="text-blue-400 text-xs mt-0.5">Product Architect · Full Stack Dev</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mb-3">
              <span className="text-xs font-mono text-blue-400 tracking-widest uppercase px-3 py-1 glass rounded-full border border-blue-500/20">
                About Me
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Crafting{" "}
              <span className="text-gradient-blue">Digital Systems</span>
              <br />
              That Scale
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-slate-400 leading-relaxed mb-6 text-base"
            >
              I&apos;m{" "}
              <span className="text-slate-200 font-medium">
                {personalInfo.name}
              </span>
              , an IT Product Architect and Full Stack Developer based in{" "}
              {personalInfo.location}. I bridge the gap between complex system
              architecture and intuitive user experiences.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className="text-slate-400 leading-relaxed mb-8 text-base"
            >
              With 5+ years spanning SaaS platforms, enterprise ERP systems, and
              full-stack development, I specialize in building scalable,
              maintainable solutions that drive real business value. Currently
              architecting the platform at{" "}
              <span className="text-blue-400 font-medium">Qasir.id</span> that
              powers 50,000+ SMEs.
            </motion.p>

            {/* Contact info */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col gap-3 text-sm"
            >
              {[
                {
                  icon: Mail,
                  label: personalInfo.email,
                  href: `mailto:${personalInfo.email}`,
                },
                {
                  icon: MapPin,
                  label: personalInfo.location,
                  href: null,
                },
                {
                  icon: Globe,
                  label: "muhammad-imam-nurokhi",
                  href: personalInfo.linkedin,
                },
              ].map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 glass rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={14} className="text-blue-400" />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-blue-400 transition-colors"
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-slate-300">{label}</span>
                  )}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Metrics */}
          <motion.div variants={fadeInUp} className="space-y-4">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                variants={fadeInUp}
                custom={i}
                className="glass-strong rounded-2xl p-6 flex items-center gap-5 hover:border-blue-500/30 transition-all group cursor-default"
                whileHover={{ x: 8 }}
              >
                <div className="text-5xl font-bold text-gradient-blue font-mono">
                  {metric.value}
                </div>
                <div>
                  <div className="text-slate-200 font-semibold">
                    {metric.label}
                  </div>
                  <div className="text-slate-500 text-sm mt-0.5">
                    {metric.label === "Years Experience"
                      ? "2018 – Present"
                      : metric.label === "Users Impacted"
                      ? "via Qasir.id platform"
                      : "Across all clients"}
                  </div>
                </div>
                <div className="ml-auto w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                </div>
              </motion.div>
            ))}

            {/* Philosophy card */}
            <motion.div
              variants={fadeInUp}
              className="glass-strong rounded-2xl p-6 border-amber-500/20 hover:border-amber-500/40 transition-all"
              whileHover={{ x: 8 }}
            >
              <div className="text-amber-400 text-xs font-mono tracking-widest uppercase mb-2">
                Philosophy
              </div>
              <p className="text-slate-300 text-sm leading-relaxed italic">
                &ldquo;{personalInfo.summary}&rdquo;
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
