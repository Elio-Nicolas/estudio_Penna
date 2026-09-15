import { playfair, cormorant, baskerville } from "@/lib/fonts";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="py-28 px-6 bg-[#3B2418] relative overflow-hidden"
    >

      <div className="absolute w-[500px] h-[500px] bg-[#E8D8BE] opacity-10 blur-[120px] rounded-full bottom-[-200px] right-[-200px]" />

      <div className="relative max-w-4xl mx-auto text-center">

        <h2
          className={`mt-8 text-4xl md:text-5xl font-semibold text-[#F3E9D5] leading-tight text-center ${playfair.className}`}
        >
          Contacto
        </h2>

        <p
          className={`mt-8 text-[#E8D8BE] text-lg leading-relaxed ${playfair.className}`}
        >
          Coordina tu consulta, y recibí asesoramiento legal eficiente.
        </p>

        <div className="mt-10 space-y-2 text-lg">

          <p
            className={`text-[#E8D8BE] text-lg leading-relaxed ${playfair.className}`}
          >
            estudiojuridicopenna@gmail.com
          </p>

          <p
            className={`text-[#E8D8BE] text-lg leading-relaxed ${playfair.className}`}
          >
            San Luis, Capital
          </p>

        </div>

        <a
          href="https://wa.me/5492664831081"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 bg-[#F3E9D5] text-[#3B2418] px-10 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
        >
          Escribir por WhatsApp
        </a>

      </div>

    </section>
  );
}