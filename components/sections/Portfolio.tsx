"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Project } from "@/types";

const categories = [
  "All",
  "Branding",
  "UI/UX Design",
  "Web Development",
  "Digital Marketing",
];

export function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      className="section-padding bg-surface-light dark:bg-surface-dark"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            label="Our Work"
            title="Projects we're proud of."
            description="A curated selection of work spanning branding, design, development, and digital campaigns."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${active === cat
                ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25"
                : "bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700"
                }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.href}
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group flex flex-col gap-4 cursor-pointer transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-1"
    >
      <div
        className="relative w-full overflow-hidden rounded-2xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-800 shadow-md dark:shadow-none group-hover:shadow-xl group-hover:shadow-violet-500/15 dark:group-hover:shadow-violet-900/10 transition-shadow duration-300"
        style={{ aspectRatio: "4/3" }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div>
        <h3 className="font-display text-xl font-bold text-stone-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors duration-200 leading-tight">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mt-1.5">
          {project.category}
        </p>
      </div>
    </motion.a>
  );
}
