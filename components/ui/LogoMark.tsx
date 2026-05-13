// =====================================================================
// DEPRECATED · LogoMark
// ---------------------------------------------------------------------
// Este SVG era usado como placeholder do logo. Foi removido do Header,
// Hero e Footer. Mantido apenas para não quebrar imports legados.
// Quando o PNG transparente estiver pronto, salvar em [public/logo.png]
// e usar <Image> do next/image diretamente nos componentes.
// PODE SER APAGADO se nenhum import legacy aparecer no grep.
// =====================================================================

type LogoMarkProps = {
  className?: string;
  title?: string;
};

export function LogoMark({
  className,
  title = "Instituto Nefrance",
}: LogoMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      className={className}
    >
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontSize="42"
        fontWeight="600"
        letterSpacing="-2"
      >
        N
      </text>
    </svg>
  );
}
