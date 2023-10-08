// pages/projeler/[id].js
import { projects } from "@/utils/projectsData";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const ProjectDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const projectId = parseInt(id, 10);
  const selectedProject = projects.find((project) => project.id === projectId);

  if (!selectedProject) {
    return <p>Proje bulunamadı.</p>;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject, currentIndex]);

  const nextImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % selectedProject.images.length
    );
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + selectedProject.images.length) %
        selectedProject.images.length
    );
  };
  const handleModalClick = (e) => {
    e.stopPropagation();
    setCurrentIndex(0);
    onClose();
    console.log(currentIndex);
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };
  const handleClose = () => {
    setCurrentIndex(0);
    onClose();
    console.log(currentIndex);
  };

  return (
    <>
      <Head>
        {selectedProject?.images &&
          currentIndex + 1 < selectedProject.images.length && (
            <link
              rel="preload"
              as="image"
              href={selectedProject.images[currentIndex + 1]}
            />
          )}
      </Head>
      {false && <Navbar />}

      <div className="fixed  bg-white w-full h-full flex items-center justify-center transition-opacity z-10">
        <Link href={"/projeler"} legacyBehavior>
          <a className="absolute right-10 top-4 text-black  text-2xl md:text-xl  cursor-pointer hover:font-semibold">
            X
          </a>
        </Link>

        <div className="flex flex-col md:flex-row my-6 mx4 ">
          {" "}
          <div className="relative w-[360px] md:w-[1000px] h-[400px] md:h-[650px] mb-9 sm:mb-0 ">
            <Image
              src={selectedProject?.images?.[currentIndex]}
              alt={selectedProject.name}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              blurDataURL="data:image/png;base64,..."
            />
            <button
              className="absolute text-4xl text-white hover:text-5xl top-1/2 left-2 transform -translate-y-1/2"
              onClick={prevImage}
            >
              {"<"}
            </button>
            <button
              className="text-4xl absolute hover:text-5xl text-white top-1/2 right-2 transform -translate-y-1/2"
              onClick={nextImage}
            >
              {">"}
            </button>
          </div>
          <div className="ml-8 ">
            <h1 className="font-bold text-xl mb-4 mt-4">
              {" "}
              {selectedProject.name}
            </h1>
            <p className="mb-2">İsveren : {selectedProject.isveren}</p>
            <p className="mb-2">Konum : {selectedProject.konum}</p>
            <p className="mb-2">Ölçek : {selectedProject.olcek}</p>
            <p className="mb-2">Tarih : {selectedProject.tarih}</p>
            <p className="mb-2">Tip : {selectedProject.tip}</p>
            <p className="mb-2">Durum : {selectedProject.durum}</p>
            <p className="mb-2">Ekip : {selectedProject.ekip}</p>
          </div>
        </div>
      </div>
    </>
  );
};

//   return (
//     <div>
//       <h1>Proje Detay Sayfası - {selectedProject.name}</h1>
//       {/* Proje detaylarını göstermek için gerekli bileşenleri ekleyin */}
//       <p>Proje ID: {selectedProject.id}</p>
//       <p>Proje Açıklaması: {selectedProject.ekip}</p>
//       {/* Diğer proje detaylarını burada gösterin */}
//     </div>
//   );
// };
// export async function getStaticProps({ params }) {
//   const projectId = params.id;
//   const projectData = projects.find((project) => project.id === projectId);

//   return {
//     props: {
//       projectData,
//     },
//   };
// }

export default ProjectDetailPage;
