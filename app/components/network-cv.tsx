"use client";
import React, { ReactNode } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface NetworkProps {
  index: number;
  url: string;
  icon: ReactNode;
}

const NetworkCV = ({ index, url, icon }: NetworkProps) => {
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
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={varient}
      viewport={{ once: true }}
      className=""
    >
      <Link
        href={url}
        className="text-bgPink hover:scale-125 transition-all duration-150"
      >
        {icon}
      </Link>
    </motion.div>
  );
};

export default NetworkCV;
