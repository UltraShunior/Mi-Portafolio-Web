"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.1] backdrop-blur-[0.5rem] sm:max-xl:h-[5rem] sm:top-6 sm:h-[3.3rem] sm:w-[30%] sm:rounded-full 3xl:h-[4.3rem] 3xl:w-[33%] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 3xl:h-[4rem] sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex flex-wrap items-center justify-between gap-y-1 text-[1rem] font-medium text-gray-500 3xl:text-[1.5rem] sm:w-[initial] sm:flex-nowrap sm:gap-3 sm:max-xl:text-center ">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-as relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-foreground transition dark:text-gray-500 dark:hover:text-gray-300",
                  {
                    "text-foreground text-center dark:text-gray-200":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-foreground/10 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
