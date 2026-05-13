"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

// =====================================================================
// ACCORDION · genérico (usado em listas Q&A simples)
// ---------------------------------------------------------------------
// A FAQ principal renderiza o próprio acordeão inline para um layout
// editorial mais rico. Este componente fica como utilidade reusável.
// =====================================================================

type Item = { q: string; a: string };

export function Accordion({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-sand/60 border-t border-b border-sand/60">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <li key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-7 text-left group"
            >
              <span className="font-display text-h3 md:text-h3-lg text-ink font-medium leading-snug tracking-[-0.01em]">
                {item.q}
              </span>
              <span
                className={`mt-1 font-mono text-h2 shrink-0 text-petrol transition-transform duration-400 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-7 pr-12 font-body text-body text-stone leading-relaxed">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
