import { useState } from "react";

const Servisler = () => {
  const [visible1, setIsVisible1] = useState(true);
  const [visible2, setIsVisible2] = useState(false);
  const [visible3, setIsVisible3] = useState(false);

  const sizeIcon = { fontSize: "3rem" };

  const handleToggle1 = () => {
    setIsVisible1(!visible1);
    setIsVisible2(false);
    setIsVisible3(false);
  };
  const handleToggle2 = () => {
    setIsVisible2(!visible2);
    setIsVisible1(false);
    setIsVisible3(false);
  };
  const handleToggle3 = () => {
    setIsVisible3(!visible3);
    setIsVisible2(false);
    setIsVisible1(false);
  };
  return (
    <div>
      <h1 className="text-xl font-semibold text-center py-10 ">
        SERVİSLERİMİZ
      </h1>
      <div className="flex justify-center md:px-[18rem] py-10 ">
        {" "}
        <div
          className={`flex-1 text-center px-8 py-2 border-r cursor-pointer ${
            visible1 ? "font-semibold" : ""
          }`}
          onClick={handleToggle1}
        >
          <span
            class="material-symbols-outlined  mb-4 mx-auto   "
            style={sizeIcon}
          >
            design_services
          </span>
          <h2 className="text-sm"> RUHSAT VE UYGULAMA PROJELERİ</h2>
        </div>
        <div
          className={`flex-1 text-center px-8 py-2 border-r cursor-pointer ${
            visible2 ? "font-semibold" : ""
          }`}
          onClick={handleToggle2}
        >
          <span
            class="material-symbols-outlined text-[4rem] mb-4 mx-auto  "
            style={sizeIcon}
          >
            stylus_note
          </span>
          <h2 className="text-sm">İÇ MİMARLIK</h2>
        </div>
        <div
          className={`flex-1 text-center px-8 py-2  cursor-pointer ${
            visible3 ? "font-semibold" : ""
          }`}
          onClick={handleToggle3}
        >
          <span
            class="material-symbols-outlined  mb-4 mx-auto "
            style={sizeIcon}
          >
            villa
          </span>
          <h2 className="text-sm">KONSEPT TASARIM PROJELERİ</h2>
        </div>
      </div>
      {visible1 && (
        <div className=" mx-[4rem] lg:mx-[10rem] mb-[5rem]">
          <p className="text-center leading-loose">
            Mimari Vizyonunuzu Hayata Geçiriyoruz: Ruhsat ve Uygulama
            Projelerinizin Anahtar Teslim Çözüm Sağlayıcısı Olarak, Sizlere
            Tasarımın İlk Çiziminden İnşaatın Son Aşamasına Kadar Tüm Süreçlerde
            Profesyonel Destek Sunuyoruz. Deneyimimiz ve Tutkumuzla,
            Projelerinizin Her Detayını Kusursuzca İnşa Ediyoruz.
            <span className="font-semibold">
              <a href="/hakkinda"> Devamını gör...</a>
            </span>
          </p>
        </div>
      )}
      {visible2 && (
        <div className=" mx-[4rem] lg:mx-[10rem] my-[5rem]">
          <p className="text-center leading-loose">
            Mimari vizyonu gerçeğe dönüştürme konusundaki tutkumuzla, iç
            mekanlarınızı hayal ettiğinizden daha fazla özgün, işlevsel ve
            estetik olarak tasarlamak için buradayız.
            <span className="font-semibold">
              <a href="/hakkinda">Devamını gör...</a>
            </span>
          </p>
        </div>
      )}
      {visible3 && (
        <div className=" mx-[4rem] lg:mx-[10rem] my-[5rem]">
          <p className="text-center leading-loose">
            Her projeye özel yaklaşıyor ve müşterilerimizin ihtiyaçlarını ve
            hayallerini en üst düzeyde karşılamak için çalışıyoruz.
            <span className="font-semibold">
              <a href="/hakkinda"> Devamını gör...</a>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Servisler;
