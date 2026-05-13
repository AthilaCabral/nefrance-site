import { Reveal } from "../ui/Reveal";

// =====================================================================
// EQUIPE · Editorial Split · Ingrid + equipe ampliada
// ---------------------------------------------------------------------
// Cada profissional é um <article> com avatar-placeholder (initials)
// dentro de double-bezel + bio à direita.
// Para adicionar mais profissional: duplicar o componente <TeamMember>.
// =====================================================================

type TeamMemberProps = {
  index: number;
  role: string;
  name: string;
  title: string;
  bio: string;
  quote?: string;
  handle?: string;
  initials: string;
};

function TeamMember({
  index,
  role,
  name,
  title,
  bio,
  quote,
  handle,
  initials,
}: TeamMemberProps) {
  return (
    <Reveal as="article" delay={index * 0.12}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        {/* Avatar placeholder em double-bezel */}
        <div className="md:col-span-4">
          <div className="bezel">
            <div className="bezel-inner aspect-square flex items-center justify-center bg-gradient-to-br from-canvas-warm to-surface-soft">
              <span
                className="font-display font-semibold text-petrol/30 leading-none tracking-[-0.04em]"
                style={{ fontSize: "clamp(80px, 10vw, 144px)" }}
                aria-hidden
              >
                {initials}
              </span>
            </div>
          </div>
          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-mono text-eyebrow text-terra tabular-nums">
              0{index + 1}
            </span>
            <span className="font-mono text-eyebrow uppercase tracking-eyebrow text-stone">
              {role}
            </span>
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-8 md:pt-4">
          <h3
            className="font-display font-semibold text-ink tracking-[-0.035em]"
            style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: 1.0 }}
          >
            {name}
          </h3>
          <p className="mt-4 font-mono text-eyebrow uppercase tracking-eyebrow text-petrol">
            {title}
          </p>
          <p className="mt-8 font-body text-body-lg text-ink/85 leading-relaxed">
            {bio}
          </p>
          {quote && (
            <p className="mt-8 font-display font-medium text-stone leading-relaxed tracking-[-0.015em] pl-5 border-l-2 border-petrol/30">
              &ldquo;{quote}&rdquo;
            </p>
          )}
          {handle && (
            <a
              href={`https://www.instagram.com/${handle.replace("@", "")}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 font-mono text-eyebrow uppercase tracking-eyebrow text-terra hover:text-ink min-h-[44px] transition-colors duration-500 ease-soft"
            >
              {handle}
              <span
                aria-hidden
                className="flex h-8 w-8 items-center justify-center rounded-full bg-terra/10 group-hover:bg-ink/5 group-hover:translate-x-1 group-hover:-translate-y-[1px] transition-all duration-500 ease-soft"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </span>
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function Equipe() {
  return (
    <section
      id="equipe"
      aria-label="Quem caminha com a sua família"
      className="bg-canvas-warm py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <Reveal className="max-w-3xl">
          <span className="eyebrow-pill">06 · Equipe</span>
          <h2
            className="mt-8 font-display font-semibold text-ink tracking-[-0.035em]"
            style={{ fontSize: "clamp(36px, 5vw, 72px)", lineHeight: 1.02 }}
          >
            Quem caminha <span className="text-petrol">com você.</span>
          </h2>
          <p className="mt-8 font-body text-body-lg text-stone leading-relaxed max-w-2xl">
            Uma equipe pequena por escolha. Cada caso é acompanhado de perto —
            não há esteira, não há plantão.
          </p>
        </Reveal>

        <div className="mt-20 md:mt-28 space-y-20 md:space-y-28 max-w-6xl">
          <TeamMember
            index={0}
            role="Fundadora"
            name="Ingrid Nefrance"
            title="Neuropsicopedagoga · CEO"
            initials="IN"
            bio="Fundadora do Instituto Nefrance. Especialista em avaliação e intervenção pedagógica de crianças e adolescentes com dificuldades de aprendizagem."
            quote="Eu não trato sintomas. Eu compreendo histórias — e construo um plano para cada uma."
            handle="@ingridnefrance_neuropp"
          />

          <TeamMember
            index={1}
            role="Equipe ampliada"
            name="Psicologia e Neuropsicologia"
            title="Profissionais convidadas"
            initials="PN"
            bio="Atuamos com psicóloga e neuropsicóloga parceiras, devidamente registradas no CRP, que se integram ao plano da criança quando a avaliação indica. Esse desenho mantém o cuidado próximo e personalizado, sem terceirizar o vínculo com a família."
          />
        </div>
      </div>
    </section>
  );
}
