import React from "react";
import ServiceItem from "../components/service-item";

const ServicesSection = () => {
  return (
    <section className="relative w-full flex flex-col mx-auto max-w-7xl px-4 justify-center items-center gap-8 ">
      <span className="text-5xl text-bgPink font-bold">Services</span>
      <div className="grid grid-cols-3 z-10 justify-center items-center gap-9">
        <ServiceItem
          title="Web Development"
          description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
        <ServiceItem
          title="Mobile App Development"
          description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
        <ServiceItem
          title="Backend API Development"
          description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
      </div>
    </section>
  );
};

export default ServicesSection;
