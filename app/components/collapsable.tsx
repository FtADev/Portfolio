import React from "react";

interface CollapsableProps {
  title: string;
  role: string;
  date: string;
  description: string;
  // url?: string;
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
  // url,
  index,
  selectedIndex,
  skills,
  onClick,
}: CollapsableProps) => {
  return (
    <>
      <button
        className="flex items-center justify-between"
        onClick={() => {
          onClick(index);
        }}
      >
        <div className="flex items-center hover:bg-pink-100/50 md:space-x-3 space-x-1 md:px-6 px-2 py-2 rounded-md w-full [font-size:_clamp(0.5rem,3vw,1.125rem)]">
          <div className="rounded-full bg-bgPink aspect-square md:w-5 w-3"></div>
          <span className="font-bold">{title}</span>
          <span className="font-bold text-bgPink">{role}</span>
          <span className="[font-size:_clamp(0.5rem,2vw,0.8rem)] italic">
            ({date})
          </span>
        </div>
      </button>

      {/* <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          index == selectedIndex
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className=""
      > */}
        <div
          // className={`overflow-hidden transition-all duration-300 ease-in-out md:mx-8 mx-3
          className={`overflow-hidden md:mx-8 mx-3
          ${index == selectedIndex ? "max-h-screen" : "max-h-0"}`}
        >
          <div
            className={`flex flex-col items-start py-2 px-6 ${
              index != 4 && "border-l-2 border-bgPink"
            }`}
          >
            <div className="[font-size:_clamp(0.5rem,2.5vw,0.8rem)] text-start">
              {description}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => {
                return (
                  <div
                    key={index}
                    className="flex border border-bgPink bg-white rounded-full px-2 py-1 [font-size:_clamp(0.4rem,2.5vw,0.8rem)] shadow-md"
                  >
                    {skill}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      {/* </motion.div> */}
    </>
  );
};

export default Collapsable;
