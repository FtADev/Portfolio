"use client";
import { ProjectInfo } from "@/app/components/project-info";
import React from "react";

export default function ProjectPage() {
  return (
    <ProjectInfo
      title="Payatam"
      description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
