import Image from "next/image";
import Link from "next/link";
import NelerYapiyoruz from "@/components/NelerYapiyoruzCard";
import React, { useEffect, useRef, useState } from "react";
import { FaBuilding, FaPaintBrush, FaDraftingCompass } from "react-icons/fa";

const hakkinda = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current);
      }
    };
  }, []);

  return (
    <div className=" mx-auto  ">
      <div className="mt-[200px] mb-[100px] flex flex-wrap sm:w-full justify-center items-center p-10 ">
        <img
          src={"construction.jpg"}
          className="w-60 h-60 shadow-lg rounded-full object-cover md:mr-[8rem] mb-[75px] xl:mb-0 "
        />
        <div className="flex flex-col justify-center max-w-[800px]">
          <h1 className="font-light  mb-2">BIZI TANIYIN</h1>
          <h2 className=" font-bold text-4xl mb-6 ">
            Sadece Binalar Değil, Yaşam Alanları Yaratıyoruz.
          </h2>
          <p className="container leading-relaxed  font-light">
            <strong>Mesva Mimarlık ve Tasarım</strong> , 2021 yılında mimar
            Sinem Çeri tarafından Çanakkale'de kurulmuştur. 2023 yılında bir
            grup arkadaşla yollarını birleştirmiş ve 3 farklı şehirde hizmet
            vermeye başlamıştır. ​ Çekirdek ekip, 2015'ten itibaren İstanbul
            başta olmak üzere çeşitli illerde konut, ticari yapı, karma yapılar,
            otel, sanayi kompleksleri, eğitim yapıları ve ofis gibi farklı
            fonksiyonlarda ve geniş ölçeklerdeki projelerin tasarım, ruhsat ve
            uygulama aşamalarında ve yarışma projelerinde yer almıştır. ​
            Halihazırda İstanbul, Çanakkale ve Konya'da mimari, iç mimari ve
            konsept tasarım alanlarında hizmet vermektedir.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center  lg:h-[500px]  bg-center bg-cover hakkinda-img mb-[100px] md:mb-[250px]">
        <div className=" lg:mt-[400px] container mx-auto p-10   grid grid-cols-1  lg:grid-cols-3 gap-6  ">
          {" "}
          <NelerYapiyoruz
            Icon={FaBuilding}
            title={" Ruhsat ve Uygulama Projeleri"}
            description={`Deneyimli ekibimizle projenizin başından sonuna kadar size rehberlik
            ediyor, en iyi çözümleri sunuyoruz. Mevzuatlara uygun hazırladığımız
            projelerle, inşaat sürecinizin verimli ilerlemesini hedefliyoruz.`}
          />
          <NelerYapiyoruz
            Icon={FaPaintBrush}
            title={" İç Mimarlık"}
            description={` İç mekanların estetik ve fonksiyonelliğini ön planda tutarak, yaşam
              alanlarınızı dönüştürüyoruz. Her bir detayı özenle planlayarak,
              mekanın ruhunu yansıtan tasarımlar oluşturuyoruz. `}
          />
          <NelerYapiyoruz
            Icon={FaBuilding}
            title={"  Konsept Tasarım Projeleri"}
            description={`Konsept tasarım projelerimizle, markanızın veya yaşam alanınızın özgün bir kimliğe kavuşmasını sağlıyoruz. Başlangıçtan sona bütüncül bir yaklaşım ile yenilikçi ve etkileyici konseptler oluşturuyoruz`}
          />
        </div>
      </div>
      <div className="flex justify-center pb-10 ">
        <Link href={"/iletisim"}>
          <button
            ref={buttonRef}
            className={`border border-black shadow py-4 px-10 rounded font-semibold hover:bg-black hover:text-white transform transition-all duration-500  ${
              isVisible ? "translate-y-[-50px]" : ""
            }`}
          >
            BİRLİKTE ÇALIŞALIM
          </button>
        </Link>
      </div>
    </div>
  );
};

export default hakkinda;
