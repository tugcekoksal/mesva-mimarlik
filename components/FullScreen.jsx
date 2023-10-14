// components/FullScreenImage.js

import React, { useEffect } from "react";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";

const FullScreenImage = ({ imageUrl, onClose, nextImage, prevImage }) => {
  const handleClick = (e) => {
    const clickX = e.clientX;
    const windowWidth = window.innerWidth;

    if (clickX > windowWidth / 2) {
      nextImage();
    } else {
      prevImage();
    }
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscapeKey);

    return () => {
      window.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black text-white z-[150]"
      onClick={handleClick}
    >
      <button
        className="absolute top-10 right-4 text-3xl text-white cursor-pointer hover:text-gray-500 z-[200]"
        onClick={onClose}
      >
        <AiOutlineClose />
      </button>
      <Image
        src={imageUrl}
        alt="Full Screen Image"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default FullScreenImage;
