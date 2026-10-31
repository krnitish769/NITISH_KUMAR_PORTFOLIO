
"use client";

import { motion } from "motion/react";
import {
  BriefcaseBusiness,
  GraduationCap,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { experiences, education } from "@/data/experience";

const reveal = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative border-t border-border px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-accent">
            04 — The Journey
          </p>

          <h2 className="max-w-4xl font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
            The path that
            <span className="block italic text-accent">
              shaped my journey.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-muted">
            My professional experience and academic background,
            built through continuous learning and exploration.
          </p>
        </motion.div>

        {/* Professional Experience */}
        <div className="mt-20">
          <div className="mb-10 flex items-center gap-3">
            <BriefcaseBusiness size={19} className="text-accent" />

            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">
              Professional Experience
            </h3>
          </div>

          <div className="relative ml-2 border-l border-border pl-8 sm:ml-4 sm:pl-12">
            {experiences.map((item, index) => (
              <motion.article
                key={item.id}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative pb-12 last:pb-0"
              >
                {/* Timeline marker */}
                <span className="absolute -left-[37px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background sm:-left-[53px]" />

                <div className="rounded-2xl border border-border bg-surface/50 p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8">

                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-accent">
                        {item.period}
                      </p>

                      <h4 className="mt-3 text-xl font-medium text-foreground sm:text-2xl">
                        {item.role}
                      </h4>

                      <p className="mt-2 text-sm text-muted">
                        {item.organization}
                      </p>

                      <p className="mt-2 flex items-center gap-2 text-xs text-muted">
                        <MapPin size={13} />
                        {item.location}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-accent/30 px-3 py-1.5 text-[10px] uppercase tracking-wider text-accent">
                        {item.type === "apprenticeship"
                            ? "Apprenticeship"
                            : "Current Role"}
                    </span>
                  </div>

                  <p className="mt-7 text-sm leading-7 text-muted">
                    {item.description}
                  </p>

                  <div className="mt-7 space-y-3">
                    {item.responsibilities.map((responsibility) => (
                      <p
                        key={responsibility}
                        className="flex items-start gap-3 text-xs leading-6 text-muted"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {responsibility}
                      </p>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-border px-3 py-1.5 text-[10px] text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mt-24">
          <div className="mb-10 flex items-center gap-3">
            <GraduationCap size={20} className="text-accent" />

            <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-foreground">
              Education
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {education.map((item, index) => (
              <motion.article
                key={item.id}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-border bg-surface/50 p-7 transition-colors duration-300 hover:border-accent/40 sm:p-8"
              >
                <p className="text-xs uppercase tracking-wider text-accent">
                  {item.period}
                </p>

                <h4 className="mt-6 text-xl font-medium text-foreground">
                  {item.degree}
                </h4>

                <p className="mt-2 text-sm text-accent">
                  {item.specialization}
                </p>

                <p className="mt-5 text-sm leading-7 text-muted">
                  {item.institution}
                </p>

                <div className="mt-7 border-t border-border pt-5">
                  <span className="text-xs text-muted">
                    {item.score}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
