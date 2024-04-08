"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import imgPerfilWhite from "@/public/Logo Nahuel.svg";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";

export default function Intro() {
  const { ref } = useSectionInView("Inicio", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { theme } = useTheme();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] min-h-[70vh] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={imgPerfilWhite}
              alt="Fotografía de Nahuel"
              width="192"
              height="192"
              quality="100"
              priority={true}
              className="h-26 w-26 rounded-full object-cover border-[0.3rem] dark:border-slate-600 shadow-xl sm:max-md:h-22 sm:max-md:w-22"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mt-4 px-4 text-base font-medium !leading-[1.5] sm:text-4xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p>
          <span className="font-bold">Full-Stack</span> developer, {" "}
        </p>
        <p>
        apasionado por el <span className="font-bold">conocimiento</span>
        </p>
        <p className="mb-[4rem]">
          {" "}
          y el <span className="font-bold">desarrollo de software</span>.
        </p>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/nahuebogado/"
          title="LinkedIn de Nahuel"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/ultrashunior/"
          title="Github de Nahuel"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
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
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-600 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/80 dark:text-black dark:hover:bg-white"
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
    </section>
  );
}
