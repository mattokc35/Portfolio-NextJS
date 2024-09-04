import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
}

export default function Modal({ isOpen, onClose, imageUrl }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative bg-clear rounded-lg overflow-hidden shadow-lg"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-gray-800 rounded-full px-2 py-1 z-10"
        >
          ✕
        </button>
        <Image
          src={imageUrl}
          alt="Profile"
          width={500}
          height={500}
          className="h-72 w-72 rounded-full border-[0.35rem] object-cover border-clear"
        />
      </motion.div>
    </div>
  );
}
