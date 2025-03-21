import Image from "next/image";
import React from "react";

interface ImageProps {
    imageSrc: string
    size: string
    color: string
}

const ImageWithBG = ({ imageSrc, size, color }: ImageProps) => {

  return (
    <div className={`relative ${size} mx-auto`}>
      <svg
        className="absolute right-0"
        width={size}
        height={size}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={color}
          d="M22.7,-25.6C35.4,-21.9,56.1,-23.4,65.4,-16.2C74.8,-8.9,72.8,7.1,63.4,15.9C54,24.7,37.2,26.3,25.4,29.4C13.6,32.5,6.8,36.9,-2.1,39.8C-10.9,42.6,-21.8,43.8,-35.5,41.4C-49.1,38.9,-65.5,32.8,-73.1,21C-80.7,9.3,-79.5,-8.1,-74.8,-24.8C-70,-41.5,-61.7,-57.5,-48.7,-61.1C-35.6,-64.8,-17.8,-56,-6.4,-47.2C4.9,-38.3,9.9,-29.4,22.7,-25.6Z"
          transform="translate(100 100)"
        />
      </svg>
      <Image
        className={`absolute ${size} right-0`}
        src={imageSrc}
        alt="img"
        width={100}
        height={100}
      />
    </div>
  );
};

export default ImageWithBG;
