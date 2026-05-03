"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const skills = [
    "Product thinking",
    "UX & interaction design",
    "Design systems",
    "Complex flow design",
    "Real-time UX",
    "Payment & trust systems",
    "Information architecture",
    "Cross-platform design",
    "High-fidelity UI",
    "Prototyping",
    "Responsive design",
    "Branding basics",
    "HTML, CSS",
    "JavaScript",
    "Figma, Framer",
    "AI tools"
  ];

  const duplicatedSkills = [...skills, ...skills];

  return (
    <section className="min-h-screen flex flex-col justify-between px-6 bg-background relative overflow-hidden">

      {/* GRID */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

      {/* CENTER CONTENT */}
      <div className="flex flex-1 items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-10">
            ABHISHEK SRIVASTAVA
          </h1>

          <p className="text-xl md:text-2xl text-foreground/60 mb-14 max-w-2xl mx-auto">
            I design systems that solve real user problems, focus on clarity, trust, and scalable product thinking.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="#work"
              className="inline-flex items-center justify-center bg-primary text-white px-10 py-5 rounded-lg font-medium hover:bg-primary/90 transition shadow-lg"
            >
              View case studies
              <ArrowRight className="ml-3 w-5 h-5" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-border px-10 py-5 rounded-lg font-medium hover:bg-subtle transition"
            >
              Let’s Talk
            </Link>
          </div>
        </motion.div>
      </div>

      {/* STRIP (INLINE) */}
      <div className="relative z-10 border-t border-border/50 py-6 overflow-hidden bg-subtle">

        {/* fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

        <motion.div
          className="flex flex-nowrap whitespace-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 40,
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div key={index} className="flex items-center shrink-0">
              <span className="text-sm md:text-base font-medium text-foreground/80 uppercase tracking-widest px-8">
                {skill}
              </span>
              <span className="text-foreground/30 text-lg">•</span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}