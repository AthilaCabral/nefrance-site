// =====================================================================
// SECTION LABEL · Eyebrow numerado padrão (ex: "01 ─── Instituto")
// ---------------------------------------------------------------------
// `tone="light"` usa em fundos claros (canvas/canvas-warm).
// `tone="dark"` usa em fundos escuros (petrol/ink).
// =====================================================================

type SectionLabelProps = {
  number: string;
  label: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionLabel({
  number,
  label,
  align = "left",
  tone = "light",
}: SectionLabelProps) {
  const numberColor = tone === "light" ? "text-petrol" : "text-terra";
  const labelColor = tone === "light" ? "text-stone" : "text-canvas/70";
  const lineColor = tone === "light" ? "bg-sand" : "bg-canvas/20";

  return (
    <div
      className={`flex items-center gap-4 ${
        align === "center" ? "justify-center" : "justify-start"
      }`}
    >
      <span className={`font-mono text-eyebrow ${numberColor} tabular-nums`}>
        {number}
      </span>
      <span aria-hidden className={`h-px w-12 ${lineColor}`} />
      <span
        className={`font-mono text-eyebrow uppercase tracking-eyebrow ${labelColor}`}
      >
        {label}
      </span>
    </div>
  );
}
