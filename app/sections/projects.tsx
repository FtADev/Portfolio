"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FocusCards } from "../components/ui/focus-card";
import { DirectionAwareHover } from "../components/ui/card";
import LiquidShape from "../components/liquid-shape";
import SelectedButton from "../components/selected-button";
import Link from "next/link";
import ProjectCard from "../components/project-card";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const shapeColor = "#FFD6E8";

  const projectTypes = [
    {
      title: "All",
    },
    {
      title: "Backend",
    },
    {
      title: "Frontend",
    },
    {
      title: "Mobile App",
    },
  ];

  const projects = [
    {
      title: "Bill Services",
      src: "/bill.svg",
      type: 1,
      link: "https://bastam.bankmellat.ir/bastam/bill_service",
    },
    {
      title: "Financial Capability",
      src: "/tamakon.svg",
      type: 1,
      link: "https://pishkhan.bankmellat.ir/pishkhan/financial_certificate_service",
    },
    {
      title: "Namacheque Service",
      src: "/cheque.svg",
      type: 1,
      link: "https://bankmellat.ir/fa-IR/commercial.personal/5349/page/%D9%86%D9%85%D8%A7-%DA%86%DA%A9",
    },
    {
      title: "Financial Inquiry",
      src: "/document.svg",
      type: 2,
      link: "",
    },
    {
      title: "Coffee Shop",
      src: "/coffee.svg",
      type: 2,
      link: "https://coffee-shop-xi-beryl.vercel.app/",
    },
    {
      title: "Ecommerce",
      src: "/ecommerce.svg",
      type: 2,
      link: "https://ecommerce-db-two.vercel.app/",
    },
    {
      title: "Payatam",
      src: "/team.svg",
      type: 3,
      link: "/project/payatam",
    },
    {
      title: "Timeset",
      src: "/sport.svg",
      type: 3,
      link: "/project/timeset",
    },
    {
      title: "Pet Customer",
      src: "/pet.svg",
      type: 3,
      link: "/project/pet-customer",
    },
  ];

  const titleVarient = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 1,
      },
    },
  };

  const [filterProjects, setProjects] = useState(projects);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section
      id="projects"
      className="relative w-full h-full flex min-h-screen items-center justify-center mx-auto max-w-7xl px-4 py-16 gap-10"
    >
      <LiquidShape
        color={shapeColor}
        position="-top-[100px] -left-[300px]"
        height="600px"
        width="600px"
      />

      <div className="flex flex-col w-full gap-8 justify-center items-center z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={titleVarient}
          viewport={{ once: true }}
          className="z-10"
        >
          <span className="text-bgPink font-bold [font-size:_clamp(2rem,4vw,3.5rem)]">
            My Projects
          </span>
        </motion.div>
        <div className="flex lg:gap-7 gap-1 mt-5">
          {projectTypes.map((type, index) => (
            <SelectedButton
              key={index}
              selectedColor="bg-bgPink"
              index={index}
              selectedIndex={selectedIndex}
              title={type.title}
              onClick={() => {
                if (index === 0) setProjects(projects);
                else
                  setProjects(() =>
                    projects.filter((proj) => proj.type === index)
                  );

                setSelectedIndex(index);
              }}
            />
          ))}
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 max-w-5xl mx-auto w-full justify-center z-10 px-4">
          {filterProjects.map((item, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={item.title}
              link={item.link}
              src={item.src}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quaerat!"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
