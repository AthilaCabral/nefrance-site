import { Reveal } from "../ui/Reveal";

// =====================================================================
// SOBRE · Manifesto · Editorial Split
// ---------------------------------------------------------------------
// Eyebrow + h2 à esquerda, 3 parágrafos staggered à direita.
// =====================================================================

export function Sobre() {
  return (
    <section
      id="sobre"
      aria-label="Sobre o Instituto Nefrance"
      className="bg-canvas-warm py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <span className="eyebrow-pill">03 · Instituto</span>
          <h2
            className="mt-8 font-display font-semibold text-ink tracking-[-0.035em]"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.02 }}
          >
            Educação <span className="text-petrol">com propósito.</span>
          </h2>
        </Reveal>

        <div className="md:col-span-7 space-y-7 font-body text-body-lg md:text-h3 text-stone leading-relaxed">
          <Reveal delay={0.05} as="p">
            O Instituto Nefrance nasceu para unir duas coisas que raramente
            caminham juntas:{" "}
            <span className="text-ink font-medium">rigor pedagógico</span> e{" "}
            <span className="text-ink font-medium">cuidado emocional</span>.
          </Reveal>
          <Reveal delay={0.15} as="p">
            Reunimos neuropsicopedagogia, psicologia e reforço escolar
            especializado num mesmo espaço — com mesa de estudos e sala de
            coworking pra quem precisa.
          </Reveal>
          <Reveal delay={0.25} className="pt-8 border-t border-ink/8">
            <p
              className="font-display font-medium text-ink tracking-[-0.025em]"
              style={{ fontSize: "clamp(24px, 2.8vw, 36px)", lineHeight: 1.2 }}
            >
              Cada criança é única. Cada plano é construído à mão.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
