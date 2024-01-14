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
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>¡Hola!👋</SectionHeading>
      <p className="mb-3">
        Mi nombre es Nahuel Bogado, soy <b>Técnico Programador</b>. {" "}
        Tengo experiencia trabajando en una <b>consultora tecnológica</b> como{" "}
        <b>software developer </b>, acá fue donde di mis primeros pasos en la industria
        tecnológica.
      </p>
      <p>
        Además, a inicios de 2022 empecé a hacer <b>desarrollos</b> de manera{" "}
        <b>freelance</b>. Hasta la actualidad continúo involucrándome en este
        tipo de proyectos, donde fortalezco mis habilidades con tecnologías web
        día a día. Actualmente, tengo el privilegió de ejercer como{" "}
        <b>profesor de Implementación de Sistemas</b>.
      </p>
    </motion.section>
  );
}
