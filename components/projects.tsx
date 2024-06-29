"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function Projects() {
  const { ref } = useSectionInView("Proyectos", 0.5);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["nextjs"]));

  const handleChage = (keys: any) => {
    const mySelectedKeys: Set<string> = new Set(keys);
    const myArrayKeys = Array.from(mySelectedKeys);
    const projetsSelected = projectsData.filter((project) =>
      myArrayKeys.includes(project.tags[0])
    );
    console.log(myArrayKeys);
    setSelectedKeys(mySelectedKeys);
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-14 w-[80%]">
      <SectionHeading>Mis proyectos 📚</SectionHeading>
      <div className="my-8 w-full flex flex-row items-center gap-4 justify-end">
        <p className="text-[1rem] text-gray-700 dark:text-white/70">
          Filtrar por tecnologías:
        </p>
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="text-[1rem] text-gray-700 dark:text-white/70"
            >
              Seleccionar
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Filtrar por tipo de proyecto"
            variant="flat"
            closeOnSelect={false}
            disallowEmptySelection={false}
            selectionMode="multiple"
            selectedKeys={selectedKeys}
            onSelectionChange={(keys) => handleChage(keys)}

          >
            <DropdownItem key="nextjs">Next.js</DropdownItem>
            <DropdownItem key="react">React</DropdownItem>
            <DropdownItem key="postgress">PostgreSQL</DropdownItem>
            <DropdownItem key="myqsl">MySQL</DropdownItem>
            <DropdownItem key="php">PHP</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-8" >
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
