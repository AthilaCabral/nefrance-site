import { PROVA_SOCIAL } from "@/lib/constants";

// =====================================================================
// PROVA SOCIAL · Soft Structuralism · barra de pílulas double-bezel
// ---------------------------------------------------------------------
// Editar valores em [lib/constants.ts → PROVA_SOCIAL].
// =====================================================================

export function ProvaSocial() {
  const items = [
    {
      number: "01",
      value: PROVA_SOCIAL.familiasAtendidas,
      label: "famílias atendidas",
    },
    {
      number: "02",
      value: PROVA_SOCIAL.desdeAno,
      label: "no Bela Vista, Goiânia",
    },
    {
      number: "03",
      value: "Multidisciplinar",
      label: "neuropsico · psico · neuropsi",
    },
  ];

  return (
    <section
      aria-label="Prova social — números do Instituto"
      className="bg-canvas-warm py-16 md:py-20"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="bezel">
          <div className="bezel-inner px-8 py-8 md:px-12 md:py-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {items.map((it, i) => (
              <div
                key={it.label}
                className={`flex flex-col gap-3 ${
                  i > 0 ? "md:pl-12 md:border-l md:border-ink/8" : ""
                }`}
              >
                <span className="font-mono text-eyebrow text-terra tabular-nums">
                  {it.number}
                </span>
                <p className="font-display font-semibold text-h2-lg text-ink leading-none tracking-[-0.025em]">
                  {it.value}
                </p>
                <p className="font-mono text-eyebrow uppercase tracking-eyebrow text-stone">
                  {it.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
