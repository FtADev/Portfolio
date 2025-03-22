"use client";

import React from "react";
import ImageWithBG from "../components/image-bg";
import LiquidShape from "../components/liquid-shape";
import NavBarItems from "../components/nav-bar-items";
import { motion } from "framer-motion";

const LandingSection = () => {
  const shapeColor = "#FFD6E8";

  const navBarItems = [
    {
      title: "About",
      href: "#about",
      className: "",
    },
    {
      title: "Projects",
      href: "#projects",
      className: "",
    },
    {
      title: "Contact",
      href: "#contact",
      className: "text-white bg-bgPink rounded-2xl px-3 py-2",
    },
    {
      title: "",
      href: "#",
      className: "",
    },
  ];

  const imageVarient = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const titleVarient = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: "easeOut",
        duration: 1,
        delay: 0.5,
      },
    },
  };

  return (
    <section className="relative w-full h-full flex flex-col items-center min-h-screen mx-auto max-w-7xl px-4 py-4 gap-8">
      <div className="flex w-full items-center justify-end gap-7 mt-7 z-10">
        {navBarItems.map((item, index) => (
          <NavBarItems
            key={index}
            id={index}
            title={item.title}
            href={item.href}
            className={item.className}
          />
        ))}
      </div>
      <LiquidShape color={shapeColor} position="-top-[180px] -left-[300px]" />
      <span className="hidden lg:block absolute top-1/4  text-[300px] font-sans text-white uppercase drop-shadow-[0_1.2px_1.2px_rgba(244,114,182,0.3)] overflow-x-hidden z-0">
        Fatemeh
      </span>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-between w-full lg:gap-5 gap-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={titleVarient}
          viewport={{ once: true }}
          className="z-10"
        >
          <div className="flex flex-col text-center lg:text-start">
            <div className="text-textColor [font-size:_clamp(0.5rem,3vw,1rem)]">
              Hello, its Me!
            </div>
            <div className="font-bold text-textColor2 mb-4 [font-size:_clamp(1rem,5vw,2.25rem)]">
              Fatemeh Akhlaghi
            </div>
            <div className="text-textColor [font-size:_clamp(0.5rem,3vw,1rem)]">
              I'm a
            </div>
            <div className="text-bgPink font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] [font-size:_clamp(2rem,5vw,3.5rem)]">
              FullStack Developer
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={imageVarient}
          viewport={{ once: true }}
          className="order-first lg:order-last z-10"
        >
          <ImageWithBG
            color={shapeColor}
            imageSrc="/landing.svg"
            size="lg:w-[500px] lg:h-[500px] w-[300px] h-[300px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LandingSection;
