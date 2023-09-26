// components/ProjectCard.js
import Link from "next/link";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const OfisCard = ({ city, url, adres, telefon, ilce, harita }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative w-[350px] h-[200px] border  overflow-hidden shadow-md hover:shadow-lg transition duration-300 group ">
        <Image
          src={url}
          alt={"konya"}
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0"
        />

        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-10">
          <Link href={harita} legacyBehavior>
            <a className="mt-8  inline-block bg-slate-50 text-black px-4 py-2 rounded hover:bg-slate-400  hover:text-white transition-colors duration-300">
              Haritada gor
            </a>
          </Link>
        </div>
      </div>
      <div className=" p-6 w-full sm:w-[350px] text-gray-800 shadow-md  ">
        <h2 className="text-xl font-bold mb-6 text-left">{city} OFIS</h2>
        <p className="text-base leading-relaxed mb-4 text-light">
          <FaMapMarkerAlt className="inline mr-2" />
          {adres}
          <br /> {ilce}
        </p>

        <p className="text-base font-light mb-4">
          <FaPhoneAlt className="inline mr-2" />
          {telefon}
        </p>
      </div>
    </div>
  );
};

export default OfisCard;
