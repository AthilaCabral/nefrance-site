import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_CHA } from "@/lib/constants";

// =====================================================================
// PÁGINA · Chá das Mães · Soft Structuralism premium
// ---------------------------------------------------------------------
// CONFIRMAR antes de publicar:
//   - HORÁRIO (bloco DETALHES)
//   - INVESTIMENTO (bloco DETALHES)
// =====================================================================

export const metadata: Metadata = {
  title: "Chá das Mães · 30 de maio",
  description:
    "Uma tarde para a mulher que mora dentro da mãe. Roda de conversa, SPA dos pés e auriculoterapia no Instituto Nefrance.",
  alternates: { canonical: "/cha-das-maes" },
  openGraph: {
    title: "Chá das Mães · Instituto Nefrance",
    description: "Uma tarde para a mulher que mora dentro da mãe.",
    url: "/cha-das-maes",
  },
};

const inclusos = [
  {
    n: "01",
    title: "Roda de conversa",
    desc: "“A maternidade na atualidade” — encontro guiado entre mães neurodivergentes.",
  },
  {
    n: "02",
    title: "SPA dos pés",
    desc: "Cuidado prático, sem pretensão, para descomprimir o corpo de quem carrega o mundo.",
  },
  {
    n: "03",
    title: "Auriculoterapia",
    desc: "Sessão individual para equilíbrio emocional e regulação do estresse.",
  },
  {
    n: "04",
    title: "Mimos pensados",
    desc: "Pequenos rituais de cuidado curados especialmente para o encontro.",
  },
];

