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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati accusantium laborum distinctio eos quia debitis assumenda adipisci pariatur et similique, sed odio architecto ab aliquam fugit possimus ex corrupti! Laboriosam.
      </p>

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda non, molestias quod quisquam ipsam ad consectetur perspiciatis? Sunt ratione, exercitationem rerum dolorem mollitia sed, itaque accusamus rem harum deleniti optio?
      </p>
    </motion.section>
  );
}
