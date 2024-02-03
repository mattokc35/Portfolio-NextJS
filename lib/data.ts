import React from "react";
import { LuGraduationCap } from "react-icons/lu";
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
    title: "Direct Booking Site for Beach House Rental",
    description:
      "I'm currently working on a Full-Stack direct-booking website for a short-term rental beach house, Sapphire By The Sea in Crystal Beach, TX. The site uses identity and payment verification systems to allow guests to make secure booking transactions.",
    tags: [
      "React",
      "Express.js",
      "Bootstrap",
      "Stripe.js",
      "Netlify",
      "Render",
    ],
    imageUrl: sapphireImg,
  },
  {
    title: "AirbnbScrapeAndSearcher",
    description:
      "I wrote a Python script that runs an Airbnb search and returns what page your listing lands on, as well as data about your listing and all other listings found in the search, and writes this data to both a .csv and .txt file",
    tags: ["Python", "BeautifulSoup", "Scrapy"],
    imageUrl: airbnbImg,
  },
] as const;

export const skillsData = [
  "React",
  "Redux",
  "Javascript",
  "HTML",
  "CSS",
  "Git/Github",
  "Perforce",
  "Vue",
  "Python",
  "Next",
  "AWS",
  "Object-Oriented Programming",
  "Functional Programming",
  "Front-End Development",
  "Terraform",
  "Machine Learning",
  "Linux Terminal",
  "Tensorflow",
  "Object Detection",
  "Keras",
  "Jupyter Notebook",
  "Node",
  "Full-Stack Development",
  "Convolutional Neural Networks",
] as const;
