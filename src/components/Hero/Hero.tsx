// src/components/Hero/Hero.tsx
import React from "react";
import Image from "next/image";
import HeroImg from "../../Assets/Hero.png";
import HeroImg2 from "../../Assets/hero.jpg";

export default function Hero() {
  return (
    <section className="bg-white py-12 md:py-0 md:h-[700px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-20 h-auto md:h-full">
        {/* ── Mobile image (full-width w/ bottom slope) ── */}
        <div
          className="relative w-full h-[400px] sm:h-[400px] overflow-hidden block md:hidden"
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)",
          }}
        >
          <Image
            src={HeroImg2}
            alt="Hero graphic"
            fill
            className="object-cover"
          />
        </div>

        {/* ── Text column ── */}
        <div className="order-last md:order-first md:col-span-11 flex flex-col justify-center px-6 md:px-0 mt-10 md:mt-40 md:mr-20 md:ml-18">
          <h1
            className="md:mr-15 text-[4rem] font-[700] tracking-[-0.02em] text-[#222222] [font-family:var(--font-heading)] leading-[100%]"
          >
            Lorem ipsum dolor sit amet
          </h1>
          <p
            className="mt-4 text-[15px] font-[600] tracking-[-0.02em] text-[#222222] [font-family:var(--font-sans)] leading-relaxed"
          >
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
            elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea
            morbi libero imperdiet neque. Justo suspendisse tristique posuere
            quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
          </p>

          <form className="mt-15 flex flex-col sm:flex-row gap-4 max-w-[450px] w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0546D2] text-black"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center px-6 py-2 bg-[#1959AC] hover:bg-[#0546D2] text-white font-[600] rounded-md transition"
            >
              Submit
              <svg
                className="w-5 h-5 ml-2"
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
            </button>
          </form>

          <div className="mt-4 flex items-center text-[#222222]">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-[#1959AC] text-white rounded-full">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </span>
            <span className="ml-3 font-[600] [font-family:var(--font-sans)]">
              No Credit card required
            </span>
          </div>
        </div>

        {/* ── Desktop image (wider, full-height, left slope) ── */}
        <div className="hidden md:block md:col-span-9 w-full h-full">
          <div
            className="relative w-full h-full overflow-hidden"
            style={{
              clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
            }}
          >
            <Image
              src={HeroImg}
              alt="Hero graphic"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
