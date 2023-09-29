import React, { useState } from "react";
import Image from "next/image";
import {
  FaArrowAltCircleRight,
  FaArrowCircleLeft,
  FaArrowCircleRight,
} from "react-icons/fa";

const Slider = ({ projects }) => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextSlide = () => {
    setCurrentProject(
      currentProject === projects.length - 1 ? 0 : currentProject + 1
    );
  };

  const prevSlide = () => {
    setCurrentProject(
      currentProject === 0 ? projects.length - 1 : currentProject - 1
    );
  };

  if (!Array.isArray(projects) || projects.length === 0) {
    return null;
  }

  return (
    <div id="projeler" className="max-w-[1240px]  mx-auto">
      <h1 className="text-2xl font-bold text-center p-4">Galeri</h1>
      <div className="relative flex justify-center p-4">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className={
                index === currentProject
                  ? "opacity-[1] ease-in duration-1000 w-full h-auto overflow-hidden "
                  : "opacity-0"
              }
            >
              <FaArrowCircleLeft
                onClick={prevSlide}
                size={30}
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2] md:w-8 md:h-8 lg:w-12 lg:h-12"
              />
              {index === currentProject && (
                <div className="w-full h-full relative">
                  <Image
                    layout="responsive"
                    width={1400}
                    height={800}
                    objectFit="cover"
                    src={project.images[0]} // Displaying only the first image of each project
                    alt={index}
                    objectPosition="center"
                  />
                </div>
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                size={30}
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2] md:w-8 md:h-8 lg:w-12 lg:h-12"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
