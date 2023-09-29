import React from "react";
import IletisimFormu from "@/components/IletisimFormu";
import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import OfisCard from "@/components/OfisCard";

const iletisim = () => {
  return (
    <div
      id="iletisim"
      className=" min-h-screen pt-[5rem] flex flex-col items-center justify-center py-12"
    >
      <div className="  container  text-center my-10">
        {" "}
        <h1 className="text-2xl ">BİZE YAZIN...</h1>
      </div>
      <div className="w-full h-full mr-8">
        {/* Google Maps Gömme Kodu Buraya */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8032303870773!2d26.666204012866995!3d40.41320965573249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b16f4ea26c4601%3A0xc32397bd60099d27!2sMesva%20Mimarl%C4%B1k%20ve%20Tasar%C4%B1m%20Hizmetleri!5e0!3m2!1sen!2sfr!4v1695556879709!5m2!1sen!2sfr"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      <div className="my-10 text-center">
        {" "}
        <p className="p-6 text-light">
          Bize e-mail, telefon veya internet sitemizdeki iletişim formu
          aracılığıyla ulaşabilirsiniz.
        </p>
        <p className="text-base font-light">
          <FaEnvelope className="inline mr-2" />
          bilgi@mesvamimarlik.com
        </p>
      </div>
      <div className="p-10 ">
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
          <OfisCard
            city={"ÇANAKKALE"}
            adres={"Camikebir mahallesi Gazi Hasan Paşa caddesi No:1A"}
            telefon={"0532 517 85 88"}
            ilce={"Gelibolu / Çanakkale"}
            url={"/gelibolu.jpeg"}
            harita={"https://maps.app.goo.gl/nP1NXRQjNS4P3DJR6"}
          />
          <OfisCard
            city={"ISTANBUL"}
            adres={" Dereağzı mah. Serinpınar cad. Fidan sk. No:9 A Blok D:2 "}
            ilce={" Beylikdüzü / İstanbul"}
            telefon={"   0531 829 57 71"}
            url={"/istanbul.jpg"}
            harita={"https://maps.app.goo.gl/YEp4KMjPpMTpWMuYA"}
          />
          <OfisCard
            city={"KONYA"}
            adres={
              "Selahaddini Eyyubi mah. Beyhekim cd. Oberpark sitesi altı No:75/G"
            }
            telefon={"      0530 286 82 71"}
            ilce={"Selçuklu/Konya"}
            url={"/konya.jpeg"}
            harita={"https://maps.app.goo.gl/SVDrskAgVR6kXY7m8"}
          />
        </div>
      </div>

      <div className="bg-gray-100 shadow-lg flex flex-col  items-center justify-center py-16  w-full">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          MESAJINIZI BIRAKABİLİRSİNİZ
        </h1>
        <div className="w-[400px] md:w-[600px]">
          {" "}
          <IletisimFormu />
        </div>
      </div>
    </div>
  );
};

export default iletisim;
