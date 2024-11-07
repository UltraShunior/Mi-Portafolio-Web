import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/ReactCart.webp";
import tasksmngrImg from "@/public/TaskMasterImg.webp";

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Sobre mí",
    hash: "#about",
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
      "Guío a más de 50 estudiantes en el desarrollo de habilidades en algoritmos de programación y desarrollo de software.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - presente",
  },
  {
    title: "Software Developer Trainee",
    location: "MG Intelligence",
    description:
      "Participé en el desarrollo de aplicaciones web con Node.js, Express, Vue y Vuetify. Implementé nuevas funciones en un ERP usando AdvPL y PostgreSQL.",
    icon: React.createElement(CgWorkAlt),
    date: "Julio - Diciembre 2022",
  },
  {
    title: "Web Developer Freelance",
    location: "Autónomo",
    description:
      "Desarrollé diversos proyectos web, sistemas ERP, e-commerce y plataformas de aprendizaje online.",
    icon: React.createElement(FaReact),
    date: "Mayo 2022 - presente",
  },
] as const;

export const projectsData = [
  {
    title: "Proyecto1",
    description:
      "Una herramienta de gestión de tareas creada con el stack PERN. Además, cuenta con un sistema de autenticación y autorización de usuarios.",
    tags: ["PostgreSQL", "Express", "React", "Node.js", "TypeScript"],
    url: "https://github.com/UltraShunior/tasks-mngr_with-auth",
    imageUrl: tasksmngrImg,
  },
  {
    title: "Proyecto2",
    description:
      "Una aplicación web de carrito de compras creada con React y Tailwind CSS. Cuenta con un carrito de compras persistente.",
    tags: ["HTML", "CSS", "JavaScript", "React", "JSON"],
    url: "https://github.com/UltraShunior/React-Cart",
    imageUrl: corpcommentImg,
  },
  {
    title: "Proyecto3",
    description:
      "Una herramienta de gestión de tareas creada con el stack PERN. Además, cuenta con un sistema de autenticación y autorización de usuarios.",
    tags: ["PHP", "MySQLP", "CSS", "JavaScript", "Bootstrap", ],
    url: "https://github.com/UltraShunior/tasks-mngr_with-auth",
    imageUrl: tasksmngrImg,
  },
  {
    title: "Proyecto4",
    description:
      "Una aplicación web de carrito de compras creada con React y Tailwind CSS. Cuenta con un carrito de compras persistente.",
    tags: ["Next.js", "HTML", "Node", "Express", "TypeScript"],
    url: "https://github.com/UltraShunior/React-Cart",
    imageUrl: corpcommentImg,
  },
  {
    title: "Proyecto5",
    description:
      "Una herramienta de gestión de tareas creada con el stack PERN. Además, cuenta con un sistema de autenticación y autorización de usuarios.",
    tags: ["PostgreSQL", "Express", "React", "Node.js", "TypeScript"],
    url: "https://github.com/UltraShunior/tasks-mngr_with-auth",
    imageUrl: tasksmngrImg,
  },
  {
    title: "Proyecto6",
    description:
      "Una aplicación web de carrito de compras creada con React y Tailwind CSS. Cuenta con un carrito de compras persistente.",
    tags: ["CSS", "JavaScript", "React", "JSON"],
    url: "https://github.com/UltraShunior/React-Cart",
    imageUrl: corpcommentImg,
  },
  {
    title: "TaskMaster",
    description:
      "Una herramienta de gestión de tareas creada con el stack PERN. Además, cuenta con un sistema de autenticación y autorización de usuarios.",
    tags: ["MySQL", "Express", "React", "Node.js", "TypeScript"],
    url: "https://github.com/UltraShunior/tasks-mngr_with-auth",
    imageUrl: tasksmngrImg,
  },
  {
    title: "React Cart🛒",
    description:
      "Una aplicación web de carrito de compras creada con React y Tailwind CSS. Cuenta con un carrito de compras persistente.",
    tags: ["PHP", "CSS", "JavaScript", "React", "JSON"],
    url: "https://github.com/UltraShunior/React-Cart",
    imageUrl: corpcommentImg,
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
  "PostgreSQL",
  "MySQL",
  "MariaDB",
  "Python",
  "PHP",
  "JAVA",
  "Git",
  "GitHub",
  "GitLab",
  "C++",
] as const;
