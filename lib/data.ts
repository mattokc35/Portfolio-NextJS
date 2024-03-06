import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import sapphireImg from "@/public/sapphirebythesea.png";
import airbnbImg from "@/public/airbnblogo.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  /*
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name: "Hobbies",
    hash: "#hobbies",
  },*/
] as const;

export const experiencesData = [
  {
    title: "Software Engineer at Aspen Technologies",
    location: "Houston, TX",
    description:
      "I currently work as a Frontend Developer for the Dataworks Visualization team at AspenTech",
    skillsUsed:
      "Skills used: React, Bootstrap, Redux, Vue, TypeScript, HTML/CSS, Java, Perforce, Nightwatch",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - present",
  },
  {
    title: "Software Developer at IBM",
    location: "College Station, TX",
    description: "I worked as a developer for IBM's Cloud Computing division.",
    skillsUsed:
      "Skills used: Terraform, HCL, React, Javascript, Mocha, HTML/CSS, IBM Cloud, Kubernetes, PaaS",
    icon: React.createElement(CgWorkAlt),
    date: "August 2022 - July 2023",
  },
  {
    title: "Texas A&M University",
    location: "Austin, TX",
    description:
      "I graduated from Texas A&M University with a B.S. in Computer Science.",
    skillsUsed: "",
    icon: React.createElement(LuGraduationCap),
    date: "August 2022",
  },
  {
    title: "Software Developer Intern at IBM",
    location: "Austin, TX (remote)",
    description: "I worked as an intern in IBM's Space Tech division. ",
    skillsUsed:
      "Skills Used: Python, Machine Learning, Tensorflow, React, Node.js",
    icon: React.createElement(CgWorkAlt),
    date: "May 2021 - August 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Direct Booking Site for Beach House Rental",
    description:
      "I'm currently working on a Full-Stack direct-booking website for a short-term rental beach house, Sapphire By The Sea in Crystal Beach, TX. The site uses identity and payment verification systems to allow guests to make secure booking transactions.",
    tags: [
      "React",
      "Express.js",
      "Node.js",
      "Bootstrap",
      "Stripe",
      "Netlify",
      "Render",
    ],
    imageUrl: sapphireImg,
  },
  {
    title: "AirbnbScrapeAndSearcher",
    description:
      "I wrote a Python script that runs an Airbnb search and returns what page your listing lands on, as well as data about your listing and all other listings found in the search, and writes this data to both a .csv and .txt file",
    tags: ["Python", "BeautifulSoup", "Scrapy", "Github"],
    imageUrl: airbnbImg,
  },
] as const;

export const skillsData = [
  "React",
  "Redux",
  "Javascript ES6",
  "HTML5",
  "CSS3",
  "Git",
  "Perforce",
  "Bootstrap",
  "MaterialUI",
  "Babel",
  "Webpack",
  "Vite",
  "SEO",
  "Jest",
  "Mocha",
  "Vue",
  "RESTful APIs",
  "TypeScript",
  "HTTP",
  "Express",
  "Flask",
  "Django",
  "Python",
  "Stripe",
  "Next.js",
  "Kubernetes",
  "AWS",
  "Object-Oriented Programming",
  "Functional Programming",
  "Front-End Development",
  "Terraform",
  "Machine Learning",
  "Tensorflow",
  "Keras",
  "Node",
  "Convolutional Neural Networks",
] as const;
