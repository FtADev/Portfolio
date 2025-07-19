"use client";
import React, { useState } from "react";
import LiquidShape from "../components/liquid-shape";
import SelectedButton from "../components/selected-button";
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
      description: "All Services for paying bills",
    },
    {
      title: "Financial Capability",
      src: "/tamakon.svg",
      type: 1,
      link: "https://pishkhan.bankmellat.ir/pishkhan/financial_certificate_service",
      description:
        "The Service for requesting financial capability certificate",
    },
    {
      title: "Namacheque Service",
      src: "/cheque.svg",
      type: 1,
      link: "https://bankmellat.ir/fa-IR/commercial.personal/5349/page/%D9%86%D9%85%D8%A7-%DA%86%DA%A9",
      description: "An API for cheques registration",
    },
    {
      title: "Financial Inquiry",
      src: "/document.svg",
      type: 2,
      link: "",
      description:
        "The Service for receiving financial capability certificate. (It has not published yet)",
    },
    {
      title: "Coffee Shop",
      src: "/coffee.svg",
      type: 2,
      link: "https://coffee-shop-xi-beryl.vercel.app/",
      description: "Demo website for coffee shop",
    },
    {
      title: "Ecommerce",
      src: "/ecommerce.svg",
      type: 2,
      link: "https://ecommerce-db-two.vercel.app/",
      description: "Demo website for shopping, with admin dashboard",
    },
    {
      title: "Payatam",
      src: "/team.svg",
      type: 3,
      link: "/project/payatam",
      description:
        "Finding partners for various activities such as sports, education, or renting office.",
    },
    {
      title: "Timeset",
      src: "/sport.svg",
      type: 3,
      link: "/project/timeset",
      description:
        "A sports reservation application in collaboration with Tehran Municipality.",
    },
    {
      title: "Pet Customer",
      src: "/pet.svg",
      type: 3,
      link: "/project/pet-customer",
      description:
        "Access pet shops services such as grooming or reserving a room for pets.",
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

  const projectsVarient = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.75,
        delay: 1,
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={projectsVarient}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 max-w-5xl mx-auto w-full justify-center z-10 px-4"
        >
          {filterProjects.map((item, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={item.title}
              link={item.link}
              src={item.src}
              description={item.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
