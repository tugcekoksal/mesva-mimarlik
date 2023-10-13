// components/ProjectCard.js
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative  h-[300px] border rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300 group transform hover:scale-105">
      <Image
        src={project.images[0]}
        alt={project.name}
        layout="fill"
        objectFit="cover"
        className=""
      />

      <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-10">
        <h2 className="text-xl font-bold mb-2 text-white">{project.name}</h2>
        <p className="text-gray-300 mb-2">{project.Konum}</p>
        <p className="text-gray-400 mb-4">{project.Tip}</p>

        <Link href={`/projeler/${project.id}`} legacyBehavior>
          <a className="mt-4 inline-block bg-slate-50 text-black px-4 py-2 rounded hover:bg-slate-400  hover:text-white transition-colors duration-300 ">
            Detaylar
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
