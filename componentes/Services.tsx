"use client";

import { useState } from "react";
import { playfair } from "@/lib/fonts";

interface Service {
title: string;
items: string[];
}

const services: Service[] = [
{
title: "DERECHO CIVIL",
items: [
"Posesión Veinteañal",
"Sucesiones",
"Cobro Judicial y Extrajudicial de Alquileres",
"Ejecuciones",
"Cobros Judicial y Extrajudicial de Deudas",
"Incumplimiento Contractual",
"Redacción y Revisión de Contratos",
"Daños y Perjuicios",
"Accidentes de Tránsito",
],
},
{
title: "DERECHO PREVISIONAL",
items: [
"Jubilaciones y Pensiones",
"Pensión por invalidez",
"Reajustes jubilatorios",
"Moratorias previsionales",
],
},
{
title: "DERECHO DE FAMILIA",
items: [
"Divorcio",
"Alimentos",
"Régimen de Comunicación",
"Impedimento de Contacto",
"Cuidado Personal",
"Acuerdos Extrajudiciales",
],
},
{
title: "DERECHO LABORAL",
items: [
"Despidos",
"Trabajo no Registrado",
"Accidentes Laborales",
"Indemnizaciones",
],
},
];

export default function Services() {
const [active, setActive] = useState<number | null>(null);

const toggleCard = (index: number) => {
setActive((current) => (current === index ? null : index));
};

return ( <section
   id="areas-de-practica"
   className="bg-[#3B2418] px-6 py-28"
 > <div className="mx-auto max-w-6xl">
<h2
className={`mt-8 text-center text-3xl font-semibold leading-tight text-[#F3E9D5] md:text-4xl ${playfair.className}`}
>
Áreas de práctica </h2>

    <div className="mt-16 grid gap-8 md:grid-cols-2">
      {services.map((service, index) => {
        const isActive = active === index;
        const panelId = `service-panel-${index}`;

        return (
          <div key={service.title} className="min-w-0">
            <button
              type="button"
              onClick={() => toggleCard(index)}
              aria-expanded={isActive}
              aria-controls={panelId}
              className="flex w-full items-center justify-between rounded-2xl border border-[#E8D8BE] bg-[#5A3826] p-8 text-left shadow-xl transition-colors duration-300 hover:bg-[#69432E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3E9D5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#3B2418]"
            >
              <span className="text-xl font-medium tracking-wide text-[#F3E9D5]">
                {service.title}
              </span>

              <span
                aria-hidden="true"
                className={`ml-4 shrink-0 text-2xl font-light text-[#E8D8BE] transition-transform duration-300 ${
                  isActive ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {isActive && (
              <div
                id={panelId}
                className="mt-4 rounded-2xl border border-[#E8D8BE] bg-[#4A2D20] p-6 shadow-2xl"
              >
                <ul className="space-y-3 text-[#E8D8BE]">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {service.title === "DERECHO PREVISIONAL" && (
                  <div className="mt-6 border-t border-[#8B7355] pt-5">
                    <p
                      className={`text-lg font-semibold leading-snug text-[#F3E9D5] ${playfair.className}`}
                    >
                      ¿Creés que tu jubilación está bien calculada?
                    </p>

                    <p className="mt-2 text-sm leading-relaxed text-[#E8D8BE]">
                      Conocé cuándo puede ser conveniente revisar tus
                      haberes y qué alternativas podrían existir para tu
                      situación.
                    </p>

                    <a
                      href="/reajuste-de-haberes"
                      className={`mt-4 inline-flex items-center gap-2 font-semibold text-[#F3E9D5] underline underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F3E9D5] ${playfair.className}`}
                    >
                      Conocer más sobre reajuste de haberes
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
</section>

);
}
