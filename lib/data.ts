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
    name: "Sobre mí",
    hash: "#about",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Tecnologías",
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
      'Guío y acompaño a más de 45 estudiantes del ultimo año a desarrollar sus habilidades y competencias. Esto puede incluir implementación de algoritmos o estructuras de datos, así como el pensamiento computacional y la resolución de problemas en equipo.',
    icon: React.createElement(LuGraduationCap),
    date: "2023 - presente",
  },
  {
    title: "Software Developer Traineer",
    location: "MG Intelligence",
    description:
      "Desarrollo de aplicaciones web: Participé en el desarrollo de aplicaciones web utilizando tecnologías como Node.js, Express, Vue y Vuetify. Creación de nuevas funciones de un ERP: Me encargué de la creación de nuevas funciones de un ERP utilizando AdvPL y Postgress, ayudando así a las empresas a gestionar sus procesos financieros, de producción, de ventas, de inventario y de recursos humanos.",
    icon: React.createElement(CgWorkAlt),
    date: "Julio - Diciembre 2022",
  },
  {
    title: "Web Developer Freelance",
    location: "Autónomo",
    description:
      "Desarrollé más de varios proyectos de diversa índole, incluyendo aplicaciones web y sistemas ERP, e-commerce y plataformas de aprendizaje online",
    icon: React.createElement(FaReact),
    date: "Mayo 2022 - presente",
  },
] as const;

export const projectsData = [
  
  {
    title: "TaskMaster",
    description:
      "Una herramienta de gestión de tareas creada con el stack PERN. Además, cuenta con un sistema de autenticación y autorización de usuarios.",
    tags: ["PostgreSQL", "Express", "React", "Node.js", "TypeScript"],
    url: "https://github.com/UltraShunior/tasks-mngr_with-auth",
    imageUrl: tasksmngrImg,
  },
  {
    title: "React Cart🛒",
    description:
      "Una aplicación web de carrito de compras creada con React y Tailwind CSS. Cuenta con un carrito de compras persistente.",
    tags: ["HTML", "CSS", "JavaScript", "React", "JSON"],
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
