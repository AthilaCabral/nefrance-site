"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

// =====================================================================
// REVEAL · Scroll-trigger entrance · Soft Structuralism
// ---------------------------------------------------------------------
// Entrada padrão: translate-y + blur leve + opacity, com easing
// cubic-bezier Apple-tier. 800ms é o ponto onde a transição vira
// "intencional" sem soar lenta.
// =====================================================================

type MotionTag = "div" | "li" | "section" | "article" | "header" | "aside" | "p" | "ul" | "ol";

const SOFT_EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: MotionTag;
  y?: number;
  duration?: number;
};

export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
  y = 24,
  duration = 0.9,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as] as React.ComponentType<HTMLMotionProps<MotionTag>>;

  return (
    <Tag
      className={className}
      initial={{
        opacity: 0,
        y: reduce ? 0 : y,
        filter: reduce ? "blur(0px)" : "blur(8px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, ease: SOFT_EASE, delay }}
    >
      {children}
    </Tag>
  );
}
