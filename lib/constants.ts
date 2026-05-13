export const CONTACT = {
  phone: "(62) 98205-9087",
  phoneIntl: "5562982059087",
  instagram: "https://www.instagram.com/institutonefrance/",
  addressLine: "R. S-4, Qd. S-12 Lt. 11, Nº 332",
  addressNeighborhood: "Setor Bela Vista",
  addressCity: "Goiânia",
  addressState: "GO",
  addressCep: "74823-450",
} as const;

const wa = (text: string) =>
  `https://wa.me/${CONTACT.phoneIntl}?text=${encodeURIComponent(text)}`;

export const WHATSAPP_GERAL = wa(
  "Olá, gostaria de agendar uma avaliação no Instituto Nefrance."
);
export const WHATSAPP_CHA = wa(
  "Olá! Quero reservar minha vaga no Chá das Mães de 30/05."
);
export const WHATSAPP_CONTATO = wa(
  "Olá! Vim pelo site do Instituto Nefrance."
);

export const NAV_ITEMS = [
  { label: "Sobre", href: "/#sobre" },
  { label: "Especialidades", href: "/#especialidades" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Equipe", href: "/#equipe" },
  { label: "Contato", href: "/#contato" },
] as const;

export const ESPECIALIDADES = [
  {
    code: "01",
    title: "REFORÇO",
    subtitle: "Reforço escolar personalizado",
    description:
      "Acompanhamento pedagógico individualizado, alinhado com a escola da criança e com o ritmo real de aprendizagem de cada aluno.",
  },
  {
    code: "02",
    title: "NEUROPSICOPEDAGOGIA",
    subtitle: "Avaliação e intervenção em dificuldades de aprendizagem",
    description:
      "Investigação criteriosa de TDAH, TEA, dislexia e atrasos no processo de alfabetização, com plano de intervenção construído à mão.",
  },
  {
    code: "03",
    title: "PSICOLOGIA",
    subtitle: "Atendimento psicológico para crianças e adolescentes",
    description:
      "Escuta clínica de crianças neurodivergentes e suas famílias. Espaço seguro para desenvolver autoestima, autonomia e regulação emocional.",
  },
  {
    code: "04",
    title: "ESTUDOS",
    subtitle: "Mesa de estudos acompanhada · Coworking",
    description:
      "Ambiente preparado para concentração e produtividade. Mesa de estudos com acompanhamento e sala de coworking disponível.",
  },
] as const;

export const TEAM = [
  {
    name: "Ingrid Nefrance",
    role: "NEUROPSICOPEDAGOGA · CEO",
    bio: "Fundadora do Instituto. Especialista em avaliação e intervenção pedagógica de crianças com dificuldades de aprendizagem.",
    handle: "@ingridnefrance_neuropp",
  },
  {
    name: "[NOME]",
    role: "PSICÓLOGA",
    bio: "Atuação clínica com foco em crianças neurodivergentes e em suas famílias.",
    handle: null,
  },
  {
    name: "[NOME]",
    role: "NEUROPSICÓLOGA",
    bio: "Avaliação neuropsicológica completa, com protocolos validados para infância e adolescência.",
    handle: null,
  },
] as const;

export const FRASES_QUE_VOCE_OUVIU = [
  "É só preguiça.",
  "Falta limite.",
  "É fase, vai passar.",
  "Tá querendo chamar atenção.",
  "Bater resolve.",
  "Outras crianças aprendem.",
] as const;

export const PROVA_SOCIAL = {
  familiasAtendidas: "+200 famílias",
  desdeAno: "desde 2021",
  bairro: "Setor Bela Vista",
  cidade: "Goiânia",
} as const;

export const FAQ_ITEMS = [
  {
    q: "A partir de que idade vocês atendem?",
    a: "Atendemos crianças e adolescentes. A avaliação inicial define a melhor abordagem para cada faixa etária.",
  },
  {
    q: "Quanto tempo dura o tratamento?",
    a: "Não há resposta única. Cada plano é construído após avaliação. Em média, falamos de meses, com reavaliações periódicas.",
  },
  {
    q: "Vocês atendem plano de saúde?",
    a: "Entre em contato pelo WhatsApp para verificar convênios atuais e formas de pagamento particular.",
  },
  {
    q: "Preciso de encaminhamento médico?",
    a: "Não é obrigatório. Você pode agendar uma avaliação diretamente conosco. Caso já tenha laudo prévio, ele será integrado ao processo.",
  },
  {
    q: "Como agendar a primeira avaliação?",
    a: "Pelo WhatsApp (62) 98205-9087 ou pelo botão “Agendar avaliação” no topo deste site.",
  },
  {
    q: "Onde fica o Instituto?",
    a: "Setor Bela Vista, Goiânia. Endereço completo na seção de contato.",
  },
] as const;

export const JORNADA = [
  {
    code: "01",
    title: "AVALIAÇÃO",
    subtitle: "Investigação criteriosa multidisciplinar",
    body: "Aplicamos protocolos validados de avaliação neuropsicopedagógica, psicológica e neuropsicológica.",
  },
  {
    code: "02",
    title: "PLANO",
    subtitle: "Construído à mão para cada criança",
    body: "Definimos objetivos, técnicas e periodicidade conforme o caso, alinhado com escola e família.",
  },
  {
    code: "03",
    title: "ACOMPANHAMENTO",
    subtitle: "Caminhada longa, próxima e mensurável",
    body: "Encontros regulares, reavaliações e ajustes contínuos. Você nunca anda sozinha.",
  },
] as const;
