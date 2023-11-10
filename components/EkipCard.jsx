import Image from "next/image";

const EkipCard = ({ isim, unvan, okul, baseUrl }) => {
  return (
    <div className="relative w-[300px] h-[330px] sm:mr-4 mb-4 group ">
      <Image
        src={baseUrl}
        layout="fill"
        alt="resim aciklamasi"
        className="group-hover:opacity-50 transition-opacity "
      />
      <div className="absolute bottom-[-100px] h-[400px] right-0 left-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300  ekip-yazi ">
        <div className="flex flex-col bg-slate-400 w-full text-center">
          <p className="text-white text-xl p-2">{isim}</p>
          <p className="text-slate-200 text-md ">{unvan}</p>
          <p className="text-slate-200 text-md pb-2">{okul}</p>
        </div>
      </div>
    </div>
  );
};

export default EkipCard;
