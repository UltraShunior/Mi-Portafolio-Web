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
        Soy Nahuel Bogado, y llevo más de dos años construyendo mi carrera en el{" "}
        <b>desarrollo de software</b>. Comencé trabajando como <b>freelancer</b>
        , creando soluciones con HTML, CSS, PHP y JavaScript. {" "}
        En 2022, di el salto a la <b> industria tecnológica</b> al unirme a una consultora como <b>Desarrollador de Software.</b> {" "}
        Además, tras graduarme como <b>Técnico Programador</b>, a principios de 2023 comencé a enseñar en la misma institución donde me formé, compartiendo mi pasión por la programación con los estudiantes.
      </p>
      <p>
      En la actualidad, mi especialización se enfoca en el desarrollo de interfaces de usuario dinámicas y responsivas con <b>Next.js</b> y <b>Tailwind CSS</b>  para el frontend, así como en la creación de aplicaciones de servidor robustas utilizando <b>Node.js</b> y <b>Express</b> para el backend. Tengo competencia en el manejo de bases de datos SQL, trabajando tanto con <b>PostgreSQL</b> como con <b>MySQL</b>. Continúo ampliando mis habilidades técnicas y estoy en proceso de capacitación en <b>MongoDB</b>, <b>AWS</b>, <b>Jest</b>, <b>Cypress</b>, <b>Playwright</b> y prácticas de <b>Integración y Entrega Continuas (CI/CD)</b>, lo que fortalece mi perfil como desarrollador Full Stack.
      </p> 
    </motion.section>
  );
}
