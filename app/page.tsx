import Hero from "@/componentes/Hero";
import Services from "@/componentes/Services";
import About from "@/componentes/About";
import Contact from "@/componentes/Contact";

export default function Home() {
  return (
    <>
      <main className="bg-[#3B2418] text-[#F3E9D5]">

        <Hero />

        <Services />

        <About />

        <Contact />

      </main>
    </>
  );
}