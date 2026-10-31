
"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  GraduationCap,
  Lightbulb,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    number: "01",
    title: "Backend Development",
    description:
      "Building application logic, REST APIs and database-driven systems with Java and Spring Boot.",
  },
  {
    icon: GraduationCap,
    number: "02",
    title: "Technical Foundation",
    description:
      "A Computer Science background complemented by an earlier foundation in Electronics and Instrumentation.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Continuous Learning",
    description:
      "Exploring modern frontend technologies and expanding my understanding of full-stack development.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative border-t border-border px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-accent">
            01 — About Me
          </p>

          <h2 className="max-w-4xl font-display text-5xl leading-tight sm:text-6xl lg:text-7xl">
            Beyond the code,
            <span className="block italic text-accent">
              driven by curiosity.
            </span>
          </h2>
        </motion.div>

        {/* Introduction */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-xl leading-9 text-foreground sm:text-2xl">
              I&apos;m a Computer Science graduate with a strong interest
              in software development, particularly building reliable
              backend systems and modern web applications.
            </p>

            <p className="mt-7 text-base leading-8 text-muted">
              My journey started with a foundation in Electronics and
              Instrumentation, which helped me develop an interest in
              understanding how systems work. I later moved into
              Computer Science, where I found my passion for programming
              and application development.
            </p>

            <p className="mt-5 text-base leading-8 text-muted">
              Today, I primarily work with Java, Spring Boot, REST APIs
              and relational databases, while expanding my frontend
              capabilities with React and Next.js.
            </p>

            <a
              href="#skills"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-foreground"
            >
              Explore my technical stack
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Personal approach */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col justify-center border-l border-border pl-7 lg:pl-12"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-muted">
              My approach
            </p>

            <p className="mt-6 font-display text-3xl leading-snug text-foreground sm:text-4xl">
              Understand the problem.
              <span className="italic text-accent">
                {" "}Design the solution. 
              </span>
                {" "}Build it to last.
            </p>

            <p className="mt-6 text-sm leading-7 text-muted">
              I believe good software is more than writing code.
              It is about understanding requirements, choosing the
              right tools, designing maintainable solutions and
              continuously improving the result.
            </p>
          </motion.div>
        </div>

        {/* Highlight cards */}
        <div className="mt-24 grid gap-5 md:grid-cols-3">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-border bg-surface/50 p-7 transition-colors duration-300 hover:border-accent/40 hover:bg-surface"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={24}
                    strokeWidth={1.5}
                    className="text-accent"
                  />

                  <span className="font-mono text-xs text-muted">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-10 text-lg font-medium text-foreground">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
