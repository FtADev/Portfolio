"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface NavBarItemsProps {
  id: number;
  title: string;
  href: string;
  className: string;
}

const NavBarItems = ({ id, title, href, className }: NavBarItemsProps) => {
  const varient = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 0.75,
        delay: 0.5 * id,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={varient}
      viewport={{ once: true }}
    >
      <Link
        href={href}
        className={`text-textColor2 font-bold [font-size:_clamp(0.5rem,3vw,1rem)] ${className}`}
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default NavBarItems;
