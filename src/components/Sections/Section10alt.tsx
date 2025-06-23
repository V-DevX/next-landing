// src/components/Section10alt.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import sectionImg from "../../Assets/Section10.png";
import iconImg from "../../Assets/pin.png";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const slideDown: Variants = {
  hidden: { y: -50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};
const slideUp: Variants = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
};

export default function Section10alt() {
  return (
    <section className="bg-white py-16">
      <motion.div
        className="flex flex-col items-center space-y-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Top image */}
        <motion.div
          className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-2/5"
          variants={slideDown}
        >
          <Image
            src={sectionImg}
            alt="Decorative"
            width={800}
            height={600}
            className="object-contain w-full h-auto mx-auto"
          />
        </motion.div>

        {/* Content container */}
        <motion.div
          className="w-full max-w-3xl bg-[#f1f5f9] px-6 py-16 grid grid-cols-1 gap-8"
          variants={fadeIn}
        >
          <div className="space-y-6">
            <motion.h2 variants={fadeIn} className="text-[2rem] md:text-[2.5rem] font-[700] text-[#0546D2] [font-family:var(--font-heading)]">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
            </motion.h2>
            <motion.p variants={fadeIn} className="text-[16px] text-[#222222] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit
              laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt
              ultricies feugiat mauris. Aliquam platea turpis porta nisl felis.
              Massa in facilisis semper libero eget eu quisque bibendum platea.
              Tortor fames.
            </motion.p>
            <motion.button
              variants={fadeIn}
              className="inline-flex items-center bg-[#1959AC] text-white font-[600] px-6 py-3 rounded-md transition"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
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
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom card */}
        <motion.div
          className="w-full max-w-md"
          variants={slideUp}
        >
          <div className="bg-white rounded-lg shadow-lg p-6 overflow-hidden relative">
            {/* Icon */}
            <div className="absolute top-4 right-4 w-10 h-10">
              <Image
                src={iconImg}
                alt="Icon"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <motion.h3 variants={fadeIn} className="text-[1.35rem] font-[700] text-[#222222] [font-family:var(--font-heading)] mb-4">
              Lorem Ipsum Dolor Sit
            </motion.h3>
            <motion.ul variants={fadeIn} className="list-disc list-inside space-y-2 text-[15px] text-[#222222] leading-relaxed">
              <li>Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.</li>
              <li>Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.</li>
              <li>Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultrices lectus viverra pharetra commodo.</li>
            </motion.ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
