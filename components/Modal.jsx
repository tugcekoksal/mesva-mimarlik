// components/Modal.js
import Image from "next/image";
import { useState } from "react";

const Modal = ({ isOpen, onClose, project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length
    );
  };
  const handleModalClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleModalClick}
      className="fixed inset-0 bg-gray-500 bg-opacity-80 w-full h-full flex items-center justify-center z-50 transition-opacity"
    >
      <div
        onClick={handleContentClick}
        className="bg-white w-[1200px] h-[600px] rounded-lg p-4"
      >
        <button className="text-black font-bold" onClick={onClose}>
          Kapat
        </button>
        <div className="flex flex-wrap">
          {" "}
          <div className="relative">
            <Image
              src={project.images[currentIndex]}
              alt={project.name}
              width={700}
              height={350}
            />
            <button
              className="absolute text-4xl text-white text-bold top-1/2 left-2 transform -translate-y-1/2"
              onClick={prevImage}
            >
              {"<"}
            </button>
            <button
              className="text-4xl absolute text-bold text-white top-1/2 right-2 transform -translate-y-1/2"
              onClick={nextImage}
            >
              {">"}
            </button>
          </div>
          <div className="ml-8">
            <h1 className="font-bold text-xl mb-4"> {project.name}</h1>
            <p>İsveren : {project.isveren}</p>
            <p>Konum : {project.konum}</p>
            <p>Ölçek : {project.olcek}</p>
            <p>Tarih : {project.tarih}</p>
            <p>Tip : {project.tip}</p>
            <p>Durum : {project.durum}</p>
            <p>Ekip : {project.ekip}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
