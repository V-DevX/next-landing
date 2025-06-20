// src/components/Section6.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Download from "../../Assets/Download.png";
import Section6Img from "../../Assets/Section6.png";

// Framer Motion variants
const slideRight: Variants = {
  hidden: { x: -50, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};
const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};
const slideUp: Variants = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};
const typingContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.01 } },
};
const typingChar: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.01 } },
};

export default function Section6() {
  const paragraph =
    "Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.";

  return (
    <section className="bg-[#f3f3f3] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
        {/* Column 1 */}
        <div className="flex flex-col justify-center px-10 lg:px-20 py-22 space-y-6">
          <motion.p
            className="text-[20px] font-[600] text-[#1959AC] [font-family:var(--font-sans)]"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Lorem Ipsum
          </motion.p>
          <motion.h2
            className="text-[2.5rem] font-[700] text-[#222222] [font-family:var(--font-heading)]"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            Lorem Ipsum Dolor Sit Amet
          </motion.h2>
          <motion.div
            className="flex flex-wrap text-[16px] text-[#222222] leading-relaxed [font-family:var(--font-sans)]"
            variants={typingContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {paragraph.split("").map((char, idx) => (
              <motion.span key={idx} variants={typingChar}>
                {char}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            className="relative w-full max-w-xs h-18 overflow-hidden rounded"
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true }}
          >
            <Image
              src={Download}
              alt="Download illustration"
              fill
              className="object-contain"
            />
            {/* Glass glare overlay on first image */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="glare" />
            </div>
          </motion.div>
        </div>

        {/* Column 2 */}
        <motion.div
          className="hidden md:flex items-end justify-center h-[100%] overflow-hidden"
          variants={fadeIn}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div
            className="relative w-[85%] lg:w-[65%] h-[70%] lg:h-[90%] overflow-hidden"
            variants={slideUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Image
              src={Section6Img}
              alt="Section 6"
              className="w-full h-full object-cover max-h-full"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Glass glare animation */}
      <style jsx>{`
        .glare {
          position: absolute;
          top: -25%;
          left: -100%;
          width: 25%;
          height: 200%;
          background: rgba(255, 255, 255, 0.3);
          transform: skewX(-20deg);
          animation: glare-move 2s ease-in-out infinite;
        }
        @keyframes glare-move {
          from {
            transform: translateX(0) skewX(-20deg);
          }
          to {
            transform: translateX(1000%) skewX(-20deg);
          }
        }
      `}</style>
    </section>
  );
}