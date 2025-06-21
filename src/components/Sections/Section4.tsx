import React from "react";
import Image, { StaticImageData } from "next/image";
import { blog } from "../../utils/blog";
import BgGraphic from "../../Assets/svg/Bg-Graphic.svg";

export default function Section4() {
  return (
    <section className="relative py-16 px-6 bg-white overflow-hidden">
      {/* BG SVG*/}
      <div
        className="absolute inset-0 z-0 opacity-50 pointer-events-none bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${BgGraphic.src})` }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Texts */}
        <div className="mb-12 text-left max-w-4xl">
          <p className="text-[20px] font-semibold text-[#1959AC] mb-2">
            Lorem ipsum dolor sit amet
          </p>
          <h2 className="text-[2.5rem] font-bold text-[#222222] mb-4 leading-tight [font-family:var(--font-heading)]">
            LOREM IPSUM DOLOR SIT
          </h2>
          <p className="text-[16px] font-[400] text-[#444444] leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam
            mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
          </p>
        </div>

        {/* Blog Cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-items-center md:px-20 lg:px-40">
          {blog.map((post) => (
            <div
              key={post.id}
              className="sm:w-60 md:w-80 lg:w-100 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative w-full h-[240px]">
                <Image
                  src={post.img as StaticImageData}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-[20px] font-bold text-[#222222] mb-3">
                  {post.title}
                </h3>
                <p className="text-[15px] text-[#444444] leading-relaxed flex-grow">
                  {post.description}
                </p>

                <div className="mt-6">
                  <span className="text-[#1959AC] font-semibold underline cursor-pointer hover:text-[#063078] transition">
                    Learn more
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
