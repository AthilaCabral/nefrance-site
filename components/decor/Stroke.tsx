"use client";

import { memo } from "react";
import {
  motion,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { StrokeConfig } from "@/lib/strokes";

// =====================================================================
// STROKE · Elemento decorativo flutuante individual
// ---------------------------------------------------------------------
// Composição em DUAS camadas (resolve conflito de transforms):
//   - <motion.div outer>  → reage ao scroll (y baseado em scrollY * factor)
//   - <motion.div inner>  → idle infinito (y + rotate em loop)
// Por que duas: framer-motion compõe transforms quando aninhados,
// permitindo idle + scroll acontecerem juntos sem um sobrescrever o outro.
//
// Performance: memoizado (re-render só quando props mudam), pointer-events
// none, GPU-accelerated (transform only), no layout reflow.
// =====================================================================

type StrokeProps = StrokeConfig & {
  scrollY: MotionValue<number>;
};

function StrokeImpl({
  src,
  top,
  left,
  size,
  rotate = 0,
  parallaxAmount = 0.1,
  idleFloat = 8,
  idleDuration = 6,
  idleDelay = 0,
  hideOnMobile = false,
  opacity = 0.85,
  scrollY,
}: StrokeProps) {
  const reduce = useReducedMotion();

  // Translate Y baseado em scroll. -X * factor inverte direção em strokes
  // configurados com parallaxAmount negativo.
  // Range é amplo (-200..200) pra cobrir até scrolls longos sem clamp.
  const y = useTransform(
    scrollY,
    [0, 3000],
    reduce ? [0, 0] : [0, 3000 * parallaxAmount]
  );

  return (
    <motion.div
      aria-hidden
      style={{
        position: "absolute",
        top,
        left,
        width: size,
        height: size,
        y,
        opacity,
        willChange: "transform",
      }}
      className={`pointer-events-none select-none ${hideOnMobile ? "hidden md:block" : ""}`}
    >
      <motion.div
        className="w-full h-full"
        initial={{ y: 0, rotate }}
        animate={
          reduce
            ? { y: 0, rotate }
            : {
                y: [0, -idleFloat, 0, idleFloat, 0],
                rotate: [rotate - 2, rotate + 2, rotate - 1, rotate + 1, rotate - 2],
              }
        }
        transition={{
          duration: idleDuration,
          repeat: reduce ? 0 : Infinity,
          ease: "easeInOut",
          delay: idleDelay,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          className="w-full h-full object-contain"
          draggable={false}
          loading="lazy"
        />
      </motion.div>
    </motion.div>
  );
}

export const Stroke = memo(StrokeImpl);
