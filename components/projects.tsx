"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";

export default function Projects() {
  const { ref } = useSectionInView("Proyectos", 0.5);
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(new Array()));
  const anyArr: Array<any> = [];
  const [projetsSelected, setProjetsSelected] = React.useState(anyArr);
  React.useEffect(() => {
    setProjetsSelected([...projectsData]);
  }, []);

  function projectFilter(selectionArr: never[]) {
    if (selectionArr.length === 0) {
      projetsSelected.length = 0;
      projetsSelected.push(...projectsData);
    } else {
      setProjetsSelected([]);
      projectsData.forEach((project) => {
        let flag = false;
        selectionArr.forEach((elem) => {
          if (project.tags.includes(elem)) {
            flag = true;
          }
        });
        if (flag) {
          setProjetsSelected((projectsFiltered) => {
            return [...projectsFiltered, project];
          });
        }
      });
    }
  }

  const handleChage = (keys: any) => {
    const mySelectedKeys: Set<never> = new Set(keys);
    const myArrayKeys = Array.from(mySelectedKeys);
    projectFilter(myArrayKeys);
    setSelectedKeys(mySelectedKeys);
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-14 w-[70%] max-sm:w-full max-sm:px-4 max-sm:mx-auto max-sm:scroll-mt-16">
      <SectionHeading>Mis proyectos 📚</SectionHeading>
      <div className="my-8 w-full  flex flex-row items-center gap-4 max-sm:justify-center max-sm:gap-2 max-sm:text-center">
        <p className="text-[1rem] text-gray-700 dark:text-white/70">
          Filtrar por tecnologías:
        </p>
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="text-[1rem] text-gray-700 dark:text-white/70"
            >
              {selectedKeys.size > 0 ? selectedKeys.values().next().value : "Elegir"}
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
            <DropdownItem key="Next.js">Next.js</DropdownItem>
            <DropdownItem key="React">React</DropdownItem>
            <DropdownItem key="HTML">HTML</DropdownItem>
            <DropdownItem key="Express">Express</DropdownItem>
            <DropdownItem key="PostgreSQL">PostgreSQL</DropdownItem>
            <DropdownItem key="MySQL">MySQL</DropdownItem>
            <DropdownItem key="PHP">PHP</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="mx-auto grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-8 max-sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] max-sm:gap-2 max-sm:px-4" >
        {projetsSelected.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
