import Hero from "@/components/Hero";

import Instagram from "@/components/Instagram";
import { projects } from "@/utils/projectsData";
import ImageGrid from "@/components/ImageGrid";
import Servisler from "@/components/Servisler";

export default function Home() {
  return (
    <div>
      <Hero
        heading="Modern Tasarım Anlayışı"
        message="Geleceğin yaşam alanlarını bugünden tasarlıyoruz."
      />
      <Servisler />
      <ImageGrid projects={projects} />

      <Instagram />
    </div>
  );
}
