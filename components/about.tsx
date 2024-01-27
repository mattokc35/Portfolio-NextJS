"use client";

import React from "react";
import SectionHeading from "./section-header";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] leading-8 text-center sm:mb-34"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="font-medium mb-8">
        After graduating with a B.S. in Computer Science from Texas A&M
        University in 2022, I've been working in the tech industry as a Software
        Developer for the past 2 years. During my career so far, I've had the
        opportunity to work in Front-End Development, Full-Stack development,
        Cloud Computing, Infrastructure as Code, and Machine Learning.
      </p>
      <p className="font-medium mb-8">
        {`Outside of work, I enjoy travelling to new places and exploring different cultures (food, architecture, music, etc.) as well as photography and playing the piano. I also enjoying going for walks, exercising, and watching/playing different sports.`}
      </p>
    </motion.section>
  );
}
