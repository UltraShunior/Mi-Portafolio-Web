"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import svgIllustration from "@/public/developer-dark.3f07bd13.svg";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import logo from "@/public/logoso.png";
import logoDark from "@/public/logosoDark.png";

export default function Intro() {
  const { ref } = useSectionInView("Inicio", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id="home"
      className="z-20 my-[4rem] w-[80%] min-h-[70vh] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="grid grid-cols-2 m-auto min-h-[32rem] max-lg:grid-cols-1">
        <div className="max-w-[90%] m-auto">
          <motion.h1
            className="mt-4 px-4 text-foreground-800 font-medium !leading-[1.5] sm:text-4xl hidden"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Nahuel <span className="text-primary-500 dark:text-secondary-700">Bogado</span>
          </motion.h1>
          <motion.div
            className="flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Image src={theme=="light"?logo:logoDark} alt="Logo de Nahuel Bogado" width={300} height={300} />
          </motion.div>
          <motion.p
            className="mb-[2rem] px-4 text-foreground-800 font-semibold sm:text-2xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Construyendo soluciones tecnológicas de forma inteligente
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <a
              className="bg-white p-4 text-foreground-800 hover:text-black flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/nahuebogado/"
              title="LinkedIn de Nahuel"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-white p-4 text-foreground-800 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-black active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://github.com/ultrashunior/"
              title="Github de Nahuel"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
            <a
              className="group bg-white px-7 py-3 flex items-center font-bold rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="/CV Nahuel Bogado.pdf"
              title="Descargar CV de Nahuel"
              target="_blank"
              download
            >
              CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
            <Link
              href="#contact"
              className="group bg-foreground-800 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-foreground/80 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/80 dark:text-black dark:hover:bg-white"
              title="Ir a la sección de contacto"
              onClick={() => {
                setActiveSection("Contacto");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contactame{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="min-w-[100%] min-h-[100%] text-base font-medium !leading-[1.5] max-lg:hidden "
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Image
            src={svgIllustration}
            alt="Ilustración de un desarrollador trabajando en su PC."
            className="m-auto focus:scale-105 hover:scale-105 active:scale-105 transition"
            width={600}
          />
        </motion.div>
      </div>
    </section>
  );
}
