import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Developer Traineer",
    location: "MG Intelligence",
    description:
      "Durante un periodo de 5 meses. Realice prácticas profesionalizantes en una consultora tecnológica.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Técnico Programador",
    location: "Buenos Aires, Argentina",
    description:
      "Luego de 4 años especializándome en el desarrollo de sistema informáticos, logre obtener el título de técnico programador.",
    icon: React.createElement(LuGraduationCap), 
    date: "2022",
  },
  {
    title: "Web Developer Freelance",
    location: "Teletrabajo",
    description:
      "Desde antes de obtener mi título comencé a trabajar creando sitios web. Hasta el día de hoy sigo implicándome en proyectos de este tipo.",
    icon: React.createElement(FaReact),
    date: "2022 - presente",
  },
] as const;

export const projectsData = [
  {
    title: "Nextflix",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda non, molestias quod quisquam ipsam ad consectetur perspiciatis?",
    tags: ["React", "Next.js", "PostgreSQLñ", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "App Expense manager",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Gestor de inventario",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MySQL",
  "PostgreSQL",
  "Python",
  "PHP",
  "C#",
  "JAVA",
  "Git",
  "C++",
] as const;
