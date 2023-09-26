import React from "react";
import Image from "next/image";
import Link from "next/link";
import img1 from "../public/instagram/1.png";
import img2 from "../public/instagram/2.png";
import img3 from "../public/instagram/3.png";
import img4 from "../public/instagram/4.png";
import img5 from "../public/instagram/5.png";
import img6 from "../public/instagram/6.png";
import img7 from "../public/instagram/7.png";
import Instagramimg from "./Instagramimg";
const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Bizi Instagramdan takip edin</p>

      <p className="pb-4 ">@mesvamimarlik</p>

      <Link
        href={"https://instagram.com/mesvamimarlik?igshid=MWZjMTM2ODFkZg=="}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
          {" "}
          <Instagramimg socialImg={img1} />
          <Instagramimg socialImg={img2} />
          <Instagramimg socialImg={img3} />
          <Instagramimg socialImg={img4} />
          <Instagramimg socialImg={img5} />
          <Instagramimg socialImg={img6} />
        </div>
      </Link>
    </div>
  );
};

export default Instagram;
