import Image from "next/image";
import React from "react";

const AboutPage = () => {
  const shapeColor = "#FFD6E8";

  return (
    <section className="relative w-full h-full flex items-center justify-center mx-auto max-w-7xl px-4 py-28 mt-20 gap-10">
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
      <div className="flex flex-col w-2/3 gap-8">
        <span className="text-5xl text-bgPink font-bold">About Me</span>
        <p className="text-lg text-justify font-normal">
          Hello and Welcome to my website! I am Fatemeh Akhlaghi, and I'm a
          seasoned Flutter developer, with over 4 years of experience in
          application development. Also I have a background in Android
          development (using both Java and Kotlin). Over the past 3 years, I
          have become a big fan of Flutter and have honed my skills in this
          framework. I have worked in various teams throughout my career,
          including Exceptional Dev for 3 years, Erfan Salamat Health Services
          Group, and the last one is Startrick, a Malaysian company. During my
          time at Exceptional Dev, I had the opportunity to work on a diverse
          range of projects including IoT and smart home projects, sport
          reservation applications, psychology applications, and more. This
          experience has given me a broad perspective on the industry and has
          helped me develop a keen eye for detail. After that, I worked for
          Erfan Salamat where I gained valuable experience working in health
          services and hospitals. And my last experience was working remotely as
          a Flutter Developer for Startrick in Malaysia where we were developing
          pet shop services. My expertise lies in developing high-quality
          applications that are user-friendly and visually appealing. I am
          passionate about staying up-to-date with the latest technologies and
          trends in the industry to ensure that my work is always cutting-edge.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
