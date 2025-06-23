// src/components/Footer.tsx
"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#171e2b] text-white py-12"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        {/* Column 1: Logo */}
        <motion.div variants={fadeInUp}>
          <div className="inline-block bg-[#dbdbdb] text-black text-[1.5rem] px-8 py-2 rounded-md font-bold">
            LOGO
          </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-lg font-bold mb-4">Lorem Ipsum</h3>
          <ul className="space-y-3 text-sm">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </motion.div>

        {/* Column 3 */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-lg font-bold mb-4">Lorem Ipsum</h3>
          <ul className="space-y-3 text-sm">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </motion.div>

        {/* Column 4 */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-lg font-bold mb-4">Lorem Ipsum</h3>
          <ul className="space-y-3 text-sm">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </motion.div>

        {/* Column 5 */}
        <motion.div variants={fadeInUp}>
          <h3 className="text-lg font-bold mb-4">Lorem Ipsum</h3>
          <ul className="space-y-3 text-sm">
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </motion.div>
      </div>
    </motion.footer>
  );
}
