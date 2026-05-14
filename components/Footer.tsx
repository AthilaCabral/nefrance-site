import Link from "next/link";
import {
  CONTACT,
  NAV_ITEMS,
  WHATSAPP_CONTATO,
} from "@/lib/constants";

// =====================================================================
// FOOTER · Nefrance · Soft Structuralism (dark plate)
// ---------------------------------------------------------------------
// Layout:
//   Linha 1 → wordmark sóbrio + tagline (uma linha)
//   Linha 2 → 4 colunas:
//             [SOBRE] [NAVEGAÇÃO] [CONTATO] [REDES (WhatsApp+Instagram)]
//   Linha 3 → assinatura legal
//
// Editar dados em [lib/constants.ts → CONTACT].
// LOGO PNG: bloco comentado pronto pra <Image> na linha 1.
// =====================================================================

export function Footer() {
  return (
    <footer className="relative bg-ink text-canvas/75 overflow-hidden">
      {/* Glow ambiente terra no canto superior direito */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle at center, rgba(201,127,90,0.4) 0%, rgba(201,127,90,0) 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-24">
        {/* ============== LINHA 1 · WORDMARK + TAGLINE ============== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-12 md:pb-14 border-b border-canvas/10">
          <div>
            {/* ↓ TROCAR POR PNG AQUI ↓ — descomente quando o arquivo existir
            <Image
              src="/logo-light.png"
              alt="Instituto Nefrance"
              width={180}
              height={40}
              className="h-10 w-auto"
            />
            */}
            <p
              className="font-display font-semibold text-canvas leading-none tracking-[-0.035em]"
              style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
            >
              nefrance
            </p>
            <p className="mt-2 font-mono text-eyebrow uppercase tracking-eyebrow text-canvas/50">
              instituto · goiânia
            </p>
          </div>

          <p className="font-body text-body-lg md:text-h3 text-canvas/70 leading-snug max-w-sm md:text-right">
            Educação com propósito.
            <br />
            Cuidado com método.
          </p>
        </div>

        {/* ============== LINHA 2 · 4 COLUNAS ============== */}
        <div className="mt-12 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12">
          {/* -------- Coluna 1 · Sobre -------- */}
          <div className="lg:col-span-4">
            <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-terra">
              Sobre
            </span>
            <p className="mt-5 font-body text-body text-canvas/70 leading-relaxed max-w-xs">
              Clínica multidisciplinar em Goiânia. Reunimos
              neuropsicopedagogia, psicologia infantil e reforço escolar
              especializado num só lugar — para a criança neurodivergente e
              para a mãe que cuida dela.
            </p>
            <p className="mt-5 font-mono text-eyebrow uppercase tracking-eyebrow text-canvas/40">
              Desde 2021 · +200 famílias
            </p>
          </div>

          {/* -------- Coluna 2 · Navegação -------- */}
          <nav className="lg:col-span-2" aria-label="Rodapé">
            <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-terra">
              Navegação
            </span>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 font-body text-body text-canvas/75 hover:text-canvas transition-colors duration-400 ease-soft"
                  >
                    <span
                      aria-hidden
                      className="font-mono text-[9px] text-canvas/25 group-hover:text-terra transition-colors duration-400 ease-soft"
                    >
                      ↗
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/cha-das-maes"
                  className="group inline-flex items-center gap-2 font-body text-body text-canvas/75 hover:text-canvas transition-colors duration-400 ease-soft"
                >
                  <span
                    aria-hidden
                    className="font-mono text-[9px] text-canvas/25 group-hover:text-terra transition-colors duration-400 ease-soft"
                  >
                    ↗
                  </span>
                  Chá das Mães
                </Link>
              </li>
            </ul>
          </nav>

          {/* -------- Coluna 3 · Contato -------- */}
          <div className="lg:col-span-3">
            <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-terra">
              Contato
            </span>
            <address className="mt-5 not-italic space-y-4 font-body text-body text-canvas/70 leading-relaxed">
              <p>
                {CONTACT.addressLine}
                <br />
                {CONTACT.addressNeighborhood}
                <br />
                {CONTACT.addressCity}/{CONTACT.addressState} · CEP{" "}
                {CONTACT.addressCep}
              </p>
            </address>
          </div>

          {/* -------- Coluna 4 · Redes (WhatsApp + Instagram em destaque) -------- */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-terra">
              Fale com a gente
            </span>

            <a
              href={WHATSAPP_CONTATO}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-3 flex items-center justify-between gap-3 rounded-2xl bg-canvas/[0.04] hover:bg-canvas/[0.08] border border-canvas/10 hover:border-canvas/20 px-5 py-4 transition-all duration-500 ease-soft"
            >
              <span className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-sage/15 text-sage group-hover:scale-105 transition-transform duration-500 ease-soft"
                >
                  {/* Ícone WhatsApp · light stroke */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </span>
                <span className="flex flex-col">
                  <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-canvas/55">
                    WhatsApp
                  </span>
                  <span className="font-display font-medium text-canvas text-[15px] tracking-[-0.01em] mt-0.5">
                    {CONTACT.phone}
                  </span>
                </span>
              </span>
              <span
                aria-hidden
                className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas/5 group-hover:bg-terra/20 group-hover:translate-x-[2px] group-hover:-translate-y-[1px] transition-all duration-500 ease-soft"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </a>

            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-2xl bg-canvas/[0.04] hover:bg-canvas/[0.08] border border-canvas/10 hover:border-canvas/20 px-5 py-4 transition-all duration-500 ease-soft"
            >
              <span className="flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-terra/15 text-terra group-hover:scale-105 transition-transform duration-500 ease-soft"
                >
                  {/* Ícone Instagram · light stroke */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </span>
                <span className="flex flex-col">
                  <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-canvas/55">
                    Instagram
                  </span>
                  <span className="font-display font-medium text-canvas text-[15px] tracking-[-0.01em] mt-0.5">
                    @institutonefrance
                  </span>
                </span>
              </span>
              <span
                aria-hidden
                className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas/5 group-hover:bg-terra/20 group-hover:translate-x-[2px] group-hover:-translate-y-[1px] transition-all duration-500 ease-soft"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* ============== LINHA 3 · ASSINATURA LEGAL ============== */}
        <div className="mt-16 pt-8 border-t border-canvas/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-mono text-eyebrow uppercase tracking-eyebrow text-canvas/35">
          <p>© 2026 Instituto Nefrance · Todos os direitos reservados</p>
          <p>CRP · Profissionais devidamente registrados</p>
        </div>
      </div>
    </footer>
  );
}
