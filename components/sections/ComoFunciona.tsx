import { JORNADA } from "@/lib/constants";
import { Reveal } from "../ui/Reveal";

// =====================================================================
// COMO FUNCIONA · Z-Axis Cascade (3 cards flutuantes com leve offset)
// ---------------------------------------------------------------------
// Editar passos em [lib/constants.ts → JORNADA].
// Cada card sobe levemente em sequência via Reveal (delay staggered) e
// fica em altura crescente no desktop pra simular timeline ascendente.
// Mobile: stack vertical sem offset.
// =====================================================================

const Z_OFFSETS = ["md:mt-0", "md:mt-10", "md:mt-20"];

export function ComoFunciona() {
  return (
    <section
      id="como-funciona"
      aria-label="Como funciona o atendimento no Instituto Nefrance"
      className="bg-canvas py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="max-w-3xl">
          <span className="eyebrow-pill">05 · Jornada</span>
          <h2
            className="mt-8 font-display font-semibold text-ink tracking-[-0.035em]"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.02 }}
          >
            Três passos.{" "}
            <span className="text-petrol">Sem mistério.</span>
          </h2>
        </Reveal>

        <ol className="mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {JORNADA.map((step, i) => (
            <Reveal
              key={step.code}
              delay={i * 0.12}
              as="li"
              className={`${Z_OFFSETS[i] ?? ""} group`}
            >
              <div className="bezel h-full">
                <div className="bezel-inner h-full p-8 md:p-10 flex flex-col gap-8 min-h-[360px]">
                  {/* Numeração massiva + label */}
                  <div className="flex items-baseline gap-4 pb-6 border-b border-ink/8">
                    <span
                      className="font-display font-semibold text-petrol leading-none tabular-nums tracking-[-0.04em] group-hover:scale-105 origin-left transition-transform duration-700 ease-soft"
                      style={{ fontSize: "clamp(48px, 5vw, 72px)" }}
                    >
                      {step.code}
                    </span>
                    <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-stone">
                      {step.title}
                    </span>
                  </div>

                  <div>
                    <p
                      className="font-display font-medium text-ink leading-snug tracking-[-0.025em]"
                      style={{ fontSize: "clamp(22px, 2.2vw, 28px)" }}
                    >
                      {step.subtitle}
                    </p>
                    <p className="mt-6 font-body text-body text-stone leading-relaxed">
                      {step.body}
                    </p>
                  </div>

                  {/* Indicador de continuidade no rodapé */}
                  <div className="mt-auto flex items-center gap-3">
                    <span className="font-mono text-eyebrow tabular-nums text-terra">
                      0{i + 1} / 03
                    </span>
                    <span
                      aria-hidden
                      className="h-px flex-1 bg-ink/8 origin-left scale-x-[0.4] group-hover:scale-x-100 transition-transform duration-700 ease-soft"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
