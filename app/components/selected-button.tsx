"use client";
import React from "react";
import { motion } from "framer-motion";

interface SelectedButtonProps {
  index: number;
  title: string;
  onClick: (index: number) => void;
  selectedColor: string;
  selectedIndex: number;
}

const SelectedButton = ({
  title,
  onClick,
  selectedColor,
  index,
  selectedIndex,
}: SelectedButtonProps) => {
  const varient = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.75,
        delay: 0.5 * index + 0.7,
      },
    },
  };

  return (
    <motion.button
      initial="hidden"
      whileInView="visible"
      variants={varient}
      viewport={{ once: true }}
      className={`[font-size:_clamp(0.5rem,3vw,1.5rem)] font-bold ${
        selectedIndex === index && selectedColor
      } ${
        selectedIndex === index ? "text-white" : "text-black"
      }  md:px-5 md:py-2 px-3 py-1 rounded-xl`}
      onClick={() => {
        onClick(index);
      }}
    >
      {title}
    </motion.button>
  );
};

export default SelectedButton;
