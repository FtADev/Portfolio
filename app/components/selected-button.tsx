import React from "react";

interface SelectedButtonProps {
  index: number;
  title: string;
  onClick: (index: number) => void;
  selectedColor: string;
  selectedIndex: number;
}

const SelectedButton = ({
  title,
  onClick,
  selectedColor,
  index,
  selectedIndex,
}: SelectedButtonProps) => {
  return (
    <button
      className={`[font-size:_clamp(0.5rem,3vw,1.5rem)] font-bold ${
        selectedIndex === index && selectedColor
      } ${
        selectedIndex === index ? "text-white" : "text-black"
      }  md:px-5 md:py-2 px-3 py-1 rounded-xl`}
      onClick={() => {
        onClick(index);
      }}
    >
      {title}
    </button>
  );
};

export default SelectedButton;
