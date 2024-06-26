"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Proyectos", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 w-[80%]">
      <SectionHeading>Mis proyectos 📚</SectionHeading>
      <div className="grid grid-cols-3 grid-rows-2 gap-8" >
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
