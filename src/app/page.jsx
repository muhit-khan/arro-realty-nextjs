import Image from "next/image";
import Hero from "@/Components/Hero/Hero";
import Services from "@/Components/Service/Service";
import Team from "@/Components/Team/Team";



export default function Home() {
  return (
    <main>
      <Hero />
      <Team />
      <Services />
    </main>
  );
}
