"use client";
import { ProjectInfo } from "@/app/components/project-info";
import React from "react";

export default function ProjectPage() {
  return (
    <ProjectInfo
      title="Pet Customer"
      description="An application for pet owners that allows them to access pet shops services such as grooming and reserving a room for their pets.\n The application also includes a feature where each pet has its own profile, and pet owners can manage a list of their pets and submit requests for each one whenever they want. Shop owners can answer these requests through the Shop Website."
      skills={[]}
      photos={pictures}
    />
  );
}
const pictures = [
  {
    src: "/pet-customer/1.png",
  },
  {
    src: "/pet-customer/2.png",
  },
  {
    src: "/pet-customer/3.png",
  },
  {
    src: "/pet-customer/4.png",
  },
  {
    src: "/pet-customer/5.png",
  },
  {
    src: "/pet-customer/6.png",
  },
  {
    src: "/pet-customer/7.png",
  },
  {
    src: "/pet-customer/8.png",
  },
  {
    src: "/pet-customer/9.png",
  },
  {
    src: "/pet-customer/10.png",
  },
  {
    src: "/pet-customer/11.png",
  },
  {
    src: "/pet-customer/12.png",
  },
  {
    src: "/pet-customer/13.png",
  },
  {
    src: "/pet-customer/14.png",
  },
  {
    src: "/pet-customer/15.png",
  },
  {
    src: "/pet-customer/16.png",
  },
  {
    src: "/pet-customer/17.png",
  },
  {
    src: "/pet-customer/18.png",
  },
];
