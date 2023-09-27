import { FaBuilding, FaPaintBrush, FaDraftingCompass } from "react-icons/fa";

function NelerYapiyoruz({ Icon, title, description }) {
  return (
    <div className="card px-2 md:px-[50px] py-10 border rounded-lg shadow-lg text-center bg-white ">
      <Icon className="text-4xl mb-4 mx-auto" />
      <h2 className="font-bold text-xl mb-2 py-4  ">{title}</h2>
      <p className="font-light leading-relaxed">{description}</p>
    </div>
  );
}

export default NelerYapiyoruz;
