"use client";

import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface CollapsableProps {
  title: string;
  role: string;
  date: string;
  description: string;
  url?: string;
  isLast?: boolean;
  skills: string[];
}

const Collapsable = ({
  title,
  role,
  date,
  description,
  url,
  isLast = false,
  skills,
}: CollapsableProps) => {
  const [isOpen, setOpen] = useState(false);
  const pathName = usePathname();


  return (
    <>
      <button
        className="flex items-center justify-between space-x-3 px-6"
        onClick={() => setOpen(!isOpen)}
      >
        <div className="flex items-center space-x-3 ">
          <div className="rounded-full bg-bgPink w-5 h-5"></div>
          <span className="font-bold">{title}</span>
          <span className="font-bold text-bgPink">{role}</span>
          <span className="text-sm italic">({date})</span>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out mx-8
          ${isOpen ? "max-h-screen " : "max-h-0"}`}
      >
        <div
          className={`flex flex-col items-start py-1 px-8 space-y-2 ${
            !isLast && "border-l-2 border-bgPink"
          }`}
        >
          <div className="">{description}</div>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => {
              return (
                <div className="flex border border-bgPink bg-white rounded-full px-2 py-1 text-sm">
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
