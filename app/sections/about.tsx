import Image from "next/image";
import React from "react";
import Collapsable from "../components/collapsable";
import SocialComponent from "../components/social-components";

const AboutSection = () => {
  const shapeColor = "#FFD6E8";

  return (
    <section className="relative w-full h-full flex items-center justify-center mx-auto max-w-7xl px-4 py-28 mt-20 gap-10">
      <svg
        className="absolute -top-[100px] -right-[300px] z-0"
        width="500px"
        height="500px"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={shapeColor}
          d="M57.2,-29.6C68.2,-13.8,67.3,12.3,55.8,26.1C44.3,40,22.1,41.6,1.8,40.6C-18.6,39.6,-37.3,36,-51.5,20.5C-65.7,5.1,-75.5,-22.1,-66.2,-36.8C-56.9,-51.5,-28.4,-53.8,-2.7,-52.3C23,-50.7,46.1,-45.3,57.2,-29.6Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="flex flex-col h-screen">
        <div className="relative w-[500px] h-[500px]">
          <svg
            className="absolute right-0"
            width="500px"
            height="500px"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill={shapeColor}
              d="M22.7,-25.6C35.4,-21.9,56.1,-23.4,65.4,-16.2C74.8,-8.9,72.8,7.1,63.4,15.9C54,24.7,37.2,26.3,25.4,29.4C13.6,32.5,6.8,36.9,-2.1,39.8C-10.9,42.6,-21.8,43.8,-35.5,41.4C-49.1,38.9,-65.5,32.8,-73.1,21C-80.7,9.3,-79.5,-8.1,-74.8,-24.8C-70,-41.5,-61.7,-57.5,-48.7,-61.1C-35.6,-64.8,-17.8,-56,-6.4,-47.2C4.9,-38.3,9.9,-29.4,22.7,-25.6Z"
              transform="translate(100 100)"
            />
          </svg>
          <Image
            className="absolute w-[500px] h-[500px] right-0"
            src="/about.svg"
            alt="about"
            width={100}
            height={100}
          />
        </div>
        <div className="flex justify-between w-[300px] mx-auto mb-8">
          <SocialComponent url="akhlaghi.fatemeh@gmail.com" icon="" />
          <SocialComponent url="linkedin.com/in/fatemeh-akhlaghi" icon="" />
          <SocialComponent url="github.com/ftadev" icon="" />
          <SocialComponent url="t.me/ftadev" icon="" />
        </div>
        <button className="bg-bgPink rounded-xl py-2 w-[200px] text-white font-bold mx-auto">
          Download My CV
        </button>
      </div>

      <div className="flex flex-col w-2/3 gap-8 z-10 h-screen">
        <span className="text-5xl text-bgPink font-bold">About Me</span>
        <p className="text-lg text-justify font-normal">
          I'm experienced FullStack Developer with 5+ years of expertise in
          Frontend and Backend Technology. I have more than 1 year of experience
          as a Backend Developer of Java. I am now seeking to expand my
          knowledge in Backend Development. Language is not a problem for me! I
          can switch easily between other languages!
        </p>
        <div className="flex flex-col gap-2">
          <Collapsable
            title="Behsazan Mellat"
            role="Backend Developer"
            date="2024-Present"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            skills={[
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
            ]}
          />
          <Collapsable
            title="Behsazan Mellat"
            role="Frontend Developer"
            date="2024-Present"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            skills={[
              "TypeScript",
              "Nextjs",
              "Reactjs",
              "Tailwind",
              "Prisma",
              "Axios",
              "Zustand",
              "Formik",
              "Yup",
            ]}
          />
          <Collapsable
            title="StarTrick"
            role="Flutter Developer"
            date="2022-2023"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            skills={[
              "Flutter",
              "Flutter Web",
              "Riverpod",
              "Clean Architecture",
              "Dio",
              "Jira",
              "Scrum",
              "Git",
            ]}
          />
          <Collapsable
            title="Erfan Salamat"
            role="Flutter Developer"
            date="2020-2021"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            skills={[
              "Flutter",
              "Flutter Web",
              "Riverpod",
              "CI/CD",
              "Docker",
              "Jira",
              "Scrum",
              "Git",
            ]}
          />
          <Collapsable
            title="Exceptional Dev"
            role="Software Developer"
            date="2017-2020"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
            skills={[
              "Android Development",
              "Flutter",
              "IoT",
              "Linux",
              "Python",
              "Git",
              "MySQL",
              "MongoDB",
            ]}
            isLast={true}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
