"use client";
import { ProjectInfo } from "@/app/components/project-info";
import React from "react";

export default function ProjectPage() {
  return (
    <ProjectInfo
      title="Timeset"
      description="A sports reservation application in collaboration with Tehran Municipality. This application allows users to reserve sports facilities at a complex and purchase tickets online, making it more convenient for them to access the facilities they need."
      skills={[]}
      photos={pictures}
    />
  );
}
const pictures = [
  {
    src: "/timeset/1.png",
  },
  {
    src: "/timeset/2.png",
  },
  {
    src: "/timeset/3.png",
  },
  {
    src: "/timeset/4.png",
  },
  {
    src: "/timeset/5.png",
  },
  {
    src: "/timeset/6.png",
  },
  {
    src: "/timeset/7.png",
  },
  {
    src: "/timeset/8.png",
  },
  {
    src: "/timeset/9.png",
  },
  {
    src: "/timeset/10.png",
  },
  {
    src: "/timeset/11.png",
  },
  {
    src: "/timeset/12.png",
  },
  {
    src: "/timeset/4.png",
  },
  {
    src: "/timeset/3.png",
  },
  
  {
    src: "/timeset/5.png",
  },
];
