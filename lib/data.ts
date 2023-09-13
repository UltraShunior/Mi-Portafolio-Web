import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projectos",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Profesor de programación",
    location: "E.E.S.T N° 5",
    description:
      'Aporto a más de 40 estudiantes a desarrollar sus habilidades y competencias. Esto puede incluir habilidades técnicas, como estructuras de datos y algoritmos, o habilidades blandas, como la resolución de problemas o el trabajo en equipo.',
    icon: React.createElement(LuGraduationCap), 
    date: "2023 - presente",
  },
  {
    title: "Software Developer Traineer",
    location: "MG Intelligence",
    description:
      "Participé en el desarrollo de aplicaciones web y me encargue de la creacion de nuevas funciones para un software de gestión de inventario.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Web Developer Freelance",
    location: "Autónomo",
    description:
      "Desarrollé más de 6 proyectos de diversa índole, incluyendo sitios web, aplicaciones web y sistemas de gestión.",
    icon: React.createElement(FaReact),
    date: "2022 - presente",
  },
] as const;

export const projectsData = [
  {
    title: "Nextflix",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda non, molestias quod quisquam ipsam ad consectetur perspiciatis?",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "Prisma"],
    url: "#",
    imageUrl: corpcommentImg,
  },
  {
    title: "App Expense manager",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    url: "#",
    imageUrl: rmtdevImg,
  },
  {
    title: "Gestor de inventario",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    url: "#",
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
