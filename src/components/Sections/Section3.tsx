"use client";
import React, { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, Variants } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

// Image imports
import Hero from "../../Assets/Parts/Hero.png";
import Honda from "../../Assets/Parts/Honda.png";
import Bajaj from "../../Assets/Parts/Bajaj.png";
import TVS from "../../Assets/Parts/TVS.png";
import Royal from "../../Assets/Parts/Royal.png";
import Yamaha from "../../Assets/Parts/Yamaha.png";
import KTM from "../../Assets/Parts/KTM.png";
import Ather from "../../Assets/Parts/Ather.png";
import OLA from "../../Assets/Parts/OLA.png";
import Revolt from "../../Assets/Parts/Revolt.png";
import UV from "../../Assets/Parts/UV.png";
import Tork from "../../Assets/Parts/Tork.png";

const logos: StaticImageData[] = [
  Hero, Honda, Bajaj, TVS, Royal, Yamaha, KTM, Ather, OLA, Revolt, UV, Tork,
];

export default function Section3() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Container animation for staggered children
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Individual item animation with correct typing
  const item: Variants = {
    hidden: { scale: 0.8, opacity: 0 },
    show: (i: number = 0) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring" as const,
        stiffness: 100,
      },
    }),
  };

  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-[2rem] md:text-[2.5rem] font-[700] text-[#222222] text-center lg:px-60 mb-10 [font-family:var(--font-heading)]">
        LOREM IPSUM DOLOR SIT AMET CONSECTETUR. COMMODO LEO AMET.
      </h2>

      {/* Grid*/}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto md:px-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {logos.map((logo, idx) => (
          <motion.div
            key={idx}
            variants={item}
            custom={idx}
            data-aos="zoom-in"
            whileHover={{
              scale: 1,
              boxShadow: "0px 8px 20px rgba(18, 16, 16, 0.2)",
            }}
            className="bg-transparent rounded-lg overflow-hidden flex items-center justify-center aspect-[10/4] duration-10"
          >
            <Image
              src={logo}
              alt={`Logo ${idx + 1}`}
              className="object-contain w-full h-full"
              sizes="(max-width: 500px) 100vw, 25vw"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
