// src/components/Section10.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import sectionImg from "../../Assets/Section10.png";
import iconImg from "../../Assets/pin.png";

// Variants
const fadeInContainer: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { staggerChildren: 0.2, duration: 0.6 }
  },
};
const fadeInItem: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};
const slideLeft: Variants = {
  hidden: { x: 100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};
const slideRight: Variants = {
  hidden: { x: -100, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { duration: 0.8 } },
};

export default function Section10() {
  return (
    <section className="relative bg-white py-16">
      {/* Main content container */}
      <motion.div
        className="relative z-0 max-w-7xl mx-auto bg-[#f1f5f9] grid grid-cols-1 md:grid-cols-2 px-15 py-16 gap-18"
        variants={fadeInContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Text column */}
        <div className="space-y-6">
          <motion.h2
            className="mr-20 text-[2rem] md:text[1rem] lg:text-[2.5rem] font-[700] text-[#0546D2] [font-family:var(--font-heading)]"
            variants={fadeInItem}
          >
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
          </motion.h2>
          <motion.p
            className="text-[16px] text-[#222222] leading-relaxed mb-10"
            variants={fadeInItem}
          >
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit
            laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt
            ultricies feugiat mauris. Aliquam platea turpis porta nisl felis.
            Massa in facilisis semper libero eget eu quisque bibendum platea.
            Tortor fames.
          </motion.p>
          <motion.button
            className="mb-60 inline-flex items-center bg-[#1959AC] hover:bg-white border-1 hocer:border-[#1959AC] text-white hover:text-[#1959AC] font-[600] hover:shadow-lg px-6 py-3 rounded-md transition"
            variants={fadeInItem}
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <span>Lorem Ipsum</span>
            <motion.svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </motion.svg>
          </motion.button>
        </div>

        {/* Empty column */}
        <div />

        {/* Bottom gradient border */}
        <motion.div
          className="absolute bottom-0 left-0 w-[90%] h-[15px]"
          style={{
            background:
              "linear-gradient(to right,rgb(5, 54, 158),rgb(32, 168, 32), #000000)",
          }}
          variants={fadeInItem}
        />
      </motion.div>

      {/* Slide-in image */}
      <motion.div
        className="
          absolute top-0
          left-1/2 -translate-x-1/2
          md:left-auto md:right-0 md:translate-x-0
          w-40 h-40
          md:w-[25rem] md:h-[25rem]
          lg:w-[30rem] lg:h-[30rem]
          z-10 pointer-events-none
        "
        variants={slideLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Image
          src={sectionImg}
          alt="Decorative"
          fill
          className="object-contain"
        />
      </motion.div>

      {/* Slide-in card */}
      <motion.div
        className="
          absolute bottom-0
          left-1/2 -translate-x-1/2
          md:left-10 md:translate-x-0
          ml-6 mb-6
          max-w-md
          bg-white rounded-lg shadow-lg p-6 overflow-hidden z-10
        "
        variants={slideRight}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Icon */}
        <div className="absolute top-4 right-4 w-10 h-10">
          <Image
            src={iconImg}
            alt="Icon"
            fill
            className="object-contain"
          />
        </div>
        <h3 className="text-[1.35rem] font-[700] text-[#222222] [font-family:var(--font-heading)] mb-4">
          Lorem Ipsum Dolor Sit
        </h3>
        <ul className="list-disc list-inside space-y-2 text-[15px] text-[#222222] leading-relaxed">
          <li>
            Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultrices lectus viverra pharetra commodo.
          </li>
        </ul>
      </motion.div>
    </section>
  );
}
