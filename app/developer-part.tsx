import React from "react";
import { AnimatedText } from "./components/ui/animated-text";

interface DeveloperProps {
  title: string;
  color: string;
}

const DeveloperPart = ({ title, color }: DeveloperProps) => {
  return (
    <div
      className={`flex flex-col w-1/2 justify-start pt-72 ${color} hover:w-2/3 transition-all duration-1000`}
    >
      <div className="flex flex-col mx-auto text-center gap-5">
        <span className="text-white text-2xl">As a</span>
        <span className="text-white text-5xl">
          <AnimatedText text={title} />
        </span>
        <button className="transition duration-200 p-[3px] relative w-60 mx-auto mt-14 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2 bg-[#50586C] rounded-[6px] relative text-white hover:bg-transparent">
            Explore My Projects
          </div>
        </button>
      </div>
    </div>
  );
};

export default DeveloperPart;
