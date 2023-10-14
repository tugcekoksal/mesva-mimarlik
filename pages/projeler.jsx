import React from "react";
import { projects } from "@/utils/projectsData";
import ProjectCard from "@/components/ProjectCard";

const projeler = () => {
  return (
    <div className="container mx-auto px-4 py-12 ">
      <h1 className="text-2xl font-bold pt-[8rem] pb-10 text-center">
        PROJELERİMİZ
      </h1>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-6 items-center  ">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default projeler;
