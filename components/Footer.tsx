import Link from "next/link";
import { CONTACT, NAV_ITEMS, WHATSAPP_CONTATO } from "@/lib/constants";

// =====================================================================
// FOOTER · Nefrance · Soft Structuralism (dark plate)
// ---------------------------------------------------------------------
// Fundo ink + wordmark gigante + 3 colunas (marca / nav / contato).
// LOGO PNG: bloco comentado pronto pra <Image>.
// Editar dados em [lib/constants.ts → CONTACT].
// =====================================================================

export function Footer() {
  return (
    <footer className="relative bg-ink text-canvas/75 overflow-hidden">
      {/* Glow ambiente terra no canto */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-1/2 -right-1/4 h-[800px] w-[800px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle at center, rgba(201,127,90,0.4) 0%, rgba(201,127,90,0) 60%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 py-24 md:py-32">
        {/* ============== WORDMARK MASSIVO NO TOPO ============== */}
        <div className="border-b border-canvas/10 pb-12 md:pb-16">
          {/* ↓ TROCAR POR PNG AQUI ↓ — descomente quando o arquivo existir
          <Image
            src="/logo-light.png"
            alt="Instituto Nefrance"
            width={320}
            height={80}
            className="h-20 w-auto"
          />
          */}
          <p
            className="font-display font-semibold text-canvas leading-none tracking-[-0.045em]"
            style={{ fontSize: "clamp(64px, 14vw, 220px)" }}
          >
            nefrance
          </p>
          <p className="mt-6 font-display font-medium text-canvas/55 italic-none tracking-[-0.02em] text-h2 max-w-xl leading-snug">
            Educação com propósito. Cuidado com método.
          </p>
        </div>

        {/* ============== 3 COLUNAS ============== */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Coluna · selo institucional */}
          <div className="md:col-span-4">
            <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-terra">
              Instituto
            </span>
            <p className="mt-6 font-body text-body text-canvas/65 leading-relaxed max-w-sm">
              Clínica multidisciplinar especializada em TDAH, TEA, dislexia e
              dificuldades de aprendizagem. Para crianças, adolescentes e a
              mãe que cuida.
            </p>
          </div>

          {/* Coluna · navegação */}
          <nav className="md:col-span-4" aria-label="Rodapé">
            <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-terra">
              Navegação
            </span>
            <ul className="mt-6 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-3 font-body text-body-lg text-canvas/75 hover:text-canvas transition-colors duration-400 ease-soft"
                  >
                    <span className="font-mono text-[10px] tabular-nums text-canvas/30 group-hover:text-terra transition-colors duration-400 ease-soft">
                      ↗
                    </span>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/cha-das-maes"
                  className="group inline-flex items-center gap-3 font-body text-body-lg text-canvas/75 hover:text-canvas transition-colors duration-400 ease-soft"
                >
                  <span className="font-mono text-[10px] tabular-nums text-canvas/30 group-hover:text-terra transition-colors duration-400 ease-soft">
                    ↗
                  </span>
                  Chá das Mães
                </Link>
              </li>
            </ul>
          </nav>

          {/* Coluna · contato */}
          <div className="md:col-span-4">
            <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-terra">
              Contato
            </span>
            <address className="mt-6 not-italic space-y-4 font-body text-body text-canvas/65 leading-relaxed">
              <p>
                {CONTACT.addressLine}
                <br />
                {CONTACT.addressNeighborhood} · {CONTACT.addressCity}/
                {CONTACT.addressState}
                <br />
                CEP {CONTACT.addressCep}
              </p>
              <p>
                <a
                  href={WHATSAPP_CONTATO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-medium text-canvas text-h3 hover:text-terra tracking-[-0.015em] transition-colors duration-400 ease-soft"
                >
                  {CONTACT.phone}
                </a>
              </p>
            </address>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 font-mono text-eyebrow uppercase tracking-eyebrow text-canvas/60 hover:text-canvas transition-colors duration-400 ease-soft"
            >
              @institutonefrance
              <span
                aria-hidden
                className="flex h-8 w-8 items-center justify-center rounded-full bg-canvas/5 group-hover:bg-terra/15 group-hover:translate-x-[2px] transition-all duration-500 ease-soft"
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* ============== ASSINATURA LEGAL ============== */}
        <div className="mt-20 pt-8 border-t border-canvas/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 font-mono text-eyebrow uppercase tracking-eyebrow text-canvas/35">
          <p>© 2026 Instituto Nefrance · Todos os direitos reservados</p>
          <p>CRP · Profissionais devidamente registrados</p>
        </div>
      </div>
    </footer>
  );
}
