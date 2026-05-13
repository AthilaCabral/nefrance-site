import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/Button";

// =====================================================================
// 404 · Página não encontrada · Soft Structuralism
// =====================================================================

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[100dvh] bg-canvas flex items-center justify-center px-6 pt-40 pb-32">
        <div className="text-center max-w-xl">
          <span className="eyebrow-pill">404 · Página não encontrada</span>
          <h1
            className="mt-10 font-display font-semibold text-ink tracking-[-0.04em]"
            style={{ fontSize: "clamp(48px, 8vw, 96px)", lineHeight: 0.98 }}
          >
            Algumas histórias <span className="text-petrol">ainda estão por escrever.</span>
          </h1>
          <p className="mt-8 font-body text-body-lg text-stone leading-relaxed">
            Você chegou num caminho que não existe — ou ainda não.
          </p>
          <div className="mt-12 flex justify-center">
            <Button href="/" size="lg">
              Voltar ao início
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
