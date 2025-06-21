import React from "react";
import Image, { StaticImageData } from "next/image";
import { section1 } from "../../utils/section1";
import sectionImg from "../../Assets/Section1.jpg";

export default function Section1() {
  return (
    <section className="relative py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-15">
        {/* Col-1*/}
        <div className="space-y-6 md:px-8">
          <p className="text-[23px] font-[600] tracking-[-0.02em] text-[#1959AC] [font-family:var(--font-sans)]">
            Lorem ipsum dolor sit
          </p>

          <h2
            className="text-[3rem] font-[700] tracking-[-0.02em] text-[#222222] md:mr-30 [font-family:var(--font-heading)] leading-[100%]"
          >
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          <p className="text-[16px] font-[400] text-[#222222] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
            facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
            integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus
            at purus lectus.
          </p>

          <div className="space-y-6">
            {section1.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="w-30 h-30 flex-shrink-0">
                  <Image
                    src={item.img as StaticImageData}
                    alt={`Icon ${item.id}`}
                    width={120}
                    height={120}
                    className="object-cover rounded"
                  />
                </div>
                <p className="text-[14px] md:text-[18px] font-[400] text-[#222222] leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Button and Ph.no*/}
          <div className="flex flex-row items-center gap-6 md:mt-15">
            <button className="inline-flex items-center px-6 py-3 bg-[#1959AC] hover:bg-[#0546D2] text-white font-[600] rounded-md transition">
              Lorum ipsum
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
            <div className="inline-flex items-center text-[16px] font-[600] text-[#222222]">
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.6a1 1 0 01.8.4l1.8 2.4a1 1 0 01-.2 1.4L9 9.6a12.04 12.04 0 005.4 5.4l1.4-1.4a1 1 0 011.4-.2l2.4 1.8a1 1 0 01.4.8V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                />
              </svg>
              123456789
            </div>
          </div>
        </div>

        {/* Col-2*/}
        <div className="flex items-center justify-center">
          <div className="overflow-hidden w-full max-w-150">
            <div className="relative w-full h-170">
              <Image
                src={sectionImg}
                alt="Section illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/*Bottom border*/}
      <div
        className="absolute bottom-0 left-0 w-[90%] h-[10px]"
        style={{
          background:
            "linear-gradient(to right,rgb(5, 54, 158),rgb(32, 168, 32), #000000)",
        }}
      />
    </section>
  );
}
