"use client";
import React from "react";
import banner1 from "../../Assets/Banner2.png";
import { motion, Variants, Easing } from "framer-motion";

// Animation variants
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

export default function Banner2() {
  const title =
    "DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI. DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING";

  const words = title.split(" ");

  return (
    <section className="relative overflow-hidden h-auto">
      {/* BG*/}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-60"
        style={{ backgroundImage: `url(${banner1.src})` }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-15 py-10 flex flex-col items-start md:items-center text-left md:text-center">
        <div className="self-start bg-white text-black text-[1.5rem] font-bold px-8 py-2 mb-4">
          LOGO
        </div>

        <motion.h2
          className="flex flex-wrap justify-start md:justify-center text-[32px] md:text-[35px] font-[700] tracking-[-0.02em] text-white [font-family:var(--font-heading)] mb-6 md:mb-40 md:px-25 max-w-4xl"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {words.map((word, index) => (
            <motion.span
              key={index}
              variants={slideUpWord}
              className="mr-2 inline-block whitespace-nowrap"
            >
              {word}
            </motion.span>
          ))}
        </motion.h2>
      </div>
    </section>
  );
}
