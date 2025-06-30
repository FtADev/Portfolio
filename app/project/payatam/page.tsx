"use client";
import { ProjectInfo } from "@/app/components/project-info";
import React from "react";

export default function ProjectPage() {
  return (
    <ProjectInfo
      title="Payatam"
      description="An innovative application that facilitates finding partners for various activities such as sports, education, or renting office. This app allows users to easily request and connect with others who share similar interests and goals. For instance, users can request a chess partner or find classmates for a math class with just a few clicks."
      skills={[]}
      photos={pictures}
    />
  );
}
const pictures = [
  {
    src: "/payatam/1.png",
  },
  {
    src: "/payatam/2.png",
  },
  {
    src: "/payatam/3.png",
  },
  {
    src: "/payatam/4.png",
  },
  {
    src: "/payatam/5.png",
  },
  {
    src: "/payatam/6.png",
  },
  {
    src: "/payatam/7.png",
  },
  {
    src: "/payatam/8.png",
  },
  {
    src: "/payatam/9.png",
  },
  {
    src: "/payatam/10.png",
  },
  {
    src: "/payatam/11.png",
  },
  {
    src: "/payatam/12.png",
  },
  {
    src: "/payatam/13.png",
  },
  {
    src: "/payatam/14.png",
  },
  {
    src: "/payatam/15.png",
  },
  {
    src: "/payatam/16.png",
  },
];
