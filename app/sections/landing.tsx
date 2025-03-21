import Image from "next/image";
import React from "react";
import ImageWithBG from "../components/image-bg";
import LiquidShape from "../components/liquid-shape";
import Link from "next/link";

const LandingSection = () => {
  const shapeColor = "#FFD6E8";

  return (
    <section className="relative w-full h-full flex flex-col items-center min-h-screen mx-auto max-w-7xl px-4 py-4 gap-8">
      <div className="flex w-full items-center justify-end gap-7 mt-7">
        <Link
          href="#about"
          className="text-textColor2 font-bold [font-size:_clamp(0.5rem,3vw,1rem)]"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="text-textColor2 font-bold [font-size:_clamp(0.5rem,3vw,1rem)]"
        >
          Projects
        </Link>
        <Link
          href="#contact"
          className="text-white bg-bgPink rounded-2xl px-3 py-2 font-bold [font-size:_clamp(0.5rem,3vw,1rem)]"
        >
          Contact
        </Link>
      </div>
      <LiquidShape color={shapeColor} position="-top-[180px] -left-[300px]" />
      <span className="hidden md:block absolute top-1/4 left-1/3 text-[300px] font-sans text-white uppercase drop-shadow-[0_1.2px_1.2px_rgba(244,114,182,0.5)] overflow-x-hidden z-0">
        Fatemeh
      </span>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-between w-full gap-5">
        <div className="flex flex-col z-10 text-center md:text-start">
          <div className="text-textColor [font-size:_clamp(0.5rem,3vw,1rem)]">
            Hello, its Me!
          </div>
          <div className="font-bold text-textColor2 mb-4 [font-size:_clamp(1rem,4vw,2.25rem)]">
            Fatemeh Akhlaghi
          </div>
          <div className="text-textColor [font-size:_clamp(0.5rem,3vw,1rem)]">
            I'm a
          </div>
          <div className="text-bgPink font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] [font-size:_clamp(2rem,5vw,3.5rem)]">
            FullStack Developer
          </div>
        </div>
        <ImageWithBG
          color={shapeColor}
          imageSrc="/landing.svg"
          size="md:w-[500px] md:h-[500px] w-[300px] h-[300px] order-first md:order-last"
        />
      </div>
    </section>
  );
};

export default LandingSection;
