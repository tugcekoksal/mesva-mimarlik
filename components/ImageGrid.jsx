import React from "react";
import { useState } from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Link from "next/link";

import Modal from "@/components/Modal";

const ImageGrid = ({ projects }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const ImageItem = ({ src, name }) => (
    <div className="relative h-full w-full group overflow-hidden ">
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover pb-4 grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute bottom-4 w-full h-[4rem] flex items-center bg-slate-600/70 justify-center opacity-0 group-hover:opacity-100  duration-300  group-hover:animate-slide-left  ">
        <p className="text-white text-center text-lg mr-4">{`${name}   `}</p>
      </div>
      <div className="absolute right-2 top-2">
        {" "}
        <BsArrowUpRightCircleFill
          className="text-white cursor-pointern opacity-0 group-hover:opacity-100 hover:text-black"
          size={30}
          onClick={openModal}
        />
      </div>
    </div>
  );
  return (
    <div className="w-full h-[600px] overflow-hidden grid grid-cols-2 md:flex  mb-16 mt-10">
      <div className="flex flex-col flex-1 p-2 sm:pl-0  ">
        <ImageItem src={projects[0].images[1]} name={projects[0].name} />
        <ImageItem src={projects[2].images[3]} name={projects[2].name} />
      </div>
      <div className="flex-1 p-2  ">
        <ImageItem src={projects[1].images[1]} name={projects[1].name} />
      </div>

      <div className="flex flex-col flex-1 p-2  ">
        <ImageItem src={projects[4].images[7]} name={projects[4].name} />
        <ImageItem src={projects[7].images[3]} name={projects[7].name} />
      </div>
      <div className="flex-1 p-2 sm:pr-0 ">
        <ImageItem src={projects[6].images[0]} name={projects[6].name} />
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={2}
      />
    </div>
  );
};

export default ImageGrid;
