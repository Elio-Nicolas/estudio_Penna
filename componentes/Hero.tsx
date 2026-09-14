import { playfair, cormorant, baskerville } from "@/lib/fonts";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-[#F3E9D5]">

      <div className="relative max-w-3xl text-center">

        {/* Monograma */}
        <div className="flex justify-center">
          <div className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-[#3B2418] border-[5px] border-[#CDBB9F] flex items-center justify-center shadow-lg">
            <span
              className={`text-8xl md:text-9xl text-[#F3E9D5] leading-none ${cormorant.className}`}
            >
              P
            </span>
          </div>
        </div>

        {/* Nombre */}
        <h1
          className={`mt-8 text-5xl md:text-6xl font-bold text-[#3B2418] leading-tight ${playfair.className}`}
        >
          Penna
        </h1>

        {/* Profesión */}
        <span className="block mt-4 uppercase tracking-[0.55em] text-base font-semibold text-[#5A3826]">
          Abogados
        </span>

        {/* Frase principal */}
        <h2
          className={`mt-8 text-4xl md:text-5xl font-semibold text-[#3B2418] leading-tight ${playfair.className}`}
        >
          Estrategia legal para decisiones importantes
        </h2>

        {/* Subtexto */}
        <p
          className={`mt-8 text-[#5A3826] text-lg leading-relaxed italic ${playfair.className}`}
        >
          Claridad, compromiso y solidez en la defensa de tus derechos
        </p>

        {/* Botón */}
        <div className="mt-6">
          <a
            href="#contacto"
            className="bg-[#3B2418] text-[#F3E9D5] px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Solicitar consulta
          </a>
        </div>

      </div>
    </section>
  );
}