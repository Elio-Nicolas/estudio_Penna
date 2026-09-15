import { playfair, cormorant, baskerville } from "@/lib/fonts";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-28 px-6 bg-[#3B2418] relative overflow-hidden"
    >

      <div className="absolute w-[500px] h-[500px] bg-[#E8D8BE] opacity-10 blur-[120px] rounded-full bottom-[-200px] right-[-200px]" />

      <div className="relative max-w-4xl mx-auto text-center">

        {/* TÍTULO */}
        <h2
          className={`text-4xl md:text-5xl font-semibold text-[#F3E9D5] leading-tight ${playfair.className}`}
        >
          Contacto
        </h2>

        {/* INTRODUCCIÓN */}
        <p
          className={`mt-6 max-w-2xl mx-auto text-[#E8D8BE] text-lg leading-relaxed ${baskerville.className}`}
        >
          Coordiná tu consulta y recibí asesoramiento legal
          <br className="hidden md:block" />
          cercano, claro y profesional.
        </p>

        {/* WHATSAPP - ACCIÓN PRINCIPAL */}
        <div className="mt-10">
          <a
            href="https://wa.me/5492664831081"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-4 bg-[#F3E9D5] text-[#3B2418] rounded-lg font-semibold shadow-lg hover:scale-105 transition duration-300"
          >
            Escribir por WhatsApp
          </a>
        </div>

        {/* OTROS MEDIOS DE CONTACTO */}
        <div className="mt-12">

          <p
            className={`text-sm uppercase tracking-[0.2em] text-[#E8D8BE] ${playfair.className}`}
          >
            También podés contactarnos
          </p>

          <div className="mt-5 space-y-3">

            {/* EMAIL */}
            <a
              href="mailto:estudiojuridicopenna@gmail.com"
              className={`block text-[#F3E9D5] text-lg leading-relaxed hover:underline transition ${baskerville.className}`}
            >
              estudiojuridicopenna@gmail.com
            </a>

            {/* TELÉFONO FIJO */}
            <a
              href="tel:+542664430841"
              className={`block text-[#E8D8BE] text-lg leading-relaxed hover:underline transition ${baskerville.className}`}
            >
              (0266) 443-0841
            </a>

          </div>

        </div>

        {/* SEPARADOR */}
        <div className="flex justify-center mt-12">
          <div className="w-16 h-px bg-[#8B7355]" />
        </div>

        {/* UBICACIÓN */}
        <div className="mt-10">

          <p
            className={`text-xl font-semibold text-[#F3E9D5] ${playfair.className}`}
          >
            Visitá nuestro estudio
          </p>

          <p
            className={`mt-3 text-[#E8D8BE] text-lg leading-relaxed ${baskerville.className}`}
          >
            General Paz 655 - Dpto. 5
          </p>

          <p
            className={`text-[#E8D8BE] text-lg leading-relaxed ${baskerville.className}`}
          >
            San Luis, Capital
          </p>

        </div>

      </div>

    </section>
  );
}