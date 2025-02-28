import Image from "next/image";
import React from "react";
import ProjectItem from "../components/project-item";

const ProjectSection = () => {
  const shapeColor = "#FFD6E8";

  return (
    <section className="relative w-full h-full flex items-center justify-center mx-auto max-w-7xl px-4 py-28 mt-20 gap-10">
      <svg
        className="absolute -top-[100px] -left-[300px] z-0"
        width="600px"
        height="600px"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={shapeColor}
          d="M57.2,-29.6C68.2,-13.8,67.3,12.3,55.8,26.1C44.3,40,22.1,41.6,1.8,40.6C-18.6,39.6,-37.3,36,-51.5,20.5C-65.7,5.1,-75.5,-22.1,-66.2,-36.8C-56.9,-51.5,-28.4,-53.8,-2.7,-52.3C23,-50.7,46.1,-45.3,57.2,-29.6Z"
          transform="translate(100 100)"
        />
      </svg>

      <div className="flex flex-col w-full gap-8 justify-center items-center z-10">
        <span className="text-5xl text-bgPink font-bold">My Projects</span>
        <div className="grid grid-cols-3  justify-center z-10 w-full gap-6">
          <ProjectItem
            title="Ecommerce"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProjectItem
            title="Coffee Shop"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProjectItem
            title="Pet Customer"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProjectItem
            title="Pet Shop"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProjectItem
            title="Payatam"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
          <ProjectItem
            title="Timeset"
            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
