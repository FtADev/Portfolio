"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface AccordionEntry {
  id: string;
  title: string;
  role: string;
  date: string;
  content: React.ReactNode;
}

interface AccordionProps {
  data: AccordionEntry[];
  onClick: (index: number) => void;
}

const Accordion = ({ data, onClick }: AccordionProps) => {
  const [openId, setOpenId] = useState<string | null>("collapse-1");

  const toggleAccordion = (id: string, index: number) => {
    setOpenId(openId === id ? null : id);
    onClick(index);
  };

  return (
    <div id="accordion-collapse" className=" rounded-xl overflow-hidden">
      {data.map((item, index) => (
        <div
          key={item.id}
          className={` border-gray-200 dark:border-gray-700 w-full${
            index === 0 ? "border-none" : ""
          }`}
        >
          <div id={item.id} className={`flex items-center px-5 w-full  `}>
            <div className={`w-5 h-5 rounded-full bg-[#f5d59b] `} />
            <button
              type="button"
              className={`flex items-center justify-between w-full p-5  gap-3 `}
              onClick={() => toggleAccordion(item.id, index)}
              aria-expanded={openId === item.id}
              aria-controls={item.id}
            >
              <span className="text-white font-semibold">
                {item.title}
                <span className="ps-5 font-semibold text-sm text-[#f5d59b]">
                  {item.role}
                </span>
              </span>

              <span className="font-medium text-sm text-gray-400">
                {item.date}
              </span>
              {/* Arrow Icon */}
              {/* <svg
                className={`w-3 h-3 transform ${
                  openId === item.id ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                viewBox="0 0 10 6"
                fill="none"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg> */}
            </button>
          </div>
          <motion.div
            id={item.id}
            initial={{ height: 0, opacity: 0 }}
            animate={
              openId === item.id
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden px-7"
            aria-labelledby={item.id}
          >
            <div className="p-5  border-s-4 border-[#f5d59b]">
              {item.content}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
