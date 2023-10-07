import React from "react";
import { projects } from "@/utils/projectsData";
import ProjectCard from "@/components/ProjectCard";
import { useState } from "react";
import Modal from "@/components/Modal";

const projeler = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold pt-[8rem] pb-10 text-center">
        PROJELERİMİZ
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onDetailClick={() => openModal(project)}
          />
        ))}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default projeler;
