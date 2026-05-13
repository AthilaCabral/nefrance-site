import { FRASES_QUE_VOCE_OUVIU } from "@/lib/constants";
import { Reveal } from "../ui/Reveal";

// =====================================================================
// RECONHECIMENTO · "Você já ouviu"
// ---------------------------------------------------------------------
// Editorial Split — eyebrow + h2 + parágrafo à esquerda (5 cols),
// lista de frases gigantes à direita (7 cols) com nested-line counter.
// Editar lista em [lib/constants.ts → FRASES_QUE_VOCE_OUVIU].
// =====================================================================

export function Reconhecimento() {
  return (
    <section
      aria-label="Frases que toda mãe de criança neurodivergente já ouviu"
      className="bg-canvas py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <span className="eyebrow-pill">02 · Você já ouviu</span>
          <h2
            className="mt-8 font-display font-semibold text-ink tracking-[-0.035em]"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.02 }}
          >
            Tudo isso —{" "}
            <span className="text-petrol">e mais um pouco.</span>
          </h2>
          <p className="mt-10 font-body text-body-lg md:text-h3 text-stone leading-relaxed max-w-md">
            Sua intuição já te disse que tem algo a mais. Aqui, a gente
            investiga com método — e responde com plano.
          </p>
        </Reveal>

        <div className="md:col-span-7">
          <ul className="space-y-0 divide-y divide-ink/8 border-y border-ink/8">
            {FRASES_QUE_VOCE_OUVIU.map((frase, i) => (
              <Reveal key={frase} delay={i * 0.06}>
                <li className="flex items-baseline gap-5 md:gap-8 py-6 md:py-7 group">
                  <span className="font-mono text-eyebrow text-terra tabular-nums shrink-0 w-8 group-hover:translate-x-1 transition-transform duration-500 ease-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="font-display font-medium text-ink/85 tracking-[-0.025em] group-hover:text-ink transition-colors duration-500 ease-soft"
                    style={{
                      fontSize: "clamp(26px, 3.2vw, 44px)",
                      lineHeight: 1.15,
                    }}
                  >
                    &ldquo;{frase}&rdquo;
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
