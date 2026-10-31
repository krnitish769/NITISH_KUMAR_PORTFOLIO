
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import {
  projects,
  projectCategories,
} from "@/data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter((project) =>
      project.category.includes(activeCategory)
    );
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="relative border-t border-border px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-accent">
            03 — Selected Work
          </p>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Ideas turned into
              <span className="block italic text-accent">
                working solutions.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-muted">
              A selection of applications and experiments that reflect
              my approach to software development and problem-solving.
            </p>
          </div>
        </motion.div>

        {/* Category filters */}
        <div className="mt-16 flex flex-wrap gap-3">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full border px-5 py-2.5 text-xs transition-all duration-300 ${
                  isActive
                    ? "border-accent bg-accent text-background"
                    : "border-border text-muted hover:border-accent/50 hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Project cards */}
        <motion.div
          layout
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 16 }}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/50 p-7 transition-colors duration-300 hover:border-accent/50 hover:bg-surface sm:p-9"
              >
                {/* Card header */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent">
                    PROJECT / {project.number}
                  </span>

                  {project.featured && (
                    <span className="rounded-full border border-accent/30 px-3 py-1 text-[10px] uppercase tracking-wider text-accent">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project information */}
                <div className="mt-10">
                  <p className="text-xs text-muted">
                    {project.subtitle}
                  </p>

                  <h3 className="mt-3 text-2xl font-medium leading-snug text-foreground transition-colors group-hover:text-accent sm:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-sm leading-7 text-muted">
                    {project.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="mt-7 space-y-3">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 text-xs leading-6 text-muted"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* Technology tags */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-[10px] text-muted transition-colors group-hover:border-accent/30"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Card footer */}
                <div className="mt-9 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
                    {project.category.join(" / ")}
                  </span>

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="inline-flex items-center gap-2 text-xs text-accent transition-colors hover:text-foreground"
                    >
                      <span className="font-mono text-xs font-semibold">GH</span>
                      View Source
                      <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <span className="text-xs text-muted/60">
                      Repository link pending
                    </span>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <p className="mt-8 text-xs leading-6 text-muted">
          More projects and experiments will be added as I continue building.
        </p>

      </div>
    </section>
  );
}
