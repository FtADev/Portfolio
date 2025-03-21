import { usePathname } from "next/navigation";
import React from "react";

interface CollapsableProps {
  title: string;
  role: string;
  date: string;
  description: string;
  url?: string;
  index: number;
  selectedIndex: number;
  skills: string[];
  onClick: (index: number) => void;
}

const Collapsable = ({
  title,
  role,
  date,
  description,
  url,
  index,
  selectedIndex,
  skills,
  onClick,
}: CollapsableProps) => {
  const pathName = usePathname();

  return (
    <>
      <button
        className="flex items-center justify-between"
        onClick={() => {
          onClick(index);
        }}
      >
        <div className="flex items-center hover:bg-slate-100 md:space-x-3 space-x-1 md:px-6 px-2 py-2 rounded-md w-full [font-size:_clamp(0.5rem,3vw,1.125rem)]">
          <div className="rounded-full bg-bgPink aspect-square md:w-5 w-3"></div>
          <span className="font-bold">{title}</span>
          <span className="font-bold text-bgPink">{role}</span>
          <span className="[font-size:_clamp(0.5rem,2vw,0.8rem)] italic">
            ({date})
          </span>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:mx-8 mx-3
          ${index == selectedIndex ? "max-h-screen" : "max-h-0"}`}
      >
        <div
          className={`flex flex-col items-start py-2 px-6 ${
            index != 4 && "border-l-2 border-bgPink"
          }`}
        >
          <div className="[font-size:_clamp(0.5rem,2vw,0.8rem)]">
            {description}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {skills.map((skill, index) => {
              return (
                <div
                  key={index}
                  className="flex border border-bgPink bg-white rounded-full px-2 py-1 [font-size:_clamp(0.4rem,1.5vw,0.8rem)] shadow-md"
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Collapsable;
