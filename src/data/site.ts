export const bookingUrl = "https://agendar-aula-experimental.vercel.app";
export const whatsappUrl =
  "https://wa.me/5551980267688?text=Oi!%20Quero%20agendar%20uma%20aula%20experimental%20gratuita%20na%20Azambuja.";

export const navigation = [
  { label: "A Escola", href: "#metodologia" },
  { label: "Turmas", href: "#turmas" },
  { label: "Horários", href: "#horarios" },
  { label: "Professores", href: "#professores" },
  { label: "Planos", href: "#planos" },
  { label: "Cursos Online", href: "#cursos" },
  { label: "Filiais", href: "#filiais" },
  { label: "Contato", href: "#contato" },
] as const;

export const classes = [
  {
    age: "4 a 8 anos",
    title: "Mini Kids",
    description:
      "Primeiro contato com o jiu jitsu, com foco em desenvolvimento físico, disciplina e socialização.",
  },
  {
    age: "8 a 12 anos",
    title: "Kids",
    description:
      "Evolução técnica gradual, sempre com abordagem positiva e educativa para os pequenos e suas famílias.",
  },
  {
    age: "12 a 16 anos",
    title: "Adolescentes",
    description:
      "Ambiente próximo e motivador, sem infantilização, para uma fase de muitas mudanças.",
  },
  {
    age: "16 anos +",
    title: "Adultos: iniciantes e graduados",
    description:
      "Turmas de iniciantes e de graduados, com frequência livre entre as aulas da grade.",
  },
  {
    age: "Todas as idades",
    title: "Turma feminina",
    description:
      "Espaço acolhedor e seguro, com foco em confiança, defesa pessoal e integração entre mulheres.",
  },
  {
    age: "Adultos",
    title: "Funcional",
    description:
      "Treinamento físico complementar ao jiu jitsu, em tatame próprio, terças e quintas.",
  },
  {
    age: "Sábados",
    title: "Sabadonze",
    description:
      "Aula de sábado às 11h, ótima porta de entrada pra quem tem a semana corrida.",
  },
  {
    age: "Sob agendamento",
    title: "Aulas particulares",
    description:
      "Acompanhamento individual, com pacotes de 4 ou 8 aulas por mês.",
  },
] as const;

export type ScheduleSlot = { time: string; name: string };
export type ScheduleDay = { day: string; slots: ScheduleSlot[] };

export const schedule: ScheduleDay[] = [
  {
    day: "Segunda",
    slots: [
      { time: "9h", name: "Feminina" },
      { time: "11h", name: "Iniciantes e graduados" },
      { time: "17h30", name: "Kids" },
      { time: "18h30", name: "Iniciantes" },
      { time: "19h30", name: "Graduados" },
    ],
  },
  {
    day: "Terça",
    slots: [
      { time: "7h", name: "Iniciantes" },
      { time: "10h", name: "Mini Kids" },
      { time: "12h", name: "Graduados / Funcional" },
      { time: "17h", name: "Iniciantes" },
      { time: "18h15", name: "Mini Kids" },
      { time: "19h", name: "Adolescentes" },
      { time: "20h", name: "Iniciantes e graduados" },
    ],
  },
  {
    day: "Quarta",
    slots: [
      { time: "9h", name: "Feminina (kimono)" },
      { time: "11h", name: "Iniciantes e graduados" },
      { time: "17h30", name: "Kids" },
      { time: "18h30", name: "Iniciantes" },
      { time: "19h30", name: "Graduados" },
    ],
  },
  {
    day: "Quinta",
    slots: [
      { time: "7h", name: "Iniciantes" },
      { time: "10h", name: "Mini Kids" },
      { time: "12h", name: "Graduados / Funcional" },
      { time: "17h", name: "Iniciantes" },
      { time: "18h15", name: "Mini Kids" },
      { time: "19h", name: "Adolescentes" },
      { time: "20h", name: "Iniciantes e graduados" },
    ],
  },
  {
    day: "Sexta",
    slots: [
      { time: "11h", name: "Iniciantes e graduados" },
      { time: "18h30", name: "Iniciantes" },
      { time: "19h30", name: "Graduados" },
    ],
  },
  { day: "Sábado", slots: [{ time: "11h", name: "Sabadonze" }] },
];

export type Plan = {
  title: string;
  featured?: boolean;
  prices: ReadonlyArray<readonly [string, string]>;
};

