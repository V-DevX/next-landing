"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { feedback } from "../../utils/feedback";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  },
};

export default function Section9() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: width / 3, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({ left: -width / 3, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-blue-600 text-white py-16 px-2">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-15 items-center px-4 mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Left column */}
        <motion.div variants={fadeInVariants} className="space-y-4">
          <p className="text-xl font-semibold">Join other Sun Harvesters.</p>
          <h2 className="text-3xl md:text-4xl font-bold [font-family:var(--font-heading)]">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
          <p className="text-base md:text-lg">
            Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
            Eleifend mi tristique condimentum congue fusce nunc, donec magnis
            commodo.
          </p>
        </motion.div>

        {/* Right column*/}
        <motion.div variants={fadeInVariants} className="flex md:justify-end">
          <button className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
            Lorem Ipsum
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </motion.div>

      {/*carousel */}
      <motion.div
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div
          ref={carouselRef}
          className="pt-10 px-4 no-scrollbar flex space-x-6 overflow-x-auto overflow-y-visible scroll-smooth pb-4"
        >
          {feedback.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
              className="flex-none bg-white text-gray-900 rounded-lg p-6 w-65 flex flex-col"
            >
              <div className="w-10 h-10 mb-4">
                <Image
                  src={item.icon}
                  alt="Icon"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <p className="flex-1 text-sm leading-relaxed mb-4">
                {item.Message}
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
                  <Image
                    src={item.User_Img}
                    alt={item.User_Name}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">{item.User_Name}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel controls*/}
        <motion.div variants={fadeInVariants} className="flex space-x-2 mt-6">
          <button
            onClick={scrollPrev}
            className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center shadow"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="w-8 h-8 bg-white text-blue-600 rounded-full flex items-center justify-center shadow"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </motion.div>
      </motion.div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
