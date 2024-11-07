"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre mí");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[55rem] z-10 text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre mí🧑‍💻</SectionHeading>
      <p className="mb-3">
      Soy Nahuel Bogado, un <b>Desarrollador de Software apasionado</b> por crear soluciones web innovadoras. Con más de 2 años de experiencia, he trabajado en <b>consultoras tecnológicas</b> y actualmente formo parte de un equipo de freelancers.
      </p>
      <p className="mb-3">
      En 2022, me gradué como Técnico Programador y comencé a impartir clases, compartiendo mi expertise con futuros profesionales de TI. Mi especialización se enfoca en el desarrollo de aplicaciones web con Next.js, Tailwind CSS, Node.js y Express. Además, manejo bases de datos SQL como PostgreSQL y MySQL.
      </p> 
      <p>
      Constantemente me capacito en tecnologías emergentes como AWS, Jest, Cypress y prácticas de CI/CD, lo que me posiciona como un desarrollador Full Stack versátil y con un sólido perfil técnico. Mi objetivo es <b>seguir creciendo profesionalmente</b> y <b>aportar valor a proyectos</b> desafiantes.
      </p>
    </motion.section>
  );
}
