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
        <div className="py-4 pb-5 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[19rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 text-sm">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="absolute top-14 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:-right-[initial] group-even:-left-40 group-hover:-translate-x-9 group-hover:-translate-y-5 group-hover:-rotate-3 transition group-even:group-hover:translate-x-9 group-even:group-hover:translate-y-5 group-even:group-hover:rotate-3"
          src={imageUrl}
          alt={"Sapphire By The Sea"}
          quality={95}
        ></Image>
      </section>
    </motion.div>
  );
}
