// src/components/Section12.tsx
"use client";

import React from "react";
import { motion, Variants, Easing } from "framer-motion";
import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const slideUpWord: Variants = {
  hidden: { opacity: 0, y: 3 },
  show: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" as Easing } },
};
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as Easing } },
};

export default function Section12() {
  const title = "LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.";
  const words = title.split(" ");

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-35 text-center">
        {/* Logo */}
        <motion.div
          className="inline-block bg-[#dbdbdb] text-black text-[2rem] px-8 py-2 rounded-md font-bold mb-6"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          LOGO
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-[2rem] md:text-[2.5rem] font-[700] text-[#222222] [font-family:var(--font-heading)] mb-6 flex flex-wrap justify-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {words.map((word, idx) => (
            <motion.span key={idx} className="mr-2 inline-block" variants={slideUpWord}>
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-[16px] text-[#222222] leading-relaxed mb-8 text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pha retra tempor quis arcu. Ipsum nullam.
        </motion.p>

        {/* Action Button */}
        <motion.div
          className="text-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Button className="group inline-flex items-center">
            Lorem Ipsum
            <svg
              className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
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
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
