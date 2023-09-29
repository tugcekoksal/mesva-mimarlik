// components/Modal.js
import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

const Modal = ({ isOpen, onClose, project }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!project || !isOpen || !project.images) return null;

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
        {project?.images && currentIndex + 1 < project.images.length && (
          <link
            rel="preload"
            as="image"
            href={project.images[currentIndex + 1]}
          />
        )}
      </Head>

      <div
        onClick={handleModalClick}
        className="fixed inset-0 bg-gray-500 bg-opacity-80 w-full h-full flex items-center justify-center z-50 transition-opacity"
      >
        <div
          onClick={handleContentClick}
          className="relative bg-white w-full md:w-[900px] lg:w-[1200px] h-auto rounded-lg p-4"
        >
          <button
            className="absolute right-3 top-3 text-black  text-lg md:text-xl"
            onClick={handleClose}
          >
            X
          </button>
          <div className="flex flex-col md:flex-row my-6 mx-4">
            {" "}
            <div className="relative w-full md:w-[900px] h-[300px] md:h-[500px]">
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
            <div className="ml-8 ">
              <h1 className="font-bold text-xl mb-4 mt-4"> {project.name}</h1>
              <p className="mb-2">İsveren : {project.isveren}</p>
              <p className="mb-2">Konum : {project.konum}</p>
              <p className="mb-2">Ölçek : {project.olcek}</p>
              <p className="mb-2">Tarih : {project.tarih}</p>
              <p className="mb-2">Tip : {project.tip}</p>
              <p className="mb-2">Durum : {project.durum}</p>
              <p className="mb-2">Ekip : {project.ekip}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
