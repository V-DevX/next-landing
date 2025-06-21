import React from "react";
import Image, { StaticImageData } from "next/image";
import { section2 } from "../../utils/section2";
import sectionImg from "../../Assets/Section2.png";
import sectionbanner from "../../Assets/Section2Banner.jpg";

export default function Section2() {
  return (
    <section className="relative py-12 px-6 md:px-0 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Col-1*/}
        <div className="space-y-8 md:ml-10 lg:ml-18">
          <p className="text-[20px] font-[600] tracking-[-0.02em] text-[#1959AC] [font-family:var(--font-sans)]">
            Lorem ipsum dolor sit amet
          </p>

          <h2
            className="text-[2.5rem] font-[700] tracking-[-0.02em] text-[#222222] [font-family:var(--font-heading)] leading-[130%] lg:mr-35"
          >
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
          </h2>

          <p className="text-[16px] font-[400] text-[#222222] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare. 
          </p>

          {/* Img & content */}
          <div className="space-y-8">
            {section2.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                {/* Image */}
                <div className="w-9 h-9 flex-shrink-0 overflow-hidden rounded">
                  <Image
                    src={sectionImg as StaticImageData}
                    alt={`Illustration for item ${item.id}`}
                    width={36}
                    height={36}
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col">
                  <h3
                    className="text-[18px] font-[700] text-[#222222] [font-family:var(--font-heading)]"
                  >
                    {item.head}
                  </h3>
                  <p className="mt-2 text-[14px] md:text-[18px] font-[400] text-[#222222] leading-snug">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Col2*/}
        <div className="flex items-center justify-center md:justify-end">
          <div className="overflow-hidden w-full max-w-[500px]">
            <div className="relative w-full h-[650px]">
              <Image
                src={sectionbanner}
                alt="Section illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border*/}
      <div
        className="absolute bottom-0 left-0 w-[90%] h-[10px]"
        style={{
          background:
            "linear-gradient(to right, rgb(5, 54, 158), rgb(32, 168, 32), #000000)",
        }}
      />
    </section>
  );
}
