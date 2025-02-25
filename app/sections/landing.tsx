import Image from "next/image";
import React from "react";


const LandingPage = () => {
  const shapeColor = "#FFD6E8";
  return (
    <section className="relative w-full h-full flex flex-col items-center justify-center mx-auto max-w-7xl px-4 py-4">
      <div className="flex w-full justify-end gap-7 mt-7">
        <span className="text-xl text-textColor2 font-bold">About</span>
        <span className="text-xl text-textColor2 font-bold">Projects</span>
        <span className="text-xl text-textColor2 font-bold">Contact</span>
      </div>
      <svg
        className="absolute -top-[180px] -left-[300px]"
        width="500px"
        height="500px"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={shapeColor}
          d="M57.2,-29.6C68.2,-13.8,67.3,12.3,55.8,26.1C44.3,40,22.1,41.6,1.8,40.6C-18.6,39.6,-37.3,36,-51.5,20.5C-65.7,5.1,-75.5,-22.1,-66.2,-36.8C-56.9,-51.5,-28.4,-53.8,-2.7,-52.3C23,-50.7,46.1,-45.3,57.2,-29.6Z"
          transform="translate(100 100)"
        />
      </svg>
      <div className="flex items-center justify-between w-full h-full">
        <div className="flex flex-col">
          <div className="text-xl text-textColor">Hello, its Me!</div>
          <div className="text-4xl font-bold text-textColor2 mb-4">
            Fatemeh Akhlaghi
          </div>
          <div className="text-xl text-textColor">I'm a</div>
          <div className="text-6xl text-bgPink font-bold">
            FullStack Developer
          </div>
        </div>
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
            src="/girl.svg"
            alt="girl"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
