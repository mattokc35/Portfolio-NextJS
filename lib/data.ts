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
      "Skills used: React.js, Bootstrap, Redux, Vue.js, TypeScript, Javascript, SQL, HTML/CSS, Java, Perforce, Nightwatch.js",
    icon: React.createElement(CgWorkAlt),
    date: "July 2023 - present",
  },
  {
    title: "Software Developer at IBM",
    location: "College Station, TX",
    description: "I worked as a developer for IBM's Cloud Computing division.",
    skillsUsed:
      "Skills used: Terraform, React.js, Javascript, Mocha, Git, Carbon, HTML/CSS, IBM Cloud, Kubernetes, PaaS, Test-Driven Development, Python",
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
      "Skills Used: Python, Machine Learning, Tensorflow, Deep Learning, React.js, Express.js, Node.js, SwaggerUI, Storybook.js, Docker, Kubernetes, MongoDB",
    icon: React.createElement(CgWorkAlt),
    date: "May 2021 - August 2021",
  },
] as const;

export const projectsData = [
  {
    title: "Short-Term Rental Direct Booking Website",
    description:
      "I'm currently working on a Full-Stack direct-booking website for a short-term rental beach house, Sapphire By The Sea in Crystal Beach, TX. The site uses identity and payment verification systems to allow guests to make secure booking transactions.",
    tags: [
      "React.js",
      "Express.js",
      "Node.js",
      "TypeScript",
      "Javascript",
      "HTML",
      "CSS",
      "Bootstrap",
      "Stripe",
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
  {
    title: "Help Desk Ticket System Project",
    description:
      "I created a practice full-stack IT Support Desk web app where users can submit tickets, and admins can respond to tickets/update ticket statuses.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Styled Components",
      "MVC",
    ],
    imageUrl: airbnbImg,
  },
] as const;

export const skillsData = [
  "React.js",
  "Redux",
  "Javascript",
  "HTML5",
  "CSS3",
  "Git",
  "Node.js",
  "Bootstrap",
  "MaterialUI",
  "Babel",
  "Webpack",
  "Vite",
  "SEO",
  "Jest",
  "Mocha",
  "Vue.js",
  "RESTful APIs",
  "TypeScript",
  "HTTP",
  "Express.js",
  "Flask",
  "Django",
  "Python",
  "Stripe",
  "Next.js",
  "Storybook.js",
  "SwaggerUI API",
  "Kubernetes",
  "Docker",
  "AWS",
  "Object-Oriented Programming",
  "Functional Programming",
  "Front-End Development",
  "Terraform",
  "Machine Learning",
  "Tensorflow",
  "Google Cloud Platform",
  "Keras",
  "Convolutional Neural Networks",
  "Test-Driven Development",
  "Perforce",
  "SQL",
  "MongoDB",
] as const;
