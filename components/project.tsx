"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  url,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <a
        href={url}
        target="_blank"
        rel="noopener"
      >
        <section className="bg-gray-100 max-w-[32rem] grid grid-rows-2 gap-4 border border-black/5 rounded-lg overflow-hidden relative max-h-[30rem] hover:bg-gray-200 dark:text-white dark:bg-white/10 dark:border-white/10 dark:hover:bg-white/20">
          <div>
            <Image
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="py-2 px-2 sm:px-7 sm:pt-5">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-1">
              {tags.map((tag, index) => (
                <li
                  className="bg-gray-300 px-3 py-1 text-[0.6rem] uppercase tracking-wider text-black rounded-full font-semibold dark:bg-white/10 dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </a>
    </motion.div>
  );
}
