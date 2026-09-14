"use client"; //  Asegúrate de agregar esto arriba si no lo tiene

import { useEffect } from "react"; // Importa useEffect
import Hero from "@/componentes/Hero";
import Services from "@/componentes/Services";
import About from "@/componentes/About";
import Contact from "@/componentes/Contact";

export default function Home() {
  
  // Este efecto fuerza al navegador a subir al Hero al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-[#3B2418] text-[#F3E9D5]">
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
