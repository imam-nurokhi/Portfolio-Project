"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { personalInfo } from "@/lib/data";
import { fadeInUp, staggerContainer } from "@/lib/variants";
import { Send, CheckCircle, Linkedin, Mail, ArrowRight } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 4000);
  };

  return (
    <section id="contact" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
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
            Get In Touch
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Build Something{" "}
            <span className="text-gradient-gold">Scalable?</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-slate-400 max-w-xl mx-auto"
          >
            Whether you have a project in mind or just want to connect,
            I&apos;m always open to interesting conversations.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Left: Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-2 space-y-4"
          >
            <motion.a
              variants={fadeInUp}
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-4 glass-strong rounded-2xl p-5 hover:border-blue-500/30 transition-all group"
              whileHover={{ x: 4 }}
            >
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Mail size={18} className="text-blue-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-0.5">Email</div>
                <div className="text-slate-200 text-sm font-medium">
                  {personalInfo.email}
                </div>
              </div>
              <ArrowRight
                size={16}
                className="ml-auto text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
              />
            </motion.a>

            <motion.a
              variants={fadeInUp}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 glass-strong rounded-2xl p-5 hover:border-blue-500/30 transition-all group"
              whileHover={{ x: 4 }}
            >
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Linkedin size={18} className="text-blue-400" />
              </div>
              <div>
                <div className="text-xs text-slate-500 mb-0.5">LinkedIn</div>
                <div className="text-slate-200 text-sm font-medium">
                  Connect with me
                </div>
              </div>
              <ArrowRight
                size={16}
                className="ml-auto text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
              />
            </motion.a>

            <motion.div
              variants={fadeInUp}
              className="glass-strong rounded-2xl p-5"
            >
              <div className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-3">
                Current Status
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-slate-300 text-sm">
                  Open to new opportunities
                </span>
              </div>
              <p className="text-slate-500 text-xs mt-2 leading-relaxed">
                Currently full-time at Qasir.id but open to consulting, freelance, and advisory roles.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-strong rounded-2xl p-6 space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-slate-500 font-medium mb-1.5 block">
                    Name
                  </label>
                  <input
                    {...register("name")}
                    placeholder="Your name"
                    className="w-full glass rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-blue-500/50 transition-colors border border-white/5 bg-transparent"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="text-xs text-slate-500 font-medium mb-1.5 block">
                    Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="your@email.com"
                    className="w-full glass rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-blue-500/50 transition-colors border border-white/5 bg-transparent"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="text-xs text-slate-500 font-medium mb-1.5 block">
                  Subject
                </label>
                <input
                  {...register("subject")}
                  placeholder="What&apos;s this about?"
                  className="w-full glass rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-blue-500/50 transition-colors border border-white/5 bg-transparent"
                />
                {errors.subject && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label className="text-xs text-slate-500 font-medium mb-1.5 block">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full glass rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-600 outline-none focus:border-blue-500/50 transition-colors border border-white/5 bg-transparent resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all ${
                  isSuccess
                    ? "bg-green-600 text-white"
                    : "bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-70"
                }`}
                whileHover={!isSubmitting && !isSuccess ? { scale: 1.01 } : {}}
                whileTap={!isSubmitting && !isSuccess ? { scale: 0.98 } : {}}
              >
                {isSuccess ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 0.8,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
