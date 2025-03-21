"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";

export interface ProjectModel {
  src: string
}

interface ProjectProps {
  title: string;
  description: string;
  skills: string[];
  photos: ProjectModel[];
}

export const ProjectInfo = ({
  title,
  description,
  skills,
  photos
}: ProjectProps) => {
  const firstRow = photos.slice(0, 5);
  const secondRow = photos.slice(5, 10);
  const thirdRow = photos.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 0]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header title={title} description={description} skills={skills}/>
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-40">
          {firstRow.map((product, index) => (
            <ProductCard
              src={product.src}
              translate={translateX}
              key={index}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-40 space-x-20 ">
          {secondRow.map((product, index) => (
            <ProductCard
              src={product.src}
              translate={translateXReverse}
              key={index}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product, index) => (
            <ProductCard
              src={product.src}
              translate={translateX}
              key={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};


interface HeaderProps {
  title: string;
  description: string;
  skills: string[];
}

export const Header = ({
  title,
  description,
  skills
}: HeaderProps) => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-bgPink">
        {title}
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        {description}
      </p>
    </div>
  );
};

interface PhotocardProps {
  src: string
  translate: MotionValue<number>
  }

export const ProductCard = ({
  src,
   translate
}: PhotocardProps) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={src}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      {/* <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      > */}
      <Image
        src={src}
        height="1000"
        width="1000"
        className="object-cover object-left-top absolute inset-0 w-[350px] h-[600px] rounded-3xl"
        alt="photo"
      />
      {/* </Link> */}
    </motion.div>
  );
};
