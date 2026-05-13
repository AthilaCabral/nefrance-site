import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProvaSocial } from "@/components/sections/ProvaSocial";
import { Reconhecimento } from "@/components/sections/Reconhecimento";
import { Sobre } from "@/components/sections/Sobre";
import { Especialidades } from "@/components/sections/Especialidades";
import { ComoFunciona } from "@/components/sections/ComoFunciona";
import { Equipe } from "@/components/sections/Equipe";
import { ParaAsMaes } from "@/components/sections/ParaAsMaes";
import { FAQ } from "@/components/sections/FAQ";
import { Contato } from "@/components/sections/Contato";
import { FloatingStrokes } from "@/components/decor/FloatingStrokes";

// =====================================================================
// HOME · landing principal
// ---------------------------------------------------------------------
// <main relative> é OBRIGATÓRIO pra <FloatingStrokes> ancorar com
// position:absolute inset-0 e scrollar junto com o conteúdo.
// Strokes ficam ATRÁS do conteúdo das sections (z-0 vs z-1 do grão).
// Editar quais strokes aparecem: [lib/strokes.ts → STROKES].
// =====================================================================

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <FloatingStrokes />
        <Hero />
        <ProvaSocial />
        <Reconhecimento />
        <Sobre />
        <Especialidades />
        <ComoFunciona />
        <Equipe />
        <ParaAsMaes />
        <FAQ />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
