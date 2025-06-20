// src/components/Section9.tsx
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { section9 } from "../../utils/section9";
import sectionImg from "../../Assets/Section9.png";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};
const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] } },
};

export default function Section9() {
  const [selectedId, setSelectedId] = useState<number>(section9[0].id);
  const selected = section9.find((item) => item.id === selectedId)!;
  const [displayedDesc, setDisplayedDesc] = useState("");

  // Typing effect
  useEffect(() => {
    setDisplayedDesc("");
    let idx = 0;
    const text = selected.Desc;
    const interval = setInterval(() => {
      setDisplayedDesc((prev) => prev + text[idx]);
      idx++;
      if (idx >= text.length) clearInterval(interval);
    }, 5);
    return () => clearInterval(interval);
  }, [selected.Desc]);

  return (
    <section className="py-16 px-6 bg-white">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Column 1 */}
        <div className="space-y-6">
          {/* Title */}
          <motion.h2
            className="text-[2rem] font-[700] text-[#222222] [font-family:var(--font-heading)] md:mb-15"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
          >
            LOREM IPSUM DOLOR SIT AMET
          </motion.h2>

          {/* Headings table */}
          <motion.div className="overflow-x-auto" variants={fadeIn}>
            <table className="w-full table-fixed border-separate border-spacing-0 border border-black rounded-lg overflow-hidden">
              <thead>
                <tr>
                  {section9.map((item, idx) => (
                    <motion.th
                      key={item.id}
                      onClick={() => setSelectedId(item.id)}
                      className={`
                        cursor-pointer px-4 py-2 text-center text-black font-medium
                        ${item.id === selectedId ? "bg-gray-200" : ""}
                        ${idx < section9.length - 1 ? "border-r border-black" : ""}
                        ${idx === 0 ? "first:rounded-tl-lg" : ""}
                        ${idx === section9.length - 1 ? "last:rounded-tr-lg" : ""}
                      `}
                      variants={fadeIn}
                    >
                      <motion.span
                        className="inline-block"
                        whileHover={{ scale: 1.1 }}
                      >
                        {item.heading}
                      </motion.span>
                    </motion.th>
                  ))}
                </tr>
              </thead>
            </table>
          </motion.div>

          {/* Description with typing */}
          <motion.p
            className="text-[16px] text-[#222222] leading-relaxed md:mb-15"
            variants={fadeIn}
          >
            {displayedDesc}
          </motion.p>

          {/* Link */}
          <motion.a
            href={selected.url}
            className="group inline-flex items-center text-[#1959AC] font-[600] hover:underline"
            variants={fadeIn}
          >
            Check Tools
            <span className="ml-1 transition-transform group-hover:translate-x-1">
              <svg
                className="w-4 h-4"
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
            </span>
          </motion.a>
        </div>

        {/* Column 2 – Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          variants={fadeIn}
        >
          <div className="w-full max-w-md">
            <Image
              src={sectionImg}
              alt="Illustration"
              width={740}
              height={480}
              className="object-cover w-full h-100 rounded-lg"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
