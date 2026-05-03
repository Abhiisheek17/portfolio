"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    category: "Product Design",
    title: "SodaLive",
    description:
      "Designed a real-time streaming experience focused on trust and fair creator earnings.",
    image: "/images/sodalive/hero.webp",
    link: "/work/sodalive",
    role: "Product & UX Design",
    impact: "Trust-driven interaction model",
    type: "Mobile App",
    cardBg: "bg-[#0a0a0a]",
    textColor: "text-white",
    subTextColor: "text-white/70",
    labelColor: "text-white/40",
    borderColor: "border-White/10",
  },
  {
    category: "UX System Design",
    title: "Manova.life",
    description:
      "Simplified complex mental health tracking into structured, low-cognitive workflows.",
    image: "/images/manova/hero.webp",
    link: "/work/manova",
    role: "UX & System Design",
    impact: "Reduced cognitive load",
    type: "Web Dashboard",
    cardBg: "bg-white",
    textColor: "text-black",
    subTextColor: "text-black/70",
    labelColor: "text-black/40",
    borderColor: "border-Black/10",
  },
  {
    category: "Brand Identity",
    title: "SodaLive Identity",
    description:
      "Explored 200+ concepts to create a scalable identity around live interaction and energy.",
    image: "/images/logo/hero.webp",
    link: "/work/logo",
    role: "Brand & Visual Design",
    impact: "Scalable visual system",
    type: "Branding",
    cardBg: "bg-white",
    textColor: "text-black",
    subTextColor: "text-black/70",
    labelColor: "text-black/40",
    borderColor: "border-black/10",
  },
  {
    category: "Product Website",
    title: "PodCraft Labs",
    description:
      "Built a structured marketing experience focused on clarity and product positioning.",
    image: "/images/podcraft/hero.webp",
    link: "/work/podcraft",
    role: "Product & UI Design",
    impact: "Clear product communication",
    type: "Web Experience",
    cardBg: "bg-[#0a0a0a]",
    textColor: "text-white",
    subTextColor: "text-white/70",
    labelColor: "text-white/40",
    borderColor: "border-White/10",
  },
];

export default function ProjectsSection() {
  return (
    <section id="work" className="py-32 px-6 max-w-6xl mx-auto">

      <div className="mb-32 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-foreground/50 mb-4">
          My Work
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          It's not just work.{" "}
          <span className="text-foreground/60">It's how I think.</span>
        </h3>
      </div>

      <div className="flex flex-col gap-32">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
          >
            <Link
              href={project.link}
              className={`group ${project.cardBg} rounded-3xl border ${project.borderColor} overflow-hidden transition-all duration-300 ease-out hover:border-primary/100 hover:shadow-[0_0_100px_rgba(59,130,246,0.15)] hover:-translate-y-5 block`}
            >

              {/* IMAGE */}
              <div className="relative h-[220px] md:h-[480px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className={`flex flex-col md:flex-row ${project.textColor}`}>

                {/* LEFT */}
                <div className={`flex-1 px-12 md:px-16 py-12 md:py-16 border-b md:border-b-0 ${project.borderColor}`}>
                  <p className="text-xs tracking-widest text-primary uppercase mb-3">
                    {project.category}
                  </p>
                  <h3 className="text-3xl md:text-4xl font-semibold mb-5 tracking-tight">
                    {project.title}
                  </h3>
                  <p className={`${project.subTextColor} max-w-xl leading-relaxed text-base md:text-lg`}>
                    {project.description}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="w-full md:w-80 px-10 md:px-12 py-12 md:py-16 flex flex-col gap-8 justify-center">
                  <div>
                    <p className={`text-xs ${project.labelColor} uppercase mb-1`}>Role</p>
                    <p className={project.textColor}>{project.role}</p>
                  </div>
                  <div>
                    <p className={`text-xs ${project.labelColor} uppercase mb-1`}>Impact</p>
                    <p className={project.textColor}>{project.impact}</p>
                  </div>
                  <div>
                    <p className={`text-xs ${project.labelColor} uppercase mb-1`}>Type</p>
                    <p className={project.textColor}>{project.type}</p>
                  </div>
                </div>

              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}