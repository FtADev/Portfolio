"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FocusCards } from "../components/ui/focus-card";
import { DirectionAwareHover } from "../components/ui/card";
import LiquidShape from "../components/liquid-shape";
import SelectedButton from "../components/selected-button";
import Link from "next/link";
import ProjectCard from "../components/project-card";

/**
 * The `ProjectSection` component is a React functional component that renders a section for displaying a list of projects.
 * It includes features such as project filtering by type, and rendering individual project cards.
 * The component uses various other UI components like `LiquidShape`, `SelectedButton`, and `ProjectCard` to create the desired layout and functionality.
 */
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
      src: "/bill.png",
      type: 1,
      link: "https://bankmellat.ir/electronic_payment_of_bill.aspx",
    },
    {
      title: "Financial Capability",
      src: "/tamakon.png",
      type: 1,
      link: "https://bankmellat.ir/deposit_account.aspx",
    },
    {
      title: "Namacheque Service",
      src: "/namacheque.jpg",
      type: 1,
      link: "https://bankmellat.ir/nama_check.aspx",
    },
    {
      title: "Financial Inquiry",
      src: "/tamakon2.png",
      type: 2,
      link: "",
    },
    {
      title: "Coffee Shop",
      src: "/blog-img3.jpg",
      type: 2,
      link: "",
    },
    {
      title: "Ecommerce",
      src: "/blog-img4.jpg",
      type: 2,
      link: "",
    },
    {
      title: "Payatam",
      src: "/payatam.png",
      type: 3,
      link: "/project/payatam",
    },
    {
      title: "Timeset",
      src: "/timeset.png",
      type: 3,
      link: "/project/timeset",
    },
    {
      title: "Pet Customer",
      src: "/pet-customer.png",
      type: 3,
      link: "/project/pet-customer",
    },
  ];

  const [filterProjects, setProjects] = useState(projects);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="projects" className="relative w-full h-full flex min-h-screen items-center justify-center mx-auto max-w-7xl px-4 md:py-16 gap-10">
      <LiquidShape
      className="hidden md:block"
        color={shapeColor}
        position="-top-[100px] -left-[300px]"
        height="600px"
        width="600px"
      />

      <div className="flex flex-col w-full gap-8 justify-center items-center z-10">
        <span className="text-bgPink font-bold [font-size:_clamp(2rem,4vw,3.5rem)]">My Projects</span>
        <div className="flex md:gap-7 gap-1 mt-5">
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
            <ProjectCard key={index} title={item.title} link={item.link} src={item.src} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quaerat!"/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
