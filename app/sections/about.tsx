"use client";
import React, { useState } from "react";
import Collapsable from "../components/collapsable";
import ImageWithBG from "../components/image-bg";
import LiquidShape from "../components/liquid-shape";
import Link from "next/link";
import { motion } from "framer-motion";

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
        "Behsazan Mellat Company established in 1998 as a closed company to Mellat bank to provide Banking software for Mellat bank.",
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
        "Behsazan Mellat Company established in 1998 as a closed company to Mellat bank to provide Banking software for Mellat bank.",
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
        " Startrick started out in year 2018 as a professional mobile application development company that strive to provide a variety of life-changing services which a big concept of ‘Localization’.",
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
        "Erfan Salamat Medical Services Group began its activities in 2018, benefiting from two decades of experience in Erfan Saadat Abad and Erfan Niayesh Hospitals, with the aim of developing a new approach in providing medical and care services in hospitals and homes.",
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

  const descVarient = {
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

  const expVarient = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 1,
        delay: 1,
      },
    },
  };

  const cvVarient = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 1,
        delay: 1,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative w-full h-full flex min-h-screen items-center justify-center mx-auto max-w-7xl px-4 py-12 gap-10 text-center"
    >
      <LiquidShape
        color={shapeColor}
        position="-top-[300px] lg:-top-[100px] -right-[300px]"
      />

      <div className="grid grid-rows-4 grid-cols-1 lg:grid-cols-2 w-full h-full gap-4">
        {/* Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={imageVarient}
          viewport={{ once: true }}
          className="row-span-3 order-2 lg:order-1 lg:pt-8"
        >
          <ImageWithBG
            color={shapeColor}
            imageSrc="/about.svg"
            size="lg:w-[500px] lg:h-[500px] w-[300px] h-[300px]"
          />
        </motion.div>

        {/* TITLE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={titleVarient}
          viewport={{ once: true }}
          className="relative row-span-1 order-1 lg:order-2 lg:text-start z-10"
        >
          <span className="absolute bottom-0 right-0 left-0 text-bgPink font-bold [font-size:_clamp(2rem,4vw,3.5rem)]">
            About Me
          </span>
        </motion.div>

        {/* Description */}
        <div className="row-span-3 order-3 z-10">
          <div className="flex flex-col lg:gap-8 gap-3 ">
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={descVarient}
              viewport={{ once: true }}
              className="text-justify font-normal [font-size:_clamp(0.5rem,3vw,1.125rem)]"
            >
              I'm experienced FullStack Developer with 5+ years of expertise in
              Frontend and Backend Technology. I have more than 1 year of
              experience as a Backend Developer of Java. I am now seeking to
              expand my knowledge in Backend Development. Language is not a
              problem for me! I can switch easily between other languages!
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={expVarient}
              viewport={{ once: true }}
              className="flex flex-col"
            >
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
            </motion.div>
          </div>
        </div>

        {/* Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={cvVarient}
          viewport={{ once: true }}
          className="row-span-1 order-4 mt-4"
        >
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/19p_mKaXVBX-SwpUd-ZjX1_S_e3Vhe-QP/view?usp=sharing"
            className=" bg-bgPink rounded-xl py-2 px-5 text-white font-bold mx-auto text-lg shadow-lg"
          >
            View My CV
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
