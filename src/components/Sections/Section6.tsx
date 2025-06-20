// src/components/Section7.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants, Easing } from "framer-motion";
import collage from "../../Assets/collage.png";

// Title word slide-up animation
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const slideUpWord: Variants = {
  hidden: { opacity: 0, y: 3 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeOut" as Easing,
    },
  },
};

// Fade-in for text and paragraph
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut" as Easing,
    },
  },
};

export default function Section7() {
  const title = "LOREM IPSUM DOLOR SIT AMET";
  const words = title.split(" ");

  return (
    <section className="relative bg-[#f1f5f9] overflow-hidden">
      {/* Background collage in bottom-right */}
      <div className="absolute bottom-0 right-0 left-35 w-64 h-64 md:w-[95%] md:h-[100%] pointer-events-none">
        <Image
          src={collage}
          alt="Decorative collage"
          fill
          className="object-contain"
        />
      </div>

      {/* Content grid */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-30 items-center">
        {/* Left column */}
        <div className="space-y-3 md:mb-40 md:ml-12">
          <motion.p
            className="text-[20px] font-[600] text-black [font-family:var(--font-sans)]"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            NO LIMITS
          </motion.p>

          <motion.h2
            className="text-[2rem] md:text-[2.5rem] font-[700] tracking-[-0.02em] text-[#222222] [font-family:var(--font-heading)]"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block mr-2"
                variants={slideUpWord}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>

          <motion.p
            className="text-[16px] text-[#222222] leading-relaxed max-w-xl mb-10"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor
            pharetra tempor quis arcu. Ipsum nullam.
          </motion.p>

          <motion.button
            className="inline-flex items-center bg-[#1959AC] hover:bg-[#0546D2] text-white font-[600] px-6 py-3 rounded-md transition"
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Lorem Ipsum
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </div>

        {/* Right column intentionally left blank (decorative collage in background) */}
        <div />
      </div>
    </section>
  );
}
