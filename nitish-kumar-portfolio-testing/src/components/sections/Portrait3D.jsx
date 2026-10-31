
"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect } from "react";
import { Code2 } from "lucide-react";

export default function Portrait3D() {
  const reduceMotion = useReducedMotion();

  // Global mouse tracking
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  useEffect(() => {
    const handleMove = (event) => {
      if (event.pointerType !== "mouse") return;

      pointerX.set(
        (event.clientX / window.innerWidth - 0.5) * 2
      );

      pointerY.set(
        (event.clientY / window.innerHeight - 0.5) * 2
      );
    };

    const reset = () => {
      pointerX.set(0);
      pointerY.set(0);
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("blur", reset);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("blur", reset);
    };
  }, [pointerX, pointerY]);

  const config = {
    stiffness: 65,
    damping: 20,
    mass: 0.9,
  };

  const x = useSpring(pointerX, config);
  const y = useSpring(pointerY, config);

  // Overall scene perspective
  const sceneRotateY = useTransform(x, [-1, 1], [-2.5, 2.5]);
  const sceneRotateX = useTransform(y, [-1, 1], [2, -2]);

  // Portrait movement
  const portraitRotateY = useTransform(x, [-1, 1], [-1.8, 1.8]);
  const portraitRotateX = useTransform(y, [-1, 1], [1.5, -1.5]);
  const portraitX = useTransform(x, [-1, 1], [-6, 6]);
  const portraitY = useTransform(y, [-1, 1], [-5, 5]);
  const portraitScale = useTransform(y, [-1, 1], [1.015, 1.055]);

  // Background parallax
  const backgroundX = useTransform(x, [-1, 1], [24, -24]);
  const backgroundY = useTransform(y, [-1, 1], [16, -16]);

  // Floating card parallax
  const cardX = useTransform(x, [-1, 1], [20, -20]);

  // Page scroll movement
  const { scrollY } = useScroll();

  const portraitScroll = useTransform(
    scrollY,
    [0, 700],
    [0, -42]
  );

  const portraitCombinedY = useTransform(
    [portraitY, portraitScroll],
    ([pointerOffset, scrollOffset]) =>
      pointerOffset + scrollOffset
  );

  const backgroundScroll = useTransform(
    scrollY,
    [0, 1000],
    [0, -130]
  );

  const cardScroll = useTransform(
    scrollY,
    [0, 1000],
    [0, -45]
  );

  const sceneStyle = reduceMotion
    ? {}
    : {
        rotateX: sceneRotateX,
        rotateY: sceneRotateY,
        transformPerspective: 1200,
        transformStyle: "preserve-3d",
      };

  return (
    <div className="relative mx-auto h-[min(125vw,490px)] min-h-[360px] w-full max-w-[620px] sm:h-[min(68svh,590px)] sm:min-h-[440px]">

      {/* Cinematic ambient lighting */}
      <motion.div
        style={
          reduceMotion
            ? {}
            : {
                x: backgroundX,
                y: backgroundScroll,
              }
        }
        className="pointer-events-none absolute left-[10%] top-[15%] h-[75%] w-[85%] rounded-full bg-[radial-gradient(ellipse,rgba(199,166,106,0.24),transparent_68%)] blur-[65px]"
      />

      {/* Golden atmospheric light */}
      <motion.div
        style={
          reduceMotion
            ? {}
            : {
                x: backgroundX,
                y: backgroundY,
              }
        }
        className="pointer-events-none absolute -right-10 top-10 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px]"
      />

      {/* Decorative golden panel */}
      <motion.div
        style={
          reduceMotion
            ? {}
            : {
                x: backgroundX,
                y: backgroundScroll,
                rotateX: sceneRotateX,
                rotateY: sceneRotateY,
                transformPerspective: 1200,
              }
        }
        className="absolute left-[13%] top-[13%] h-[76%] w-[76%] rounded-[2.5rem] border border-accent/50 bg-gradient-to-br from-accent/10 via-transparent to-accent/5 shadow-[0_0_80px_rgba(199,166,106,0.10)] sm:rounded-[3rem]"
      />

      {/* Secondary outline */}
      <motion.div
        style={
          reduceMotion
            ? {}
            : {
                x: backgroundX,
                y: backgroundY,
                rotate: -5,
              }
        }
        className="absolute left-[7%] top-[20%] h-[67%] w-[80%] rounded-[2.5rem] border border-white/10 sm:rounded-[3rem]"
      />

      {/* Background floating light */}
      <motion.div
        style={
          reduceMotion
            ? {}
            : {
                x: backgroundX,
                y: backgroundScroll,
              }
        }
        className="pointer-events-none absolute bottom-[12%] left-[8%] h-40 w-40 rounded-full bg-accent/20 blur-[65px]"
      />

      {/* Main 3D scene */}
      <motion.div
        style={sceneStyle}
        className="absolute inset-0 [transform-style:preserve-3d]"
      >

        {/* Transparent foreground portrait */}
        <motion.div
          style={
            reduceMotion
              ? {}
              : {
                  x: portraitX,
                  y: portraitCombinedY,
                  rotateX: portraitRotateX,
                  rotateY: portraitRotateY,
                  scale: portraitScale,
                  translateZ: 90,
                  transformPerspective: 1000,
                }
          }
          className="absolute inset-x-[-7%] bottom-0 top-[7%] z-10 sm:top-[10%]"
        >
          <Image
            src="/images/Nitish_Kumar_Portrait.png"
            alt="Nitish Kumar"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 620px"
            className="object-contain object-bottom drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
          />
        </motion.div>

        {/* Ideas card — desktop and tablet only */}
        <motion.div
          style={
            reduceMotion
              ? {}
              : {
                  x: cardX,
                  y: cardScroll,
                  translateZ: 180,
                }
          }
          className="absolute right-[-5%] top-[29%] z-30 hidden w-36 rounded-2xl border border-white/10 bg-[#111310]/95 p-5 shadow-2xl backdrop-blur-xl sm:block sm:right-[-4%] sm:top-[31%]"
        >
          <Code2 size={28} className="mb-3 text-accent" />

          <p className="font-display text-2xl leading-tight text-white">
            Turning ideas into{" "}
            <span className="italic text-accent">solutions.</span>
          </p>
        </motion.div>

        {/* Bottom identity panel */}
        <motion.div
          style={
            reduceMotion
              ? {}
              : {
                  x: cardX,
                  y: cardScroll,
                  translateZ: 200,
                }
          }
          className="absolute bottom-[2%] left-[4%] z-40 flex w-[92%] flex-col items-start gap-3 rounded-2xl border border-accent/30 bg-[#151815]/95 px-4 py-4 shadow-2xl backdrop-blur-xl sm:bottom-[3%] sm:left-[5%] sm:w-[90%] sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-5 sm:py-5"
        >
          <div>
            <p className="font-display text-lg text-white sm:text-xl">
              Nitish Kumar
              <span className="text-accent"> — 2025</span>
            </p>

            <span className="mt-2 block h-px w-8 bg-accent" />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-muted">
              Java Full Stack Developer
            </span>

            <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px_rgba(199,166,106,0.8)]" />
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
