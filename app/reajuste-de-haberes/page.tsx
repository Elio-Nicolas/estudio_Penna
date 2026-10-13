
import Link from "next/link";
import { playfair } from "@/lib/fonts";

const reasons = [
  {
    number: "01",
    title: "Tu haber podría estar mal calculado",
    description:
      "El monto de una jubilación depende de distintos factores. Una revisión puede ayudar a identificar posibles diferencias en el cálculo.",
  },
  {
    number: "02",
    title: "Tu beneficio tuvo actualizaciones",
    description:
      "La historia de tu beneficio y las actualizaciones aplicadas pueden ser relevantes para evaluar si corresponde revisar su cálculo.",
  },
  {
    number: "03",
    title: "Querés conocer tus alternativas",
    description:
      "Si tenés dudas sobre el monto que cobrás, podés solicitar una evaluación de tu situación antes de decidir cómo continuar.",
  },
];

const documents = [
  "DNI del titular del beneficio.",
  "Último recibo de haberes jubilatorios o pensionarios.",
  "Resolución de otorgamiento del beneficio, si la tenés.",
  "Historia laboral y documentación previsional disponible.",
  "Reclamos o antecedentes relacionados con tu jubilación, si existieran.",
];

export default function ReajusteDeHaberesPage() {
  return (
    <main className="overflow-hidden bg-[#F3E9D5] text-[#3B2418]">
      {/* HERO */}
      <section className="relative bg-[#3B2418] px-6 py-20 text-[#F3E9D5] md:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#E8D8BE]/10 md:h-[30rem] md:w-[30rem]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#E8D8BE]/10 md:h-96 md:w-96"
        />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-[#E8D8BE] transition hover:text-white"
          >
            <span aria-hidden="true"></span>
            Volver a Penna &amp; Penna  ⚖️
          </Link>

          <div className="mt-16 max-w-3xl md:mt-20">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C8AA82]">
              Penna &amp; Penna · Estudio Jurídico y Previsional
            </p>

            <h1
              className={`mt-6 text-4xl font-medium leading-tight md:text-6xl ${playfair.className}`}
            >
              ¿Creés que tu jubilación está bien calculada?
            </h1>

            <div className="mt-7 h-px w-20 bg-[#C8AA82]" />

            <p className="mt-7 max-w-2xl text-base leading-8 text-[#E8D8BE] md:text-lg">
              Revisar tus haberes puede ser un primer paso para comprender
              cómo se determinó tu jubilación y conocer si existen
              alternativas legales para tu situación.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5492664831081"
               // target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#F3E9D5] px-7 py-4 text-center text-sm font-semibold text-[#3B2418] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Consultar por WhatsApp
                <span aria-hidden="true"></span>
              </a>

              <a
                href="#que-es"
                className="inline-flex min-h-14 items-center justify-center rounded-lg border border-[#E8D8BE]/40 px-7 py-4 text-sm font-medium text-[#F3E9D5] transition hover:bg-white/5"
              >
                Conocer más
              </a>
            </div>

            <p className="mt-5 max-w-xl text-xs leading-6 text-[#C8B8A1]">
              Cada caso requiere un análisis particular. La revisión no
              implica que necesariamente corresponda un reajuste.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section id="que-es" className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8B7355]">
              Tu situación merece atención
            </p>

            <h2
              className={`mt-5 text-3xl leading-tight md:text-4xl ${playfair.className}`}
            >
              Entender tu jubilación también es cuidar tu tranquilidad.
            </h2>

            <div className="mt-7 h-px w-16 bg-[#8B7355]" />
          </div>

          <div className="space-y-5 text-base leading-8 text-[#5A3826]">
            <p>
              El reajuste de haberes previsionales es una cuestión que puede
              requerir un análisis jurídico y del cálculo de tu beneficio.
              En determinadas situaciones, es posible evaluar si se
              aplicaron correctamente las reglas correspondientes.
            </p>

            <p>
              Sin embargo, no todas las jubilaciones presentan diferencias
              que justifiquen un reclamo. Por eso, antes de iniciar cualquier
              trámite, es importante conocer tus antecedentes y estudiar
              las particularidades de tu caso.
            </p>

            <p className="font-medium text-[#3B2418]">
              Nuestro objetivo es ayudarte a comprender tu situación y
              brindarte información clara para que puedas tomar una decisión
              informada.
            </p>
          </div>
        </div>
      </section>

      {/* CUÁNDO CONSULTAR */}
      <section className="bg-[#E8D8BE]/45 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8B7355]">
              Una primera evaluación
            </p>

            <h2
              className={`mt-5 text-3xl leading-tight md:text-4xl ${playfair.className}`}
            >
              ¿Cuándo puede ser conveniente revisar tus haberes?
            </h2>

            <p className="mt-5 leading-7 text-[#5A3826]">
              Existen distintas circunstancias que pueden justificar una
              consulta. Estas son algunas situaciones en las que vale la
              pena analizar los antecedentes.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="rounded-xl border border-[#8B7355]/25 bg-[#F3E9D5] p-7 md:p-8"
              >
                <span className="text-sm font-semibold tracking-widest text-[#8B7355]">
                  {reason.number}
                </span>

                <h3
                  className={`mt-6 text-xl leading-snug ${playfair.className}`}
                >
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#5A3826]">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTACIÓN */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8B7355]">
              Prepará tu consulta
            </p>

            <h2
              className={`mt-5 text-3xl leading-tight md:text-4xl ${playfair.className}`}
            >
              ¿Qué documentación puede ser útil?
            </h2>

            <p className="mt-6 leading-8 text-[#5A3826]">
              Contar con algunos documentos ayuda a conocer los antecedentes
              del beneficio. Si no tenés todo, podés consultar igualmente
              para conocer qué información sería necesaria en tu caso.
            </p>
          </div>

          <div className="rounded-xl border border-[#8B7355]/25 bg-white/40 p-7 md:p-9">
            <ul className="space-y-5">
              {documents.map((document) => (
                <li key={document} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#8B7355] text-xs text-[#5A3826]"
                  >
                    ✓
                  </span>

                  <span className="text-sm leading-7 text-[#5A3826]">
                    {document}
                  </span>
                </li>
              ))}
            </ul>

            <p className="mt-7 border-t border-[#8B7355]/20 pt-5 text-xs leading-6 text-[#6E5846]">
              La documentación necesaria puede variar según el tipo de
              beneficio y los antecedentes de cada persona.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-[#4A2D20] px-6 py-20 text-[#F3E9D5] md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C8AA82]">
              Cómo podemos orientarte
            </p>

            <h2
              className={`mt-5 text-3xl leading-tight md:text-4xl ${playfair.className}`}
            >
              Cada caso empieza por escuchar y analizar.
            </h2>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div className="border-t border-[#C8AA82]/50 pt-6">
              <p className="text-sm text-[#C8AA82]">PASO 01</p>
              <h3 className={`mt-4 text-xl ${playfair.className}`}>
                Nos contás tu situación
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#E8D8BE]">
                Conversamos sobre tu beneficio, tus dudas y los antecedentes
                que tengas disponibles.
              </p>
            </div>

            <div className="border-t border-[#C8AA82]/50 pt-6">
              <p className="text-sm text-[#C8AA82]">PASO 02</p>
              <h3 className={`mt-4 text-xl ${playfair.className}`}>
                Evaluamos la documentación
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#E8D8BE]">
                Analizamos la información pertinente para determinar si
                existen cuestiones que ameriten una revisión más profunda.
              </p>
            </div>

            <div className="border-t border-[#C8AA82]/50 pt-6">
              <p className="text-sm text-[#C8D8BE]">PASO 03</p>
              <h3 className={`mt-4 text-xl ${playfair.className}`}>
                Conocés las alternativas
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#E8D8BE]">
                Si corresponde, te explicamos las posibles vías de acción,
                sus condiciones y los aspectos que deben considerarse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8B7355]">
            Penna &amp; Penna
          </p>

          <h2
            className={`mt-5 text-3xl leading-tight md:text-5xl ${playfair.className}`}
          >
            Tu consulta puede ser el primer paso para despejar tus dudas.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#5A3826]">
            Si querés saber si vale la pena revisar tu jubilación, ponete en
            contacto con el estudio. Podemos conversar sobre tu situación y
            orientarte acerca de los próximos pasos.
          </p>

          <a
            href="https://wa.me/5492664831081"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-[#3B2418] px-8 py-4 text-sm font-semibold text-[#F3E9D5] transition hover:bg-[#5A3826] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B7355] focus-visible:ring-offset-2"
          >
            Hablemos por WhatsApp
            <span aria-hidden="true"></span>
          </a>

          <p className="mt-5 text-xs leading-6 text-[#6E5846]">
            La viabilidad de un eventual reclamo depende de las circunstancias
            y la documentación de cada caso. La consulta no garantiza un
            reajuste ni un resultado determinado.
          </p>

          <div className="mt-12">
            <Link
              href="/"
              className="text-sm font-medium text-[#5A3826] underline underline-offset-4 transition hover:text-[#8B7355]"
            >
              Volver a Penna &amp; Penna  ⚖️
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}