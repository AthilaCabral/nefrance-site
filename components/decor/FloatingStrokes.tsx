"use client";

import { useScroll, useSpring } from "framer-motion";
import { Stroke } from "./Stroke";
import { STROKES } from "@/lib/strokes";

// =====================================================================
// FLOATING STROKES · Container orquestrador
// ---------------------------------------------------------------------
// Lê o scrollY global UMA vez aqui, suaviza com useSpring, passa pra
// cada <Stroke />. Cada stroke deriva seu próprio transform via
// useTransform sobre esse motion value compartilhado — leve em
// performance porque framer-motion subscreve via getter.
//
// Layout:
//   position: absolute (inset-0) DENTRO do <main> da página.
//   Scrolla junto com a página (não é fixed).
//   z-index 0 = atrás do conteúdo (que é z-2 pelo grão).
//   pointer-events: none = não interfere em clique/hover.
//
// Editar quais strokes aparecem e onde: [lib/strokes.ts → STROKES].
// =====================================================================

export function FloatingStrokes() {
  const { scrollY } = useScroll();

  // Suaviza o scrollY pra evitar twitch no parallax — damping alto
  // pra movimento orgânico, stiffness médio.
  const smoothScrollY = useSpring(scrollY, {
    damping: 50,
    stiffness: 400,
    mass: 0.5,
  });

  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {STROKES.map((config, i) => (
        <Stroke key={`${config.src}-${i}`} {...config} scrollY={smoothScrollY} />
      ))}
    </div>
  );
}
