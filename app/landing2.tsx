import React from "react";
import { StarsBackground } from "./components/ui/stars-background";
import { ShootingStars } from "./components/ui/shooting-stars";
import { FlipWords } from "./components/ui/flip-words";

const LandingPage2 = () => {
  const words = ["Back-End", "Front-End", "Full-Stack"];

  return (
    <div className="flex w-screen h-screen bg-slate-950">
      <StarsBackground />
      <ShootingStars />
      <div className="flex flex-col justify-center items-center text-center text-white mx-auto my-auto gap-20">
        <span className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">Hello! It's me!</span>
        <span className="text-7xl italic bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          {"Fatemeh Akhlaghi".toUpperCase()}
        </span>
        <div className="text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          As a
          <FlipWords words={words} />
          Developer
        </div>
      </div>
    </div>
  );
};

export default LandingPage2;
