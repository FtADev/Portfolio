import React from "react";
import { AnimatedText } from "./animated-text";
import { motion } from "framer-motion";

interface DeveloperProps {
  title: string;
  color: string;
  textColor: string;
  secondaryColor: string;
  secondaryTextColor: string;
}

const DeveloperPart = ({
  title,
  color,
  textColor,
  secondaryTextColor,
}: DeveloperProps) => {
  const wholeVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: "linear",
        duration: 0.75,
        delay: 0.75,
      },
    },
  };

  const variant1 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.75,
        delay: 2.5,
      },
    },
  };

  const jobVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.75,
        delay: 3.5,
      },
    },
  };

  const btnVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.75,
        delay: 4,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={wholeVariant}
      viewport={{ once: true }}
      className={`flex flex-col w-1/2 justify-start pt-72 ${color} hover:w-2/3 transition-all duration-1000`}
    >
      <div className="flex flex-col mx-auto text-center gap-5">
        <motion.span
          initial="hidden"
          whileInView="visible"
          variants={variant1}
          viewport={{ once: true }}
          className={`${textColor} text-xl`}
        >
          As a
        </motion.span>
        <motion.span
          initial="hidden"
          whileInView="visible"
          variants={jobVariant}
          viewport={{ once: true }}
          className={`${textColor} text-4xl font-bold`}
        >
          <AnimatedText text={title} />
        </motion.span>
        <motion.button
          initial="hidden"
          whileInView="visible"
          variants={btnVariant}
          viewport={{ once: true }}
          className="transition duration-200 p-[3px] relative w-60 mx-auto mt-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div
            className={`${color} px-8 py-2 rounded-[6px] relative ${textColor} hover:bg-transparent ${secondaryTextColor} font-semibold`}
          >
            Explore My Projects
          </div>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DeveloperPart;
