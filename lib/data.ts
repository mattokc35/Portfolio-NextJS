import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name: "Hobbies",
    hash: "#hobbies",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer at Aspen Technologies",
    location: "Houston, TX",
    description:
      "I currently work as a Front-End Developer for the Dataworks Visualization team at AspenTech. Skills used: React, Bootstrap, Redux, Vue, Javascript, HTML/CSS, Java,",
    icon: React.createElement(LuGraduationCap),
    date: "201",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  },
] as const;

export const skillsData = ["HTML", "CSS", "JavaScript"] as const;
