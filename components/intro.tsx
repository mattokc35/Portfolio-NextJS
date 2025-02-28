"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import Modal from "./modal";

export default function Intro() {
  const { ref, inView } = useInView({ threshold: 0.6 });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("Home");
    }
  }, [inView, timeOfLastClick]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section
      className="mb-28 max-w-[50rem] text-center sm:mb-40 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="sm:mt-4 mt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/profilepic.jpg"
              width="210"
              height="210"
              quality="95"
              alt="Matthew Chen profile pic"
              priority={true}
              className="h-48 w-48 rounded-full border-[0.35rem] object-cover border-white shadow-xl cursor-pointer hover:scale-125 active:scale-105 transition"
              onClick={openModal}
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl text-gray font-small !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hi, I'm Matthew Chen</span>. I'm a software
        engineer with <span className="font-bold">~2.5 years </span>of experience.{" "}
        <span>{`My current focus is primarily on full stack development (`}</span>
        <span className="font-bold">React</span>
        <span>{`, TypeScript, Node, and AWS). Feel free to check out my GitHub, LinkedIn, or download my resume below!`}</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-100 transition cursor-pointer border border-black/10"
          href="/Matthew-Chen-Resume-2.pdf"
          download={true}
        >
          Download Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full cursor-pointer border border-black/10 focus:scale-120 hover:scale-110 active:scale-100 transition"
          href="https://www.linkedin.com/in/matthew-chen-54b972148/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.25rem] rounded-full cursor-pointer border border-black/10 focus:scale-120 hover:scale-110 active:scale-100 transition"
          href="https://www.github.com/mattokc35"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
      <div className="mt-8">
        <span className="italic"></span>
      </div>

      {/* Modal for profile picture */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl="/profilepic.jpg"
      />
    </section>
  );
}
