// =====================================================================
// SITE_URL · resolução automática de URL canônica
// ---------------------------------------------------------------------
// Resolve a URL absoluta do site sem hardcode. Ordem de prioridade:
//
//   1. NEXT_PUBLIC_SITE_URL  — quando o domínio próprio for registrado,
//      setar essa var no painel da Vercel (ex: https://nefrance.com.br)
//   2. VERCEL_URL            — Vercel injeta automaticamente em preview
//      e production builds (ex: nefrance-site.vercel.app)
//   3. http://localhost:3000 — fallback pra dev local
//
// Esse helper é importado por:
//   - app/layout.tsx → metadataBase + OpenGraph
//   - lib/jsonld.ts  → Schema.org url + image
// =====================================================================

export const SITE_URL: string =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
  "http://localhost:3000";
