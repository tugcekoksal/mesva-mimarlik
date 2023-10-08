import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const Hero = ({ heading, message }) => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowMessage(true);
    }, 400);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed  bg-cover custom-img animate">
      {/*overlay*/}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/60 z-[2]" />
      <div className="p-5 text-white z-[2]  mt-[-10rem] ">
        {showMessage && (
          <div className="animate-slide-down">
            <h2 className="text-5xl font-bold">{heading}</h2>
            <p className="py-5 text-xl ">{message}</p>
            <Link href={"/projeler"}>
              <button className="px-8 py-2 border transition duration-300 hover:text-black hover:bg-white">
                Keşfet
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
