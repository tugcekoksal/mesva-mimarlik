// components/Modal.js
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

const Modal = ({ isOpen, onClose, project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextImageIndex = (currentIndex + 1) % project.images.length;

  if (!isOpen) return null;
  if (!project || !isOpen) return null;

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
    setCurrentIndex(0);
    onClose();
    console.log(currentIndex);
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };
  const handleClose = () => {
    setCurrentIndex(0);
    onClose();
    console.log(currentIndex);
  };
  return (
    <>
      <Head>
        <link rel="preload" as="image" href={project.images[nextImageIndex]} />
      </Head>
      <div
        onClick={handleModalClick}
        className="fixed inset-0 bg-gray-500 bg-opacity-80 w-full h-full flex items-center justify-center z-50 transition-opacity"
      >
        <div
          onClick={handleContentClick}
          className="bg-white w-[1200px] h-[600px] rounded-lg p-4"
        >
          <button className="text-black font-bold" onClick={handleClose}>
            Kapat
          </button>
          <div className="flex flex-wrap mt-6">
            {" "}
            <div className="relative w-[700px] h-[500px]">
              <Image
                src={project?.images?.[currentIndex]}
                alt={project.name}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                placeholder="blur"
                blurDataURL="data:image/png;base64,..."
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
    </>
  );
};

export default Modal;
