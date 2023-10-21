import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import card from "@/public/Card.webp";
import ecom from "@/public/ecom.webp";
import socialMedia from "@/public/Social.webp";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Card Authentication",
    description:
      "Card Authentication UI that verifies and authenticates card details.",
    tags: ["React", "CSS", "Nodejs"],
    image: card,
  },
  {
    title: "Social Media Dashboard",
    description: "Social Media dashboard to check multiple profile analytics.",
    tags: ["HTML", "SCSS", "GULP", "NODEJS", "Stripe"],
    image: socialMedia,
  },
  {
    title: "Ecommerce",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Tailwind", "Node", "Express", "MongoDB", "Redux Toolkit"],
    image: ecom,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux Toolkit",
  "Express",
  "PostgreSQL",
  "Python",
  "C++",
] as const;
