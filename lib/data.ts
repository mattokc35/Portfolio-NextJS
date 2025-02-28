import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import helpDeskImg from "@/public/helpdesk.webp";
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
] as const;

export const experiencesData = [
  {
    title: "Full Stack Developer at Dev Technology Group",
    location: "United States (remote)",
    description:
      "I currently work as a Full Stack Developer for the Dev Technology Group, a defense contractor based in Reston, VA.",
    skillsUsed:
      "Skills used: React.js, Microservices, Microfrontends, TypeScript, AWS Lambda, DynamoDB, Node.js, Javascript, Jest, GitHub, Jenkins, AWS",
    icon: React.createElement(CgWorkAlt),
    date: "February 2025 - present",
  },
  {
    title: "Software Engineer at Aspen Technologies",
    location: "Houston, TX (hybrid)",
    description:
      "I worked as a Software Engineer for the Dataworks Visualization (Frontend) team at AspenTech",
    skillsUsed:
      "Skills used: React.js, Bootstrap, Redux, Vue.js, TypeScript, Javascript, SQL, HTML/CSS, Java, Perforce, Nightwatch.js",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - February 2025",
  },
  {
    title: "Software Developer at IBM",
    location: "Austin, TX (hybrid)",
    description:
      "I worked as a software developer for IBM's Cloud Engineering division.",
    skillsUsed:
      "Skills used: Terraform, React.js, Next.js, JavaScript, TypeScript, Mocha, Git, Carbon, HTML/CSS, IBM Cloud, Kubernetes, PaaS, Test-Driven Development, Python, Docker",
    icon: React.createElement(CgWorkAlt),
    date: "August 2022 - June 2023",
  },
  {
    title: "Software Developer Intern at IBM",
    location: "Austin, TX (remote)",
    description: "I worked as an intern for IBM's Space Tech division. ",
    skillsUsed:
      "Skills Used: Python, Machine Learning, Tensorflow, Deep Learning, React.js, Express.js, Node.js, SwaggerUI, Storybook.js, Docker, Kubernetes, MongoDB",
    icon: React.createElement(CgWorkAlt),
    date: "May 2021 - August 2021",
  },
  {
    title: "B.S. Computer Science from Texas A&M University",
    location: "College Station, TX",
    description:
      "I graduated from Texas A&M University with a Bachelor's in Computer Science.",
    skillsUsed:
      "C++, Software Engineering, Data Structures and Algorithms, Discrete Math",
    icon: React.createElement(LuGraduationCap),
    date: "",
  },
  {
    title: "Software Developer Intern at Texas A&M University",
    location: "College Station, TX (on-site)",
    description:
      "I worked as a Software Developer intern in the Parasol Computing Research Lab under Dr. Jeff Huang.",
    skillsUsed: "C++, Github, Multithreaded Programming",
    icon: React.createElement(CgWorkAlt),
    date: "May 2019 - August 2019",
  },
] as const;

export const projectsData = [
  {
    title: "Short-Term Rental Direct Booking Website",
    description:
      "I built a full-stack direct-booking website for a short-term rental beach house. The site uses identity and payment verification systems to allow guests to make secure booking transactions.",
    tags: [
      "React.js",
      "Next.js",
      "Express.js",
      "Node.js",
      "TypeScript",
      "Javascript",
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
    imageUrl: helpDeskImg,
  },
] as const;

export const skillsData = [
  "React.js",
  "Redux",
  "Javascript",
  "HTML5",
  "CSS3",
  "Git",
  "Next App Router",
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
  "Machine Learning",
  "Tensorflow",
  "Google Cloud Platform",
  "Keras",
  "Test-Driven Development",
  "Perforce",
  "SQL",
  "MongoDB",
] as const;
