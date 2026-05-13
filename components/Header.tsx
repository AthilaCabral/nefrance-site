"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, WHATSAPP_GERAL } from "@/lib/constants";
import { Button } from "./ui/Button";

// =====================================================================
// HEADER · Nefrance · Fluid Island Nav + Hamburger Morph
// ---------------------------------------------------------------------
// CLOSED:  pílula flutuante destacada do topo (mt-6, w-max, rounded-full,
//          glass + hairline + shadow soft).
// MOBILE OPEN: overlay full-screen (h-[100dvh]), staggered mask reveal
//          dos links com translate-y + opacity + delay 80ms cada.
// HAMBURGER: 2 lines → rotate-45/-rotate-45 com motion.
// LOGO PNG: bloco comentado pronto pra <Image>, ver  ↓ TROCAR POR PNG ↓.
// =====================================================================

const SOFT_EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava scroll quando overlay mobile estiver aberto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: SOFT_EASE, delay: 0.1 }}
          className="mx-auto mt-5 md:mt-6 flex w-max max-w-[calc(100%-1.5rem)] items-center gap-2 md:gap-3 rounded-full bg-canvas/70 px-2 py-2 md:px-3 backdrop-blur-xl pointer-events-auto"
          style={{
            boxShadow: scrolled
              ? "0 1px 2px rgba(31,58,61,0.05), 0 20px 60px -20px rgba(31,58,61,0.12)"
              : "0 1px 2px rgba(31,58,61,0.04), 0 8px 24px -8px rgba(31,58,61,0.06)",
            border: "1px solid rgba(31, 58, 61, 0.08)",
            transition: "box-shadow 600ms var(--ease-out-soft)",
          }}
        >
          {/* ============== LOGO / WORDMARK ============== */}
          <Link
            href="/"
            aria-label="Instituto Nefrance · Voltar para o início"
            className="flex items-center pl-3 pr-2 py-1.5 rounded-full hover:bg-ink/5 transition-colors duration-400 ease-soft"
          >
            {/* ↓ TROCAR POR PNG AQUI ↓ — descomente quando o arquivo existir
            <Image
              src="/logo.png"
              alt="Instituto Nefrance"
              width={132}
              height={32}
              priority
              className="h-8 w-auto"
            />
            */}
            <span className="font-display text-[17px] font-semibold text-ink tracking-[-0.035em] leading-none">
              nefrance
            </span>
            <span className="ml-2 hidden sm:inline-block h-3 w-px bg-ink/15" aria-hidden />
            <span className="ml-2 hidden sm:inline font-mono text-[9px] uppercase tracking-[0.22em] text-stone">
              instituto
            </span>
          </Link>

          {/* ============== NAV DESKTOP ============== */}
          <nav
            className="hidden lg:flex items-center gap-1 pl-2 pr-1 border-l border-ink/10"
            aria-label="Navegação principal"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 rounded-full font-body text-[14px] text-ink/70 hover:text-ink hover:bg-ink/5 transition-all duration-400 ease-soft"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* ============== CTA + TOGGLE MOBILE ============== */}
          <div className="flex items-center gap-2 pl-1">
            <Button
              href={WHATSAPP_GERAL}
              external
              size="md"
              className="hidden sm:inline-flex !h-10 !pl-5 !pr-1.5 !text-[10px]"
            >
              Agendar
            </Button>

            {/* Hamburger morph */}
            <button
              type="button"
              onClick={() => setOpen((s) => !s)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="mobile-overlay"
              className="lg:hidden relative flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 hover:bg-ink/10 transition-colors duration-400 ease-soft"
            >
              <motion.span
                className="absolute h-px w-4 bg-ink"
                animate={
                  open
                    ? { rotate: 45, y: 0 }
                    : { rotate: 0, y: -4 }
                }
                transition={{ duration: 0.5, ease: SOFT_EASE }}
              />
              <motion.span
                className="absolute h-px w-4 bg-ink"
                animate={
                  open
                    ? { rotate: -45, y: 0, opacity: 1 }
                    : { rotate: 0, y: 4, opacity: 1 }
                }
                transition={{ duration: 0.5, ease: SOFT_EASE }}
              />
            </button>
          </div>
        </motion.div>
      </header>

      {/* ============== MOBILE OVERLAY (full-screen, staggered) ============== */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: SOFT_EASE }}
            className="fixed inset-0 z-40 lg:hidden bg-canvas/95 backdrop-blur-2xl"
            style={{
              boxShadow: "inset 0 0 0 1px rgba(31,58,61,0.04)",
            }}
          >
            <nav
              className="relative h-full pt-32 pb-12 px-6 flex flex-col"
              aria-label="Navegação mobile"
            >
              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
                    transition={{
                      duration: 0.6,
                      ease: SOFT_EASE,
                      delay: 0.08 + i * 0.06,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="group flex items-center justify-between py-5 border-b border-ink/8"
                    >
                      <span className="font-display font-medium text-ink text-[36px] tracking-[-0.035em] leading-none">
                        {item.label}
                      </span>
                      <span
                        aria-hidden
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-ink/5 group-hover:bg-ink/10 group-hover:translate-x-[2px] transition-all duration-500 ease-soft"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: SOFT_EASE, delay: 0.5 }}
                className="mt-auto pt-10"
              >
                <Button
                  href={WHATSAPP_GERAL}
                  external
                  size="lg"
                  className="w-full justify-between"
                >
                  Agendar avaliação
                </Button>
                <p className="mt-6 font-mono text-eyebrow uppercase tracking-eyebrow text-stone text-center">
                  Setor Bela Vista · Goiânia
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
