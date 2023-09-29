import Image from "next/image";
import Head from "next/head";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import { SliderData } from "@/components/SliderData";
import Instagram from "@/components/Instagram";
import { projects } from "@/utils/projectsData";
export default function Home() {
  return (
    <div>
      <Hero
        heading="Modern Tasarım Anlayışı"
        message="Geleceğin yaşam alanlarını bugünden tasarlıyoruz."
      />
      <Slider projects={projects} />
      <Instagram />
    </div>
  );
}
