"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Variants, Easing } from "framer-motion";

interface NavBarItemsProps {
  id: number;
  title: string;
  href: string;
  className: string;
}

const NavBarItems = ({ id, title, href, className }: NavBarItemsProps) => {
  const varient: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: [0.25, 0.1, 0.25, 1],
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
        to={href}
        smooth={true}
        className={`text-textColor2 font-bold [font-size:_clamp(0.5rem,3vw,1rem)] cursor-pointer ${className}`}
      >
        {title}
      </Link>
    </motion.div>
  );
};

export default NavBarItems;
