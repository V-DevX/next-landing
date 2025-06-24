// src/app/page.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Section1 from "@/components/Sections/Section1";
import Section2 from "@/components/Sections/Section2";
import Banner1 from "@/components/Sections/Banner1";
import Section3 from "@/components/Sections/Section3";
import Section4 from "@/components/Sections/Section4";
import Banner2 from "@/components/Sections/Banner2";
import Form from "@/components/Sections/Form";
import Section5 from "@/components/Sections/Section5";
import Section6 from "@/components/Sections/Section6";
import Section7 from "@/components/Sections/Section7";
import Section8 from "@/components/Sections/Section8";
import Section9 from "@/components/Sections/Section9";
import Section10Responsive from "@/components/Sections/Section10Responsive";
import FAQ from "@/components/Sections/FAQ";
import Section12 from "@/components/Sections/Section12";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    // initialize to current scroll so first scroll works
    lastScrollY.current = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setShowNav(currentY <= lastScrollY.current);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-white">
      {/* Navbar overlays Hero */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showNav ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navbar />
      </div>

      {/* Give space so content isn't hidden under fixed navbar */}
      <div className="pt-1 space-y-24">
        <Hero />
        <Section1 />
        <Section2 />
        <Banner1 />
        <Section3 />
        <Section4 />
        <Banner2 />
        <Form />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10Responsive />
        <FAQ />
        <Section12 />
        <Footer />
      </div>
    </main>
  );
}
