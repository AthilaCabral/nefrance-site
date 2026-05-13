"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/constants";
import { Reveal } from "../ui/Reveal";

// =====================================================================
// FAQ · Editorial Split + Acordeão double-bezel-soft
// ---------------------------------------------------------------------
// Editar perguntas/respostas em [lib/constants.ts → FAQ_ITEMS].
// Uma única pergunta aberta por vez (open === i).
// =====================================================================

const SOFT_EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      aria-label="Perguntas frequentes"
      className="bg-canvas py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        {/* Left rail editorial */}
        <Reveal className="md:col-span-4 md:sticky md:top-32 md:self-start">
          <span className="eyebrow-pill">08 · Dúvidas frequentes</span>
          <h2
            className="mt-8 font-display font-semibold text-ink tracking-[-0.035em]"
            style={{ fontSize: "clamp(36px, 4.5vw, 64px)", lineHeight: 1.02 }}
          >
            O que você <span className="text-petrol">precisa saber.</span>
          </h2>
          <p className="mt-8 font-body text-body-lg text-stone leading-relaxed">
            Não achou sua dúvida? Mande no WhatsApp — respondemos em até 1 dia
            útil.
          </p>
        </Reveal>

        {/* Acordeão dentro de double-bezel */}
        <Reveal delay={0.1} className="md:col-span-8">
          <div className="bezel">
            <div className="bezel-inner divide-y divide-ink/8">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = open === i;
                return (
                  <div key={item.q}>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${i}`}
                      className="group w-full text-left p-6 md:p-8 flex items-start gap-4 md:gap-6 hover:bg-canvas-warm/40 transition-colors duration-400 ease-soft"
                    >
                      <span className="font-mono text-eyebrow text-petrol tabular-nums shrink-0 pt-1 w-10">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="flex-1 font-display font-medium text-ink leading-tight tracking-[-0.025em]"
                        style={{ fontSize: "clamp(18px, 2vw, 24px)" }}
                      >
                        {item.q}
                      </span>
                      <motion.span
                        aria-hidden
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.5, ease: SOFT_EASE }}
                        className="shrink-0 flex h-9 w-9 items-center justify-center rounded-full bg-ink/5 group-hover:bg-ink/10 transition-colors duration-400 ease-soft"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={`faq-answer-${i}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: SOFT_EASE }}
                          className="overflow-hidden"
                        >
                          <p className="pl-6 md:pl-8 pr-6 md:pr-20 pb-7 md:pb-9 md:ml-16 font-body text-body-lg text-stone leading-relaxed">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
