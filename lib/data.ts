import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import mibenditoImg from "@/public/mibenditoImg.png";
import tasksmngrImg from "@/public/tasks-mngr.png";

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
    title: "Profesor de Implementación de Sistemas",
    location: "E.E.S.T N° 5",
    description:
      'Guío y acompaño a más de 40 estudiantes a desarrollar sus habilidades y competencias. Esto puede incluir habilidades técnicas, como estructuras de datos y algoritmos, o habilidades blandas, como la resolución de problemas o el trabajo en equipo.',
    icon: React.createElement(LuGraduationCap), 
    date: "2023 - presente",
  },
  {
    title: "Software Developer Traineer",
    location: "MG Intelligence",
    description:
      "Participé en el desarrollo de aplicaciones web y me encargue de la creacion de nuevas funciones para un software de gestión de inventario.",
    icon: React.createElement(CgWorkAlt),
    date: "Agosto - Diciembre 2022",
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
      "Mi primera página web como freelance. Un sitio web de una psicóloga que ofrece sus servicios de manera online.",
    tags: ["HTML", "CSS", "MySQL", "PHP"],
    url: "https://mibenditoadolescente.com/",
    imageUrl: mibenditoImg,
  },
  {
    title: "TaskMaster",
    description:
      "Una herramienta de gestión de tareas creada con el stack PERN. Además, cuenta con un sistema de autenticación y autorización de usuarios.",
    tags: ["PostgreSQL", "Express", "React", "Node.js", "TypeScript"],
    url: "https://tasks-mngr-front.onrender.com/",
    imageUrl: tasksmngrImg,
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
  "JAVA",
  "Git",
  "C++",
] as const;
