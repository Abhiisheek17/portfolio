"use client";

import { motion } from "framer-motion";

const lines = [
  "I simplify complexity and turn unclear requirements into structured systems.",
  "Design isn’t just how it looks, it’s how it works in real-world use.",
  "Every interface is part of a larger system, never an isolated screen."
];

export default function PhilosophySection() {
  return (
    <section className="px-6 py-20 md:py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1.2] tracking-tight">

          {lines.map((line, lineIndex) => (
            <div
              key={lineIndex}
              className="flex justify-center flex-wrap gap-x-2 mb-10 md:mb-12"
            >
              {line.split(" ").map((word, i) => {
                const isImportant =
                  word.includes("complexity") ||
                  word.includes("structured") ||
                  word.includes("works") ||
                  word.includes("screen");

                return (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0.25, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: lineIndex * 0.2 + i * 0.035 }}
                    viewport={{ once: true }}
                    className={`transition-all duration-300 ${
                      isImportant
                        ? "text-White font-semibold"
                        : "text-white/50"
                    } hover:text-primary`}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </div>
          ))}

        </h2>

      </div>
    </section>
  );
}