import React from "react";
import banner1 from "../../Assets/Banner1.jpg";

export default function Banner1() {
  return (
    <section className="relative overflow-hidden h-auto">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-60"
        style={{ backgroundImage: `url(${banner1.src})` }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-8 py-10 flex flex-col items-start md:items-center text-left md:text-center">
        <div className="self-start bg-white text-black text-[2rem] font-bold px-6 py-2 mb-2">
          LOGO
        </div>

        <h2 className="text-[32px] md:text-[40px] font-[700] tracking-[-0.02em] [font-family:var(--font-heading)] text-white mb-6 md:px-40 lg:px-40">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
        </h2>

        <p className="text-[14px] md:text-[16px] leading-relaxed text-white text-bold mb-6 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat
          vestibulum nisi at ac risus amet. Mi accumsan sagittis justo
          pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna
          arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
        </p>

        <p className="text-[14px] md:text-[16px] leading-relaxed text-white text-bold mb-8 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
          condimentum ultrices non. Ornare semper in tincidunt pellentesque
          cras mauris in vitae. At viverra quis eu malesuada vel et porttitor.
          Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a
          pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
        </p>

        <button className="inline-flex items-center bg-white hover:bg-[#0546D2] text-[#0546D2] hover:text-white font-[600] px-6 py-3 rounded-md transition">
          Lorem Ipsum
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
      </div>
    </section>
  );
}
