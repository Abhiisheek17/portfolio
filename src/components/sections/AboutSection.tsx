"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Download } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-subtle border-t border-border/50 relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/50 mb-12">
          About Me
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Heading */}
          <h3 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Good design creates clarity.<br />
            Everything else{" "}
            <span className="text-foreground/60">follows.</span>
          </h3>

          {/* Content */}
          <div className="max-w-2xl mx-auto space-y-6 text-foreground/70 text-base md:text-lg leading-relaxed mt-12">
            <p>
              I started my journey with a deep curiosity for how systems operate under the hood.
              As a Product & UX Designer, my philosophy is grounded in creating structure out of ambiguity.
              Whether it&apos;s re-thinking a checkout flow to reduce friction, or architecting a real-time
              streaming dashboard, I prioritize clarity and scalable product thinking over fleeting trends.
              When I&apos;m not pushing pixels, I&apos;m probably analyzing the user flows of everyday objects or
              finding new ways to simplify complex problems.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-10">
            <Link
              href="/Abhishek_Srivastava.pdf"
              className="inline-flex items-center justify-center bg-primary text-white px-10 py-5 rounded-lg font-medium hover:bg-primary/90 transition shadow-lg"
            >
               Download Resume
            </Link>
          
          </div>
        </motion.div>
      </div>
    </section>
  );
}