import Link from "next/link";
import React from "react";
import { DirectionAwareHover } from "./ui/card";

interface ProjectProps {
  title: string;
  description: string;
  src: string;
  link: string;
}

const ProjectCard = ({ title, description, link, src }: ProjectProps) => {
  return (
    <Link href={link} className="">
      <DirectionAwareHover imageUrl={src}>
        <p className="font-bold text-xl">{title}</p>
        <p className="font-normal text-sm">{description}</p>
      </DirectionAwareHover>
    </Link>
  );
};

export default ProjectCard;
