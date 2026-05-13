import Link from "next/link";
import { Reveal } from "../ui/Reveal";

// =====================================================================
// PARA AS MÃES · Fundo petrol + card double-bezel-dark do evento
// ---------------------------------------------------------------------
// Tipografia massiva à esquerda · card Chá das Mães à direita.
// Página dedicada do evento: [app/cha-das-maes/page.tsx].
// =====================================================================

export function ParaAsMaes() {
  return (
    <section
      id="para-as-maes"
      aria-label="Cuidado também para a mãe que cuida"
      className="relative bg-petrol text-canvas py-28 md:py-40 overflow-hidden"
    >
      {/* Glow ambiente sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/2 right-0 h-[800px] w-[800px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, rgba(201,127,90,0.25) 0%, rgba(201,127,90,0) 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
        <Reveal className="md:col-span-7">
          <span className="eyebrow-pill eyebrow-pill-dark">07 · Para a mãe</span>
          <p
            className="mt-10 font-display font-semibold text-canvas tracking-[-0.035em]"
            style={{
              fontSize: "clamp(36px, 5vw, 72px)",
              lineHeight: 1.05,
            }}
          >
            Você cuida o ano inteiro.{" "}
            <span className="text-terra">Aqui, alguém cuida de você também.</span>
          </p>
          <p className="mt-10 font-body text-body-lg md:text-h3 text-canvas/80 leading-relaxed max-w-xl">
            Mãe de criança neurodivergente não é heroína. É mulher. No
            Nefrance, a mãe é parte do tratamento — e merece ser cuidada
            também.
          </p>
        </Reveal>

        <Reveal delay={0.18} className="md:col-span-5 md:sticky md:top-32">
          <article className="bezel-dark">
            <div className="bezel-inner p-8 md:p-10">
              <span className="eyebrow-pill eyebrow-pill-dark">
                Próximo encontro
              </span>
              <h3
                className="mt-6 font-display font-semibold text-canvas tracking-[-0.035em]"
                style={{ fontSize: "clamp(32px, 3.5vw, 48px)", lineHeight: 1.0 }}
              >
                Chá das Mães
              </h3>
              <p className="mt-3 font-mono text-eyebrow uppercase tracking-eyebrow text-canvas/60">
                30 de maio · Goiânia
              </p>
              <div className="mt-8 h-px bg-canvas/15" />
              <p className="mt-6 font-body text-body-lg text-canvas/80 leading-relaxed">
                Uma tarde para a mulher que mora dentro da mãe. Roda de
                conversa, SPA dos pés, auriculoterapia.
              </p>
              <Link
                href="/cha-das-maes"
                className="group mt-10 inline-flex items-center gap-3 font-mono text-eyebrow uppercase tracking-eyebrow text-canvas pb-2 border-b border-canvas/30 hover:border-terra hover:text-terra transition-all duration-500 ease-soft"
              >
                Reservar minha vaga
                <span
                  aria-hidden
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas/10 group-hover:bg-terra/15 group-hover:translate-x-1 transition-all duration-500 ease-soft"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
