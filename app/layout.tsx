import type { Metadata } from "next";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import { medicalClinicJsonLd } from "@/lib/jsonld";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

// =====================================================================
// FONTES — Nefrance · stack clean para terapia infantil/neuropsicopedagogia
// ---------------------------------------------------------------------
// Plus Jakarta Sans (display): geométrica, redonda, acessível — passa
// acolhimento sem perder seriedade clínica. Referência do nicho.
// DM Sans (body): alto x-height, leitura tranquila em parágrafos longos.
// Geist Mono: assinatura mínima nos eyebrows "01 · Seção".
// Trocar aqui se quiser testar outra família (ex: Outfit, Manrope).
// =====================================================================

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});

const mono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-mono",
  weight: "100 900",
  display: "swap",
});

// =====================================================================
// SEO / METADATA — editar título, descrição e keywords aqui
// =====================================================================
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Instituto Nefrance · Neuropsicopedagogia e Reforço Escolar em Goiânia",
    template: "%s · Instituto Nefrance",
  },
  description:
    "Clínica multidisciplinar especializada em TDAH, TEA, dislexia e dificuldades de aprendizagem. Setor Bela Vista, Goiânia.",
  keywords: [
    "neuropsicopedagogia Goiânia",
    "psicóloga infantil Goiânia",
    "TDAH crianças",
    "TEA autismo",
    "dislexia",
    "reforço escolar especializado",
    "Setor Bela Vista",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Instituto Nefrance",
    title:
      "Instituto Nefrance · Neuropsicopedagogia e Reforço Escolar em Goiânia",
    description:
      "Avaliação e intervenção em dificuldades de aprendizagem para crianças e adolescentes neurodivergentes.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instituto Nefrance",
    description:
      "Avaliação e intervenção em dificuldades de aprendizagem. Goiânia.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalClinicJsonLd()),
          }}
        />
      </body>
    </html>
  );
}
