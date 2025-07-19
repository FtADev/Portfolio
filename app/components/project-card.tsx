"use client";
import Link from "next/link";
import React from "react";
import { DirectionAwareHover } from "./ui/card";
import { motion } from "framer-motion";

interface ProjectProps {
  index: number;
  title: string;
  description: string;
  src: string;
  link: string;
}

const ProjectCard = ({
  index,
  title,
  description,
  link,
  src,
}: ProjectProps) => {
  const varient = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.75,
        delay: 0.1 * index + 2.5,
      },
    },
  };

  return (
    // <motion.div
    //   initial="hidden"
    //   whileInView="visible"
    //   variants={varient}
    //   viewport={{ once: true }}
    // >
      <Link href={link} className="" target="_blank">
        <DirectionAwareHover imageUrl={src}>
          <p className="font-bold text-xl">{title}</p>
          <p className="font-normal text-sm">{description}</p>
        </DirectionAwareHover>
      </Link>
    // {/* </motion.div> */}
  );
};

export default ProjectCard;