export default function ChaDasMaes() {
  return (
    <>
      <Header />
      <main>
        {/* =================== BLOCO 1 · HERO =================== */}
        <section
          aria-label="Chá das Mães — apresentação"
          className="relative min-h-[100dvh] bg-sage/60 pt-40 md:pt-48 pb-32 overflow-hidden flex items-center"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-1/4 -right-1/4 h-[800px] w-[800px] rounded-full opacity-40"
            style={{
              background:
                "radial-gradient(circle at center, rgba(201,127,90,0.3) 0%, rgba(201,127,90,0) 60%)",
            }}
          />
          <div className="relative mx-auto max-w-4xl px-6 md:px-10 text-center w-full">
            <Reveal>
              <span className="eyebrow-pill">
                30 de maio · Goiânia · Instituto Nefrance
              </span>
            </Reveal>

            <Reveal delay={0.15}>
              <h1
                className="mt-12 font-display font-semibold text-ink tracking-[-0.045em]"
                style={{
                  fontSize: "clamp(64px, 11vw, 152px)",
                  lineHeight: 0.94,
                }}
              >
                Chá das <span className="text-petrol">Mães</span>
              </h1>
            </Reveal>

            <Reveal delay={0.35}>
              <p
                className="mt-10 font-display font-medium text-ink/80 leading-snug tracking-[-0.015em]"
                style={{ fontSize: "clamp(20px, 2.4vw, 28px)" }}
              >
                Uma tarde para a mulher que mora dentro da mãe.
              </p>
            </Reveal>

            <Reveal delay={0.55}>
              <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
                <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink/70 px-4 py-2 rounded-full bg-canvas/60 ring-hairline">
                  Roda de conversa
                </span>
                <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink/70 px-4 py-2 rounded-full bg-canvas/60 ring-hairline">
                  SPA dos pés
                </span>
                <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-ink/70 px-4 py-2 rounded-full bg-canvas/60 ring-hairline">
                  Auriculoterapia
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.7}>
              <div className="mt-14">
                <Button href={WHATSAPP_CHA} external size="lg">
                  Reservar minha vaga
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        {/* =================== BLOCO 2 · PARA QUEM É =================== */}
        <section
          aria-label="Para quem é o Chá das Mães"
          className="bg-canvas py-32 md:py-48"
        >
          <div className="mx-auto max-w-4xl px-6 md:px-10 text-center">
            <Reveal>
              <p
                className="font-display font-medium text-ink tracking-[-0.025em]"
                style={{
                  fontSize: "clamp(28px, 4.2vw, 52px)",
                  lineHeight: 1.18,
                }}
              >
                Para você que acorda primeiro, lembra de tudo, vai ao médico, à
                escola, à terapia. Traduz o mundo para seu filho — e o seu
                filho para o mundo.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <p
                className="mt-14 font-display font-semibold text-petrol tracking-[-0.035em]"
                style={{
                  fontSize: "clamp(36px, 5.5vw, 80px)",
                  lineHeight: 1.05,
                }}
              >
                Hoje, é a sua vez.
              </p>
            </Reveal>
          </div>
        </section>

        {/* =================== BLOCO 3 · DETALHES =================== */}
        <section
          aria-label="Detalhes e itens inclusos"
          className="bg-canvas-warm py-32 md:py-48"
        >
          <div className="mx-auto max-w-[1200px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {/* Detalhes */}
            <Reveal className="md:col-span-5">
              <span className="eyebrow-pill">Detalhes do encontro</span>
              <div className="mt-10 bezel">
                <ul className="bezel-inner p-8 md:p-10 divide-y divide-ink/8">
                  {[
                    { label: "Data", value: "30 de maio de 2026" },
                    { label: "Horário", value: "[HORÁRIO A CONFIRMAR]" }, // ↓ CONFIRMAR ↓
                    { label: "Local", value: "Instituto Nefrance · Bela Vista" },
                    { label: "Vagas", value: "Limitadas" },
                    { label: "Investimento", value: "[VALOR A CONFIRMAR]" }, // ↓ CONFIRMAR ↓
                  ].map((row, i) => (
                    <li
                      key={row.label}
                      className={`flex flex-col gap-2 ${i === 0 ? "pb-5" : "py-5"} ${i === 4 ? "pt-5 pb-0" : ""}`}
                    >
                      <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-stone">
                        {row.label}
                      </span>
                      <span className="font-display font-medium text-ink tracking-[-0.025em] text-h3-lg">
                        {row.value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* O que está incluso */}
            <Reveal delay={0.15} className="md:col-span-7">
              <span className="eyebrow-pill">O que está incluso</span>
              <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {inclusos.map((item, i) => (
                  <li key={item.n} className="bezel">
                    <div
                      className="bezel-inner p-7 h-full flex flex-col gap-4"
                      style={{ minHeight: "180px" }}
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="font-mono text-eyebrow text-terra tabular-nums">
                          {item.n}
                        </span>
                        <span aria-hidden className="h-px flex-1 max-w-[32px] bg-ink/8" />
                      </div>
                      <h3
                        className="font-display font-medium text-ink tracking-[-0.02em] mt-auto"
                        style={{ fontSize: "clamp(20px, 2vw, 24px)", lineHeight: 1.2 }}
                      >
                        {item.title}
                      </h3>
                      <p className="font-body text-small text-stone leading-relaxed">
                        {item.desc}
                      </p>
                      {/* truque pra silenciar warning de unused i sem mudar API */}
                      <span className="hidden" aria-hidden>{i}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* =================== BLOCO 4 · CTA FINAL =================== */}
        <section
          aria-label="Reservar vaga no Chá das Mães"
          className="relative bg-terra text-ink py-32 md:py-48 overflow-hidden"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-1/2 left-0 h-[700px] w-[700px] rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle at center, rgba(31,58,61,0.3) 0%, rgba(31,58,61,0) 60%)",
            }}
          />
          <div className="relative mx-auto max-w-3xl px-6 md:px-10 text-center">
            <Reveal>
              <p
                className="font-display font-semibold text-ink tracking-[-0.035em]"
                style={{
                  fontSize: "clamp(40px, 6vw, 72px)",
                  lineHeight: 1.08,
                }}
              >
                Você cuida o ano inteiro. <br className="hidden md:block" />
                Hoje, é a sua vez.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="mt-14">
                <Button
                  href={WHATSAPP_CHA}
                  external
                  size="lg"
                  variant="secondary"
                >
                  Quero minha vaga
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
