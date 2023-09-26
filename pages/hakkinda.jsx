import React from "react";
import Image from "next/image";
import Link from "next/link";
import NelerYapiyoruz from "@/components/NelerYapiyoruzCard";
import { FaBuilding, FaPaintBrush, FaDraftingCompass } from "react-icons/fa";

const hakkinda = () => {
  return (
    <div className=" mx-auto  ">
      <div className="container mx-auto flex justify-center items-center p-[200px] ">
        <img
          src={"construction.jpg"}
          className="w-60 h-60 shadow-lg rounded-full object-cover mr-[8rem]"
        />
        <div className="flex flex-col justify-center">
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
      <div className="relative flex items-center justify-center  h-[500px]  bg-center bg-cover hakkinda-img mb-[250px]">
        <div className="absolute top-60 container mx-auto  px-[8rem] grid grid-cols-1 md:grid-cols-3 gap-6  ">
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
      <div className="flex justify-center pb-20">
        <Link href={"/iletisim"}>
          <button className=" border border-black shadow py-4 px-10 rounded  font-semibold hover:bg-black hover:text-white duration-300">
            BİRLİKTE ÇALIŞALIM
          </button>
        </Link>
      </div>
    </div>
  );
};

export default hakkinda;
