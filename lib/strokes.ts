// =====================================================================
// STROKES · Configuração dos elementos decorativos flutuantes
// ---------------------------------------------------------------------
// Cada entry é um <Stroke /> renderizado pelo <FloatingStrokes />.
// Posições são em % do height total da página (não da viewport).
// Edite livremente — adicionar, remover, reposicionar.
//
// QUANDO TIVER OS PNGS REAIS:
//   1. Salve em [public/strokes/] com os mesmos nomes (stroke-01.png etc)
//   2. Os SVGs placeholder ficam atrás dos PNGs (se ambos existirem,
//      o PNG ganha porque next/static-files prioriza extensão exata).
//   3. Se quiser nomes diferentes, edite `src` aqui.
//
// PARÂMETROS:
//   src             — caminho dentro de /public
//   top, left       — posição em CSS (ex: "20%", "calc(30% + 40px)")
//   size            — largura (height = auto)
//   rotate          — rotação base em graus
//   parallaxAmount  — quanto desloca por px de scroll (0.05 a 0.25 é o ponto)
//                     POSITIVO = movimento natural (desce com scroll down)
//                     NEGATIVO = parallax invertido (sobe com scroll down)
//   idleFloat       — amplitude em px do bob infinito quando parado
//   idleDuration    — segundos do ciclo idle
//   idleDelay       — defasagem inicial pra strokes não pulsarem em uníssono
//   hideOnMobile    — some abaixo de 768px (opcional)
//   opacity         — 0–1, default 0.85
// =====================================================================

export type StrokeConfig = {
  src: string;
  top: string;
  left: string;
  size: string;
  rotate?: number;
  parallaxAmount?: number;
  idleFloat?: number;
  idleDuration?: number;
  idleDelay?: number;
  hideOnMobile?: boolean;
  opacity?: number;
};

export const STROKES: StrokeConfig[] = [
  // --- Hero · canto superior direito (acima do placeholder Ingrid) ---
  {
    src: "/strokes/stroke-01.svg",
    top: "8%",
    left: "82%",
    size: "120px",
    rotate: -12,
    parallaxAmount: -0.15,
    idleFloat: 10,
    idleDuration: 6,
    idleDelay: 0,
    hideOnMobile: false,
  },
  // --- Hero · esquerda, abaixo dos CTAs ---
  {
    src: "/strokes/stroke-02.svg",
    top: "16%",
    left: "4%",
    size: "90px",
    rotate: 8,
    parallaxAmount: 0.18,
    idleFloat: 8,
    idleDuration: 7,
    idleDelay: 1.2,
    hideOnMobile: true,
  },
  // --- Entre Reconhecimento e Sobre ---
  {
    src: "/strokes/stroke-03.svg",
    top: "32%",
    left: "88%",
    size: "100px",
    rotate: 20,
    parallaxAmount: -0.12,
    idleFloat: 12,
    idleDuration: 8,
    idleDelay: 2.5,
    hideOnMobile: false,
  },
  // --- Sobre · ao lado do manifesto ---
  {
    src: "/strokes/stroke-04.svg",
    top: "40%",
    left: "6%",
    size: "80px",
    rotate: -25,
    parallaxAmount: 0.2,
    idleFloat: 9,
    idleDuration: 5.5,
    idleDelay: 0.8,
    hideOnMobile: true,
  },
  // --- Especialidades · acima do bento, à direita ---
  {
    src: "/strokes/stroke-05.svg",
    top: "52%",
    left: "92%",
    size: "110px",
    rotate: 5,
    parallaxAmount: -0.18,
    idleFloat: 11,
    idleDuration: 7.5,
    idleDelay: 3,
    hideOnMobile: false,
  },
  // --- Como Funciona · entre cards ---
  {
    src: "/strokes/stroke-06.svg",
    top: "63%",
    left: "10%",
    size: "85px",
    rotate: 30,
    parallaxAmount: 0.15,
    idleFloat: 8,
    idleDuration: 6.5,
    idleDelay: 1.8,
    hideOnMobile: true,
  },
  // --- Equipe · acima do avatar Ingrid ---
  {
    src: "/strokes/stroke-01.svg",
    top: "72%",
    left: "85%",
    size: "95px",
    rotate: -18,
    parallaxAmount: -0.14,
    idleFloat: 10,
    idleDuration: 7,
    idleDelay: 4,
    hideOnMobile: false,
    opacity: 0.6,
  },
  // --- FAQ · canto esquerdo ---
  {
    src: "/strokes/stroke-03.svg",
    top: "85%",
    left: "5%",
    size: "75px",
    rotate: 12,
    parallaxAmount: 0.17,
    idleFloat: 8,
    idleDuration: 6,
    idleDelay: 2,
    hideOnMobile: true,
    opacity: 0.7,
  },
];
