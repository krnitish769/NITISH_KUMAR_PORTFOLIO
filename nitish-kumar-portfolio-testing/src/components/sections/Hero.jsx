
"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import Button from "@/components/ui/Button";
import Portrait3D from "@/components/sections/Portrait3D";

const technologies = [
  "Java",
  "Spring Boot",
  "React",
  "MySQL",
  "REST APIs",
];

export default function Hero() {
  const [showScrollCue, setShowScrollCue] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollCue(window.scrollY < 60);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">

      <section
        id="home"
        className="relative isolate flex min-h-[calc(100svh-88px)] items-center overflow-hidden bg-background px-6 py-10 lg:px-10"
      >
        {/* Background lighting */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_45%,rgba(199,166,106,0.09),transparent_42%)]" />

        <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[650px] w-[650px] rounded-full bg-accent/5 blur-[140px]" />

        <div className="relative mx-auto grid w-full max-w-[1450px] grid-cols-1 items-center gap-y-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-8 lg:gap-y-0">

          {/* Heading */}
          <div className="relative z-20 lg:col-start-1 lg:row-start-1">

            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-accent" />

              <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
                Java Full Stack Developer
              </p>
            </div>

            <h1 className="max-w-3xl font-display text-6xl leading-[1.05] font-medium tracking-tight sm:text-7xl lg:text-8xl">
              Building digital
              <span className="block italic text-accent">
                experiences.
              </span>
            </h1>
          </div>

          {/* Portrait */}
          <div className="relative z-10 mx-auto w-full max-w-[620px] -translate-y-20 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:-ml-8 lg:translate-y-0">
            <Portrait3D />
          </div>

          {/* Introduction and actions */}
          <div className="relative z-20 lg:col-start-1 lg:row-start-2">

            <p className="mt-4 max-w-xl text-base leading-8 text-muted sm:mt-5 sm:text-lg">
              Hi, I&apos;m Nitish Kumar. I build backend-driven applications
              using Java and Spring Boot, and create modern web experiences
              with React.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
              <Button href="#projects" size="lg">
                Explore My Work
                <ArrowUpRight size={17} />
              </Button>

              <Button href="#contact" variant="secondary" size="lg">
                Let&apos;s Connect
                <ArrowRight size={17} />
              </Button>
            </div>

            {/* Technologies */}
            <div className="mt-12 sm:mt-16">
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-muted">
                Technologies I work with
              </p>

              <div className="flex flex-wrap gap-3">
                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-border px-4 py-2 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Floating Scroll Indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{
          opacity: showScrollCue ? 1 : 0,
          y: showScrollCue ? [0, -5, 0] : 0,
        }}
        transition={{
          opacity: { duration: 0.4 },
          y: {
            duration: 2,
            repeat: showScrollCue ? Infinity : 0,
            ease: "easeInOut",
          },
        }}
        style={{
          pointerEvents: showScrollCue ? "auto" : "none",
        }}
        className="absolute left-1/2 top-full z-30 flex -translate-x-1/2 translate-y-8 items-center gap-3 whitespace-nowrap text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent"
      >
        Scroll to explore
        <ArrowDown size={15} />
      </motion.a>

    </div>
  );
}