export const plans: Plan[] = [
  {
    title: "Jiu Jitsu Adulto",
    featured: true,
    prices: [
      ["Mensal", "R$ 250/mês"],
      [
        "Recorrente · mais escolhido · permanência mínima de 3 meses",
        "R$ 205/mês · economize R$ 45/mês",
      ],
      ["Semestral à vista", "R$ 1.160 · ≈ R$ 193/mês"],
      ["Anual à vista · melhor valor", "R$ 2.220 · ≈ R$ 185/mês"],
    ],
  },
  {
    title: "Jiu Jitsu Infantil",
    prices: [
      ["Mensal", "R$ 220/mês"],
      [
        "Recorrente · permanência mínima de 3 meses",
        "R$ 205/mês · economize R$ 15/mês",
      ],
    ],
  },
  {
    title: "Particular & Funcional",
    prices: [
      ["Particular · 4 aulas/mês", "R$ 380"],
      ["Particular · 8 aulas/mês", "R$ 640"],
      ["Funcional · 1x/semana", "R$ 160"],
      ["Funcional · 2x/semana", "R$ 280"],
    ],
  },
] as const;

export type Course = {
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  oldPrice: string;
  price: string;
  installments: string;
  href: string;
  cta: string;
};

export const courses: Course[] = [
  {
    tag: "Imersão completa",
    title: "A Didática",
    subtitle: "Imersão no Sistema Progressivo de Jiu-Jitsu",
    description:
      "118 vídeos exclusivos para professores, faixas pretas, graduados e iniciantes, do básico ao avançado, com acesso vitalício.",
    oldPrice: "R$ 497,00",
    price: "R$ 297,00 à vista",
    installments: "ou 10x de R$ 35,69",
    href: "https://pay.hotmart.com/W102120628U",
    cta: "Quero começar a imersão",
  },
  {
    tag: "Guia Visual",
    title: "Volume I",
    subtitle: "Sistema Progressivo de Jiu-Jitsu",
    description:
      "218 técnicas entre fundamentos, autodefesa em pé e no solo, projeções, escapadas e passagem de guarda. 12 vídeos demonstrativos e 2 aulas bônus.",
    oldPrice: "R$ 997,00",
    price: "R$ 597,00 à vista",
    installments: "ou 10x de R$ 69,59",
    href: "https://pay.hotmart.com/W55765688P",
    cta: "Quero o Guia Visual I",
  },
  {
    tag: "Guia Visual",
    title: "Volume II",
    subtitle: "Sistema de Guarda Progressiva",
    description:
      "Guarda fechada, aberta, gancho por fora, sentada, borboleta, aranha, laço, de ganchos e guarda X. 11 vídeos demonstrativos e 1 aula bônus.",
    oldPrice: "R$ 917,00",
    price: "R$ 517,00 à vista",
    installments: "ou 10x de R$ 60,27",
    href: "https://pay.hotmart.com/J73402202I",
    cta: "Quero o Guia Visual II",
  },
] as const;

export const timeline = [
  ["1999", "Campeão do Chapecó Open do Globo Esporte de lutas casadas"],
  [
    "1999 a 2005",
    "7 vezes campeão e 8 vezes vice-campeão em etapas do campeonato gaúcho da FJJ-RS",
  ],
  ["2004", "Campeão do Winner Fight Show 2 (submission)"],
  ["2007", "Vice-campeão do campeonato gaúcho de grappling"],
  ["2009", "Campeão da Copa Geraldo Santana de Jiu-Jitsu"],
  ["2010", "Vice-campeão Pan-Americano de Jiu-Jitsu (CBJJE/FBJJ-DF)"],
  ["2010", "Vice-campeão do Mundial de Jiu-Jitsu profissional (CBJJE)"],
  ["2011", "Vice-campeão da Copa Sogipa de Judô"],
  ["2012", "Campeão da Copa Venâncio Aires de Judô"],
  ["2017", "Vice-campeão do Floripa Open, com e sem kimono"],
  ["2022", "Campeão da 1ª etapa da Copa Prime de Jiu-Jitsu"],
  ["2022", "Vice-campeão da 2ª etapa da Tríplice Coroa de Jiu-Jitsu"],
  ["2025", "Equipe SBA vice-campeã geral No-Gi na 1ª etapa da Tríplice Coroa"],
] as const;

export const contact = {
  address: "Av. Osvaldo Aranha, 794 · Bom Fim · Porto Alegre - RS",
  email: "contatoazambujabehring@gmail.com",
  phone: "(51) 98026-7688",
  instagram: "@azambujabjj",
  instagramUrl: "https://instagram.com/azambujabjj",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Osvaldo+Aranha,+794,+Porto+Alegre",
} as const;
