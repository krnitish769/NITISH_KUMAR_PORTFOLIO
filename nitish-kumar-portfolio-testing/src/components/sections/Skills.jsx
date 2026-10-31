
"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { skills, skillCategories } from "@/data/skills";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = useMemo(() => {
    if (activeCategory === "all") {
      return skills;
    }

    return skills.filter(
      (skill) => skill.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section
      id="skills"
      className="relative border-t border-border px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-accent">
            02 — Technical Stack
          </p>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-3xl font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
              Tools I use to
              <span className="block italic text-accent">
                bring ideas to life.
              </span>
            </h2>

            <p className="max-w-sm text-sm leading-7 text-muted">
              A growing collection of technologies I use, understand,
              and explore while building software applications.
            </p>
          </div>
        </motion.div>

        {/* Category filters */}
        <div className="mt-16 flex flex-wrap gap-3">
          {skillCategories.map((category) => {
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

        {/* Technology cards */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-5 transition-colors duration-300 hover:border-accent/50 hover:bg-surface sm:p-6"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      size={30}
                      className="text-muted transition-colors duration-300 group-hover:text-accent"
                    />

                    <ArrowUpRight
                      size={15}
                      className="text-muted/50 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                    />
                  </div>

                  <h3 className="mt-9 text-sm font-medium text-foreground">
                    {skill.name}
                  </h3>

                  <p className="mt-2 text-[11px] text-muted">
                    {skill.level}
                  </p>

                  <div className="mt-5 h-px w-full bg-border">
                    <div
                      className={`h-px transition-all duration-500 ${
                        skill.status === "proficient"
                          ? "w-full bg-accent"
                          : skill.status === "familiar"
                            ? "w-2/3 bg-accent-secondary"
                            : "w-1/3 bg-muted"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Footer note */}
        <p className="mt-8 text-xs leading-6 text-muted">
          My stack continues to evolve as I learn, experiment and build.
        </p>

      </div>
    </section>
  );
}
