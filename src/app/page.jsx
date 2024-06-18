import Image from "next/image";
import Hero from "@/Components/Hero/Hero";
import About from "@/Components/About/About";
import Services from "@/Components/Service/Service";
import Team from "@/Components/Team/Team";



export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Team />
    </main>
  );
}
