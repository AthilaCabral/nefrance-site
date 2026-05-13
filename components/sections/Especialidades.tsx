import { ESPECIALIDADES } from "@/lib/constants";
import { Reveal } from "../ui/Reveal";

// =====================================================================
// ESPECIALIDADES · Asymmetrical Bento + Double-Bezel
// ---------------------------------------------------------------------
// Editar conteúdo em [lib/constants.ts → ESPECIALIDADES].
// O array TONES controla qual cartela visual cada card recebe (ordem).
// Card 0 (REFORÇO):           hero grande — fundo ink, terra de acento
// Card 1 (NEUROPSICOPEDAGOGIA): canvas elevado — petrol de acento
// Card 2 (PSICOLOGIA):         canvas elevado — petrol de acento
// Card 3 (ESTUDOS):            wide bottom — fundo petrol, terra de acento
// =====================================================================

type Tone = {
  col: string;
  shell: string;
  inner: string;
  numberAccent: string;
  hairline: string;
};

const TONES: Tone[] = [
  {
    col: "md:col-span-7 md:row-span-2",
    shell: "bezel-dark",
    inner: "text-canvas",
    numberAccent: "text-terra",
    hairline: "bg-canvas/10",
  },
  {
    col: "md:col-span-5",
    shell: "bezel",
    inner: "text-ink bg-surface",
    numberAccent: "text-petrol",
    hairline: "bg-ink/8",
  },
  {
    col: "md:col-span-5",
    shell: "bezel",
    inner: "text-ink bg-canvas-warm",
    numberAccent: "text-petrol",
    hairline: "bg-ink/8",
  },
  {
    col: "md:col-span-12",
    shell: "bezel-dark",
    inner: "text-canvas",
    numberAccent: "text-terra",
    hairline: "bg-canvas/10",
  },
];

// Override apenas o background do inner pra petrol/ink quando shell é dark
const INNER_BG_OVERRIDE: Record<number, string> = {
  0: "bg-ink",
  3: "bg-petrol",
};

export function Especialidades() {
  return (
    <section
      id="especialidades"
      aria-label="O que fazemos no Instituto Nefrance"
      className="bg-canvas py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="max-w-3xl">
          <span className="eyebrow-pill">04 · O que fazemos</span>
          <h2
            className="mt-8 font-display font-semibold text-ink tracking-[-0.035em]"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.02 }}
          >
            Quatro serviços.{" "}
            <span className="text-petrol">Um só compromisso.</span>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {ESPECIALIDADES.map((item, i) => {
            const t = TONES[i] ?? TONES[0];
            const isHero = i === 0;
            const isWide = i === 3;
            const innerBg = INNER_BG_OVERRIDE[i];

            return (
              <Reveal
                key={item.title}
                delay={i * 0.1}
                as="article"
                className={`${t.col} group`}
              >
                <div className={`${t.shell} h-full`}>
                  <div
                    className={`bezel-inner h-full ${t.inner} ${innerBg ?? ""} flex flex-col p-8 md:p-10 ${
                      isHero
                        ? "lg:p-14 min-h-[440px] md:min-h-[540px]"
                        : "min-h-[280px]"
                    } ${isWide ? "md:p-14" : ""}`}
                  >
                    {/* Header do card: número + hairline */}
                    <div className="flex items-baseline gap-3">
                      <span
                        className={`font-mono text-eyebrow ${t.numberAccent} tabular-nums shrink-0`}
                      >
                        {item.code}
                      </span>
                      <span
                        aria-hidden
                        className={`h-px flex-1 max-w-[48px] ${t.hairline}`}
                      />
                    </div>

                    {/* Conteúdo encostado no rodapé do card (gallery-style) */}
                    <div
                      className={
                        isHero
                          ? "mt-auto pt-16"
                          : "mt-12 md:mt-auto md:pt-12"
                      }
                    >
                      <h3
                        className="font-display font-semibold leading-[0.96] tracking-[-0.035em]"
                        style={{
                          fontSize: isHero
                            ? "clamp(44px, 5.5vw, 84px)"
                            : isWide
                            ? "clamp(36px, 4vw, 60px)"
                            : "clamp(30px, 3.4vw, 48px)",
                          hyphens: "auto",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="mt-5 font-display font-medium opacity-75 max-w-[38ch] tracking-[-0.015em]"
                        style={{
                          fontSize: "clamp(14px, 1.2vw, 18px)",
                          lineHeight: 1.4,
                        }}
                      >
                        {item.subtitle}
                      </p>
                      <p className="mt-5 font-body text-body leading-relaxed max-w-[54ch] opacity-80">
                        {item.description}
                      </p>

                      {/* Hairline + indicador de continuidade nos cards principais */}
                      {(isHero || isWide) && (
                        <div className="mt-10 flex items-center gap-3">
                          <span
                            aria-hidden
                            className={`h-px w-12 ${t.hairline} group-hover:w-20 transition-all duration-700 ease-soft`}
                          />
                          <span className={`font-mono text-eyebrow uppercase tracking-eyebrow ${t.numberAccent}`}>
                            Saiba mais
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
