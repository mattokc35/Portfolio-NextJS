"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-header";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.99 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, timeOfLastClick]);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] leading-8 text-center sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="font-medium mb-8">
        After graduating with a B.S. in Computer Science from Texas A&M
        University, I've been working in the tech industry as a Software
        Engineer for the past ~2.5 years. During my career so far, I've had the
        opportunity to work in Front-End Development, Full-Stack development,
        Cloud Computing, Infrastructure as Code, and Machine Learning.
      </p>
      <p className="font-medium mb-8">
        {`Outside of work, I enjoy travelling to new places and exploring different cultures (food, architecture, music, etc.) as well as photography and playing the piano. I also enjoying going for walks, exercising, and watching/playing different sports.`}
      </p>
    </motion.section>
  );
}
