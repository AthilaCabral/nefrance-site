"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONTACT, WHATSAPP_CONTATO, WHATSAPP_GERAL } from "@/lib/constants";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

// =====================================================================
// CONTATO · Editorial Split · Form double-bezel + Endereço/Mapa
// ---------------------------------------------------------------------
// Form NÃO submete para servidor — monta mensagem e abre WhatsApp.
// Endereço/telefone em [lib/constants.ts → CONTACT].
// =====================================================================

const SOFT_EASE: [number, number, number, number] = [0.32, 0.72, 0, 1];

const MAPS_QUERY = encodeURIComponent(
  `R. S-4, 332 - Setor Bela Vista, Goiânia - GO, ${CONTACT.addressCep}`
);

export function Contato() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") || "").trim();
    const telefone = String(data.get("telefone") || "").trim();
    const idade = String(data.get("idade") || "").trim();
    const preocupacao = String(data.get("preocupacao") || "").trim();

    const linhas = [
      `Olá! Vim pelo site do Instituto Nefrance.`,
      ``,
      `Nome: ${nome}`,
      `WhatsApp: ${telefone}`,
      idade ? `Idade do(a) filho(a): ${idade}` : null,
      preocupacao ? `Preocupação: ${preocupacao}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${CONTACT.phoneIntl}?text=${encodeURIComponent(linhas)}`;
    setStatus("sending");
    window.open(url, "_blank", "noopener,noreferrer");
    window.setTimeout(() => setStatus("sent"), 600);
  }

  return (
    <section
      id="contato"
      aria-label="Agendar avaliação"
      className="bg-canvas-warm py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* ============== FORM ============== */}
        <Reveal className="lg:col-span-7">
          <span className="eyebrow-pill">09 · Agendamento</span>
          <h2
            className="mt-8 font-display font-semibold text-ink tracking-[-0.035em]"
            style={{ fontSize: "clamp(32px, 4.5vw, 64px)", lineHeight: 1.02 }}
          >
            Conte um pouco.{" "}
            <span className="text-petrol">A gente responde hoje.</span>
          </h2>

          <div className="mt-12 bezel">
            <form
              onSubmit={handleSubmit}
              className="bezel-inner p-8 md:p-10 space-y-6"
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field
                  label="Seu nome"
                  name="nome"
                  required
                  placeholder="Como podemos te chamar?"
                  autoComplete="name"
                />
                <Field
                  label="WhatsApp"
                  name="telefone"
                  required
                  placeholder="(62) 9 0000-0000"
                  type="tel"
                  autoComplete="tel"
                />
              </div>
              <Field
                label="Idade do(a) filho(a)"
                name="idade"
                placeholder="Ex: 8 anos"
                helper="Opcional"
              />
              <FieldTextarea
                label="Principal preocupação"
                name="preocupacao"
                placeholder="Ex: dificuldade de concentração na escola, suspeita de TDAH, atraso na alfabetização..."
                helper="Opcional · quanto mais contexto, melhor"
              />

              <div className="flex flex-col sm:flex-row gap-4 sm:items-center pt-4">
                <Button type="submit" size="lg" disabled={status === "sending"}>
                  {status === "sending" ? "Abrindo WhatsApp…" : "Quero ser contatada"}
                </Button>
                <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-stone">
                  ou direto:&nbsp;
                  <a
                    href={WHATSAPP_GERAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-petrol hover:underline underline-offset-4"
                  >
                    {CONTACT.phone}
                  </a>
                </span>
              </div>

              <AnimatePresence>
                {status === "sent" && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: SOFT_EASE }}
                    className="font-mono text-eyebrow uppercase tracking-eyebrow text-sage"
                    role="status"
                  >
                    Obrigado! Abrimos o WhatsApp em outra aba.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>
        </Reveal>

        {/* ============== ENDEREÇO + MAPA ============== */}
        <Reveal delay={0.15} className="lg:col-span-5 lg:pt-32">
          <div className="bezel">
            <div className="bezel-inner">
              <div className="p-8 md:p-10 border-b border-ink/8">
                <span className="eyebrow-pill">Onde estamos</span>
                <address className="mt-6 not-italic font-display font-medium text-ink text-h3-lg leading-snug tracking-[-0.015em]">
                  {CONTACT.addressLine}
                </address>
                <p className="mt-3 font-body text-body text-stone leading-relaxed">
                  {CONTACT.addressNeighborhood} · {CONTACT.addressCity}/
                  {CONTACT.addressState}
                  <br />
                  CEP {CONTACT.addressCep}
                </p>
                <a
                  href={WHATSAPP_CONTATO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-3 font-mono text-eyebrow uppercase tracking-eyebrow text-terra hover:text-ink min-h-[44px] transition-colors duration-500 ease-soft"
                >
                  {CONTACT.phone} · WhatsApp
                  <span
                    aria-hidden
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-terra/10 group-hover:bg-ink/5 group-hover:translate-x-1 group-hover:-translate-y-[1px] transition-all duration-500 ease-soft"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M7 7h10v10" />
                    </svg>
                  </span>
                </a>
              </div>
              <div
                className="relative w-full bg-ink/5"
                style={{ aspectRatio: "4 / 3" }}
              >
                <iframe
                  title="Localização do Instituto Nefrance no Google Maps"
                  src={`https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full grayscale-[60%] contrast-[0.95] border-0"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------
// Field · input pílula com hairline embutida
// ---------------------------------------------------------------------
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  helper,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  helper?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-stone">
        {label} {required && <span className="text-terra" aria-hidden>*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="mt-3 w-full rounded-2xl bg-canvas border border-ink/8 text-ink py-4 px-5 font-body text-body-lg placeholder:text-stone/40 focus:outline-none focus:border-petrol/50 focus:ring-2 focus:ring-petrol/15 transition-all duration-400 ease-soft"
      />
      {helper && (
        <span className="mt-2 block font-mono text-[10px] uppercase tracking-eyebrow text-stone/60">
          {helper}
        </span>
      )}
    </label>
  );
}

function FieldTextarea({
  label,
  name,
  placeholder,
  helper,
}: {
  label: string;
  name: string;
  placeholder?: string;
  helper?: string;
}) {
  return (
    <label className="block">
      <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-stone">
        {label}
      </span>
      <textarea
        name={name}
        rows={4}
        placeholder={placeholder}
        className="mt-3 w-full rounded-2xl bg-canvas border border-ink/8 text-ink py-4 px-5 font-body text-body-lg placeholder:text-stone/40 focus:outline-none focus:border-petrol/50 focus:ring-2 focus:ring-petrol/15 transition-all duration-400 ease-soft resize-none"
      />
      {helper && (
        <span className="mt-2 block font-mono text-[10px] uppercase tracking-eyebrow text-stone/60">
          {helper}
        </span>
      )}
    </label>
  );
}
