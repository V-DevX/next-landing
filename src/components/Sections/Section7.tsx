// src/components/Section8.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import sectionImg from "../../Assets/Section8.jpg";

// Container for staggered fade‑in
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Fade‑in variant for each element
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function Section8() {
  return (
    <section className="relative bg-transparent py-16">
      {/* Content container */}
      <div className="relative max-w-7xl mx-auto bg-[#f1f5f9] grid grid-cols-1 md:grid-cols-2 px-6 py-16 gap-1 z-0">
        {/* Empty first column */}
        <div />

        {/* Second column with content */}
        <motion.div
          className="space-y-9 mt-35 md:mt-0 lg:mr-30"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.p
            className="text-[20px] font-[600] text-[#1959AC] [font-family:var(--font-sans)]"
            variants={fadeIn}
          >
            Lorem Ipsum
          </motion.p>

          <motion.h2
            className="text-[2rem] md:text-[2.5rem] font-[700] text-[#222222] [font-family:var(--font-heading)]"
            variants={fadeIn}
          >
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
          </motion.h2>

          <motion.p
            className="text-[16px] text-[#222222] leading-relaxed max-w-xl"
            variants={fadeIn}
          >
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim
            amet non.
          </motion.p>

          {/* Two-column list */}
          <motion.div
            className="grid grid-cols-2 gap-x-8 mt-8 text-[16px] text-[#222222] [font-family:var(--font-sans)]"
            variants={fadeIn}
          >
            <ul className="space-y-4 list-disc list-inside">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
            <ul className="space-y-4 list-disc list-inside">
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </motion.div>

          {/* Button */}
          <motion.button
            className="inline-flex items-center bg-[#1959AC] hover:bg-[#0546D2] text-white font-[600] px-6 py-3 rounded-md transition"
            variants={fadeIn}
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
        </motion.div>
      </div>

      {/* Decorative image in front of container */}
      <div
        className="
          absolute top-0 
          left-1/2 -translate-x-1/2 
          md:left-0 md:-translate-x-0 
          w-70 h-70 md:w-120 md:h-120 
          pointer-events-none z-10
        "
      >
        <Image
          src={sectionImg}
          alt="Decorative"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
