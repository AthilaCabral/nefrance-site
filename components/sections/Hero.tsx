"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Button } from "../ui/Button";
import { WHATSAPP_GERAL } from "@/lib/constants";

// =====================================================================
// HERO · Editorial Split + Placeholder Ingrid + Soft Structuralism
// ---------------------------------------------------------------------
// LADO ESQUERDO:  tipografia massiva + subheadline + CTA + pílula
//                 "resposta em 1 dia útil" (era um card, virou pílula).
// LADO DIREITO:   PLACEHOLDER VERTICAL pra foto recortada da Ingrid (PNG).
//                 Ver bloco  ↓ TROCAR POR PNG DA INGRID AQUI ↓  abaixo.
//                 Aspect ratio 3:4 (retrato), centralizada, com sombra
//                 soft + double-bezel sutil. Recomendado: PNG transparente
//                 ~1200×1600px da pessoa em pé, fundo já removido.
// =====================================================================

const SOFT_EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, -100]
  );
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    reduce ? [1, 1, 1] : [1, 0.5, 0]
  );

  // Parallax suave na figura da Ingrid — sobe levemente conforme rola
  const figureY = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [0, -60]
  );

  return (
    <section
      ref={ref}
      aria-label="Apresentação Instituto Nefrance"
      className="relative bg-canvas overflow-hidden pt-40 md:pt-48 pb-32 md:pb-40 min-h-[100dvh] flex items-center"
    >
      {/* Glow ambiente sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/4 -right-1/4 h-[800px] w-[800px] rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle at center, rgba(139,157,131,0.18) 0%, rgba(139,157,131,0) 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-1/4 -left-1/4 h-[600px] w-[600px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle at center, rgba(201,127,90,0.12) 0%, rgba(201,127,90,0) 60%)",
        }}
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative w-full mx-auto max-w-[1400px] px-6 md:px-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ============== LADO ESQUERDO · TIPOGRAFIA EDITORIAL ============== */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: SOFT_EASE }}
            >
              <span className="eyebrow-pill">
                Instituto Nefrance · Goiânia
              </span>
            </motion.div>

            <h1
              className="mt-10 md:mt-12 font-display font-semibold text-ink tracking-[-0.035em]"
              style={{ fontSize: "clamp(48px, 8vw, 112px)", lineHeight: 0.98 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: SOFT_EASE, delay: 0.15 }}
              >
                Aprender {/* ← COPY · primeira linha */}
              </motion.span>
              <motion.span
                className="block text-petrol"
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, ease: SOFT_EASE, delay: 0.3 }}
              >
                sem dor existe. {/* ← COPY · segunda linha */}
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: SOFT_EASE, delay: 0.55 }}
              className="mt-10 md:mt-12 font-body text-body-lg md:text-h3 text-stone leading-relaxed max-w-xl"
            >
              {/* ← COPY · subheadline */}
              Avaliação e intervenção em TDAH, TEA, dislexia e dificuldades de
              aprendizagem. Para a criança — e para a mãe que cuida dela.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: SOFT_EASE, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center"
            >
              <Button href={WHATSAPP_GERAL} external size="lg">
                Agendar avaliação
              </Button>
              <a
                href="#como-funciona"
                className="group inline-flex items-center gap-3 font-mono text-eyebrow uppercase tracking-eyebrow text-ink/70 hover:text-ink px-3 py-3 min-h-[44px] transition-colors duration-400 ease-soft"
              >
                Como funciona
                <span
                  aria-hidden
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-ink/5 group-hover:bg-ink/10 group-hover:translate-y-[2px] transition-all duration-500 ease-soft"
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M5 13l7 7 7-7" />
                  </svg>
                </span>
              </a>
            </motion.div>

            {/* Pílula "resposta em" — informação que estava no card antigo */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: SOFT_EASE, delay: 0.85 }}
              className="mt-12 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-surface ring-hairline"
            >
              <span
                aria-hidden
                className="relative flex h-2 w-2"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-petrol opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-petrol" />
              </span>
              <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-stone">
                Resposta em até 1 dia útil
              </span>
              <span className="h-3 w-px bg-ink/15" aria-hidden />
              <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-petrol">
                Sem chatbot
              </span>
            </motion.div>
          </div>

          {/* ============== LADO DIREITO · PLACEHOLDER FOTO DA INGRID ============== */}
          <motion.aside
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.1, ease: SOFT_EASE, delay: 0.85 }}
            style={{ y: figureY }}
            className="lg:col-span-5 lg:col-start-8 relative"
            aria-label="Foto da fundadora"
          >
            {/*
              ================================================================
              ↓ TROCAR POR PNG DA INGRID AQUI ↓
              Quando o PNG estiver pronto, salvar em [public/team/ingrid.png]
              (recomendado: PNG transparente, 1200×1600px, fundo removido,
              pessoa em pé centralizada). Depois trocar o bloco abaixo por:

              <Image
                src="/team/ingrid.png"
                alt="Ingrid Nefrance — Neuropsicopedagoga e fundadora"
                width={800}
                height={1066}
                priority
                className="w-full h-auto select-none pointer-events-none"
                draggable={false}
              />

              E remover o bloco entre os marcadores "PLACEHOLDER START" e
              "PLACEHOLDER END".
              ================================================================
            */}

            {/* PLACEHOLDER START — Remover quando o PNG estiver pronto */}
            <div
              className="relative w-full mx-auto max-w-[440px] lg:max-w-none"
              style={{ aspectRatio: "3 / 4" }}
            >
              {/* "Plataforma" sutil atrás — sugere chão sem ser explícita */}
              <div
                aria-hidden
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] h-12 rounded-[50%] blur-2xl bg-petrol/15"
              />

              {/* Frame double-bezel translúcido só pra delimitar a área */}
              <div
                className="absolute inset-0 rounded-[2.5rem] border border-dashed border-petrol/30 bg-gradient-to-b from-surface/40 to-canvas-warm/40 flex flex-col items-center justify-center gap-4 p-8 text-center"
                aria-hidden
              >
                {/* Pictograma de pessoa em outline */}
                <svg
                  viewBox="0 0 64 96"
                  width="80"
                  height="120"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-petrol/40"
                >
                  <circle cx="32" cy="16" r="9" />
                  <path d="M16 92 Q16 50 32 42 Q48 50 48 92" />
                  <path d="M22 64 L18 88" opacity="0.6" />
                  <path d="M42 64 L46 88" opacity="0.6" />
                </svg>
                <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-petrol/70">
                  ↓ Foto da Ingrid ↓
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone/60 max-w-[22ch] leading-relaxed">
                  PNG transparente · pessoa em pé · centralizada
                </span>
              </div>
            </div>
            {/* PLACEHOLDER END */}
          </motion.aside>
        </div>
      </motion.div>

      {/* ============== SCROLL CUE ============== */}
      <ScrollCue progress={scrollYProgress} reduce={!!reduce} />
    </section>
  );
}

function ScrollCue({
  progress,
  reduce,
}: {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  reduce: boolean;
}) {
  const opacity = useTransform(progress, [0, 0.15], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: SOFT_EASE, delay: 1.2 }}
      className="pointer-events-none absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      aria-hidden
    >
      <span className="font-mono text-[9px] uppercase tracking-[0.28em] text-stone/70">
        Role para conhecer
      </span>
      <span className="relative block h-14 w-px bg-ink/10 overflow-hidden">
        <motion.span
          className="absolute inset-x-0 top-0 h-1/2 origin-top bg-petrol"
          initial={{ scaleY: 0, y: 0 }}
          animate={
            reduce
              ? { scaleY: 1, y: 0 }
              : { scaleY: [0, 1, 1, 0], y: ["0%", "0%", "100%", "100%"] }
          }
          transition={{
            duration: 2.4,
            repeat: reduce ? 0 : Infinity,
            ease: [0.76, 0, 0.24, 1],
            times: [0, 0.4, 0.7, 1],
          }}
        />
      </span>
    </motion.div>
  );
}
