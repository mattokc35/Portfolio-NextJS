"use client";

import React, { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-full sm:max-w-[42rem] border border-black/5 overflow-hidden rounded-lg sm:pr-8 relative sm:h-[23rem] hover:bg-gray-200 transition group-even:pl-3">
        <div className="py-3 px-4 sm:p-5 sm:pl-6 sm:pr-2 sm:pt-8 sm:max-w-[50%] flex flex-col h-full group-even:ml-[19rem]">
          <h3 className="text-lg sm:text-2xl font-semibold">{title}</h3>
          <p className="mt-1 leading-relaxed text-gray-700 text-xs sm:text-sm">
            {description}
          </p>
          <ul className="flex flex-wrap mt-3 gap-1 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-2 py-0.5 text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="absolute top-8 -right-12 xs:right-0 w-[18.75rem] xs:w-[14rem] sm:w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-12 group-hover:-translate-x-4 group-hover:-translate-y-3 group-hover:-rotate-2 transition group-even:group-hover:translate-x-4 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2"
          src={imageUrl}
          alt={title}
          quality={95}
        ></Image>
      </section>
    </motion.div>
  );
}
