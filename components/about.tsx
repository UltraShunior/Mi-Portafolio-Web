"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Sobre Mí</SectionHeading>
      <p className="mb-3">
        Después de 4 años de educación formal logré conseguir mi título como{" "}
        <b>Técnico Programador</b>. Finalizando mi técnicatura ingresé en una{" "}
        <b>consultora tecnológica</b> como <b>software developer </b>traineer,
        donde di mis primeros pasos en la industria tecnológica.
      </p>
      <p>
        Además, a inicios de 2022 empecé a hacer <b>desarrollos</b> de manera{" "}
        <b>freelance</b>. Hasta la actualidad continúo involucrándome en este tipo
        de proyectos, donde fortalezco mis habilidades con tecnologías web día a
        día. También, hace más 1 año, tengo el privilegió de ejercer como{" "}
        <b>profesor de Implementación de Sistemas</b> en la institución donde me formé.
      </p>
    </motion.section>
  );
}
