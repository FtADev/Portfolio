"use client";
import React, { useState } from "react";
import Collapsable from "../components/collapsable";
import ImageWithBG from "../components/image-bg";
import LiquidShape from "../components/liquid-shape";
import Link from "next/link";

const AboutSection = () => {
  const shapeColor = "#FFD6E8";
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onExpClick = (index: number) => {
    setSelectedIndex(index);
  };

  const experiences = [
    {
      index: 0,
      title: "Behsazan Mellat",
      role: "Backend Developer",
      date: "2024-Present",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      skills: [
        "Java",
        "Spring Boot",
        "RESTful API",
        "Hibernate",
        "JPA",
        "MySQL",
        "MSSQL",
        "DB2",
        "Jira",
        "Scrum",
        "Git",
      ],
    },
    {
      index: 1,
      title: "Behsazan Mellat",
      role: "Frontend Developer",
      date: "2024-Present",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      skills: [
        "TypeScript",
        "Nextjs",
        "Reactjs",
        "Tailwind",
        "Prisma",
        "Axios",
        "Zustand",
        "Formik",
        "Yup",
      ],
    },
    {
      index: 2,
      title: "StarTrick",
      role: "Flutter Developer",
      date: "2022-2023",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      skills: [
        "Flutter",
        "Flutter Web",
        "Riverpod",
        "Clean Architecture",
        "Dio",
        "Jira",
        "Scrum",
        "Git",
      ],
    },
    {
      index: 3,
      title: "Erfan Salamat",
      role: "Flutter Developer",
      date: "2020-2021",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      skills: [
        "Flutter",
        "Flutter Web",
        "Riverpod",
        "CI/CD",
        "Docker",
        "Jira",
        "Scrum",
        "Git",
      ],
    },
    {
      index: 4,
      title: "Exceptional Dev",
      role: "Software Developer",
      date: "2017-2020",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      skills: [
        "Android Development",
        "Flutter",
        "IoT",
        "Linux",
        "Python",
        "Git",
        "MySQL",
        "MongoDB",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full h-full flex min-h-screen items-center justify-center mx-auto max-w-7xl px-4 py-12 gap-10 text-center"
    >
      <LiquidShape
        color={shapeColor}
        position="-top-[300px] md:-top-[100px] -right-[300px]"
      />

      <div className="grid grid-rows-4 grid-cols-1 md:grid-cols-2 w-full h-full gap-4">

        {/* Image */}
        <div className="row-span-3 order-2 md:order-1 md:pt-8">
          <ImageWithBG
            color={shapeColor}
            imageSrc="/about.svg"
            size="md:w-[500px] md:h-[500px] w-[300px] h-[300px]"
          />
        </div>

        {/* TITLE */}
        <div className="relative row-span-1 order-1 md:order-2 md:text-start z-10">
          <span className="absolute bottom-0 right-0 left-0 text-bgPink font-bold [font-size:_clamp(2rem,4vw,3.5rem)]">
            About Me
          </span>
        </div>

        {/* Description */}
        <div className="row-span-3 order-3 z-10">
          <div className="flex flex-col md:gap-8 gap-3 ">
            <p className="text-justify font-normal [font-size:_clamp(0.5rem,3vw,1.125rem)]">
              I'm experienced FullStack Developer with 5+ years of expertise in
              Frontend and Backend Technology. I have more than 1 year of
              experience as a Backend Developer of Java. I am now seeking to
              expand my knowledge in Backend Development. Language is not a
              problem for me! I can switch easily between other languages!
            </p>
            <div className="flex flex-col">
              {experiences.map((item, index) => (
                <Collapsable
                  key={index}
                  index={item.index}
                  title={item.title}
                  role={item.role}
                  date={item.date}
                  description={item.description}
                  skills={item.skills}
                  selectedIndex={selectedIndex}
                  onClick={() => onExpClick(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="row-span-1 order-4 mt-4">
          <Link
            href="https://drive.google.com/file/d/19p_mKaXVBX-SwpUd-ZjX1_S_e3Vhe-QP/view?usp=sharing"
            className=" bg-bgPink rounded-xl py-2 px-5 text-white font-bold mx-auto text-lg shadow-md"
          >
            View My CV
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
