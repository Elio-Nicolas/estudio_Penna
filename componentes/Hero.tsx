import Image from "next/image";

import LogoIcon from "@/componentes/LogoIcon";
import { playfair, cormorant, baskerville } from "@/lib/fonts";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-start justify-center pt-10 md:pt-0 md:items-center px-4 bg-[#F3E9D5] overflow-hidden">

      <div className="relative z-10 max-w-4xl w-full mx-auto text-center py-16">

    {/* Logo*/}
        <div className="flex justify-center">
          <Image
            src="/logo-penna_2.png"
            alt="Estudio Penna"
            width={200}
            height={200}
            className="w-48 h-auto md:w-56"
            priority
          />
        </div>


<h1
  className={`mt-8 text-5xl md:text-6xl font-bold italic text-[#3B2418] ${baskerville.className}`}
  style={{
    WebkitTextStroke: "0.2px currentColor",
  }}
>
  Penna & Penna
</h1>


        {/* Tipo de estudio */}
        <h2
          className={`mt-7 text-lg md:text-xl uppercase tracking-[0.3em] text-[#5A3826] leading-relaxed ${playfair.className}`}
        >
          Estudio Jurídico y
          <br />
          Previsional
        </h2>

        {/* Línea */}
        <div className="flex justify-center mt-7">
          <div className="w-20 h-px bg-[#8B7355]" />
        </div>

        {/* Áreas */}
        <p
          className={`mt-7 text-base md:text-lg tracking-[0.12em] text-[#5A3826] ${baskerville.className}`}
        >
          Laboral&nbsp;&nbsp;-&nbsp;&nbsp;Civil&nbsp;&nbsp;-&nbsp;&nbsp;Familia&nbsp;&nbsp;-&nbsp;&nbsp;Previsional
        </p>

        {/* Frase principal 
        <h3
          className={`mt-14 text-4xl md:text-5xl font-semibold italic leading-tight text-[#3B2418] ${playfair.className}`}
        >
          Tu tranquilidad legal,
          <br />
          nuestra prioridad
        </h3>*/}

         {/* Descripción */}
        <p
          className={`mt-7 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-[#5A3826] ${baskerville.className}`}
        >
          Asesoramiento jurídico confiable, cercano
          <br className="hidden md:block" /> y
          &nbsp;con compromiso en cada etapa de tu vida.
        </p>

        {/* Botón */}
        <div className="mt-10">
          <a
            href="#contacto"
            className="inline-flex items-center gap-3 px-9 py-4 bg-[#3B2418] text-[#F3E9D5] rounded-lg uppercase tracking-[0.15em] text-sm font-semibold hover:bg-[#5A3826] transition duration-300 shadow-md"
          >
            Solicitar consulta
            <span className="text-lg">&rarr;</span>
          </a>
        </div>

      </div>

    </section>
  );
}
