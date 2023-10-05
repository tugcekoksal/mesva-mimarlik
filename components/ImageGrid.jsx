import React from "react";
import Image from "next/image";

const ImageItem = ({ src, name }) => (
  <div className="relative h-full w-full group ">
    <img
      src={src}
      alt=""
      className="h-full w-full object-cover pb-4 grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-transform duration-300"
    />

    <div className="absolute bottom-4  w-full h-[6rem] flex items-center bg-slate-600/70 justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
      <p className="text-white text-lg">{name}</p>
    </div>
  </div>
);

const ImageGrid = ({ projects }) => {
  return (
    <div className="w-full h-[700px] overflow-hidden flex  my-10">
      <div className="flex flex-col flex-1 p-2 pl-0 cursor-pointer ">
        <ImageItem src={projects[0].images[1]} name={projects[0].name} />
        <ImageItem src={projects[0].images[2]} name={projects[0].name} />
      </div>
      <div className="flex-1 p-2 cursor-pointer ">
        <ImageItem src={projects[2].images[1]} name={projects[2].name} />
      </div>

      <div className="flex flex-col flex-1 p-2 cursor-pointer ">
        <ImageItem src={projects[3].images[3]} name={projects[3].name} />
        <ImageItem src={projects[6].images[3]} name={projects[6].name} />
      </div>
      <div className="flex-1 p-2 pr-0 cursor-pointer">
        <ImageItem src={projects[5].images[0]} name={projects[5].name} />
      </div>
    </div>
  );
};

export default ImageGrid;
