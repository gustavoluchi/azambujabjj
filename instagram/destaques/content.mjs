// Conteúdo dos destaques do Instagram @azambujabjj.
// Tudo aqui é espelho do site (src/data/site.ts, src/data/scheduler.ts,
// src/pages/*). Quando mudar horário, valor ou equipe no site, atualize aqui
// e rode `node instagram/destaques/render.mjs` de novo.

export const brand = {
  name: "Azambuja",
  tagline: "Jiu Jitsu · Porto Alegre",
  site: "azambujabjj.com.br",
  instagram: "@azambujabjj",
  whatsapp: "(51) 98026-7688",
  address: "Av. Osvaldo Aranha, 794 · Bom Fim · Porto Alegre",
};

// Ordem sugerida de exibição no perfil (da esquerda pra direita).
export const highlights = [
  {
    slug: "aula-gratis",
    name: "Aula grátis",
    icon: "calendar-check",
    slides: [
      {
        type: "title",
        eyebrow: "Aula experimental gratuita",
        title: "Sua primeira aula <em>é por nossa conta</em>",
        lead: "Sem compromisso e sem taxa de matrícula. Venha conhecer o tatame, a turma e o jeito Azambuja de ensinar.",
        chips: [
          "Mini Kids ao adulto",
          "Turma feminina",
          "Bom Fim · Porto Alegre",
        ],
      },
      {
        type: "numbered",
        eyebrow: "Como funciona",
        title: "Três passos e você <em>está no tatame</em>",
        items: [
          {
            title: "Escolha a turma",
            text: "Mini Kids, Kids, Adolescentes, Adultos, Feminina, Funcional ou Sabadonze. Olhe a grade no destaque Horários.",
          },
          {
            title: "Agende",
            text: "Pelo site ou pelo WhatsApp. Leva menos de um minuto.",
          },
          {
            title: "Apareça",
            text: "Chega uns minutos antes, com roupa confortável. O resto a gente resolve no tatame.",
          },
        ],
      },
      {
        type: "cta",
        eyebrow: "Agende agora",
        title: "Jiu jitsu que cabe <em>na sua vida</em>",
        button: "Agendar aula experimental",
        url: "azambujabjj.com.br/agendar-aula-experimental",
        note: "Ou chame no WhatsApp: (51) 98026-7688",
      },
    ],
  },
  {
    slug: "escola",
    name: "A Escola",
    icon: "shield",
    slides: [
      {
        type: "title",
        eyebrow: "Escola de Jiu-Jitsu Azambuja · Desde 2007",
        title: "Jiu jitsu que cabe <em>na sua vida</em>",
        lead: "Ensino técnico, progressivo e acolhedor de jiu jitsu para crianças, adolescentes e adultos, no Bom Fim, em Porto Alegre.",
        chips: ["Sistema Progressivo", "Filiada à SBA", "Desde 2007"],
      },
      {
        type: "quote",
        quote:
          "Ninguém precisa estar pronto para começar. Cada pessoa é recebida a partir da sua realidade e estimulada a evoluir no próprio ritmo.",
        cite: "Princípio-guia da Azambuja",
      },
      {
        type: "list",
        eyebrow: "Quem somos",
        title:
          "Jiu jitsu como ferramenta de <em>disciplina, saúde e confiança</em>",
        lead: "Tratamos o jiu jitsu como ferramenta de segurança, autocontrole, convivência e qualidade de vida, não apenas como luta.",
        items: [
          "Aulas regulares para adultos",
          "Turmas infantis e para adolescentes",
          "Turma feminina",
          "Aulas particulares",
          "Treinamento funcional",
          "Seminários e eventos técnicos",
          "Preparação para graduações",
          "Comunidade entre alunos e famílias",
        ],
      },
      {
        type: "stats",
        eyebrow: "Em números",
        title: "Uma escola que <em>forma gente</em>",
        stats: [
          { value: "2007", label: "Ano de fundação" },
          { value: "24", label: "Faixas pretas formados" },
          { value: "SBA", label: "Escola filiada" },
          { value: "4", label: "Unidades e projetos" },
        ],
      },
    ],
  },
  {
    slug: "metodo",
    name: "Método",
    icon: "book-open",
    slides: [
      {
        type: "title",
        eyebrow: "Metodologia · Filiada à SBA",
        title: "Tu conhece o <em>Sistema Progressivo</em> de Jiu-Jitsu?",
        lead: "Desenvolvido pelo Mestre Sylvio Behring, é a didática que guia todas as aulas da Azambuja.",
        sba: true,
      },
      {
        type: "text",
        eyebrow: "Para todas as pessoas",
        title:
          "Independente de <em>idade, peso, altura</em> ou condição física",
        lead: "O método é a forma mais eficiente de ensinar jiu jitsu a qualquer pessoa, do primeiro dia de treino ao faixa preta.",
      },
      {
        type: "text",
        eyebrow: "Simplicidade e eficiência",
        title: "Do fácil ao difícil, <em>do simples ao complexo</em>",
        lead: "Com foco nos fundamentos, o jiu jitsu é apresentado de forma simples e progressiva, valorizando as habilidades naturais de cada um.",
      },
      {
        type: "numbered",
        eyebrow: "Como funciona na Azambuja",
        title: "Coordenação técnica <em>dedicada</em>",
        items: [
          {
            title: "Coordenação técnica",
            text: "Rafael Azambuja coordena a aplicação do Sistema Progressivo, a metodologia de ensino e as graduações de toda a escola.",
          },
          {
            title: "Graduações",
            text: "Duas por ano, com datas alinhadas ao calendário da escola e da SBA. Os graus são concedidos somente nesses momentos.",
          },
          {
            title: "Avaliação individual",
            text: "A avaliação técnica final de cada aluno é feita pelo Rafael, respeitando o ritmo e a evolução de cada praticante.",
          },
        ],
      },
      {
        type: "cta",
        eyebrow: "Aprenda jiu-jitsu com qualidade",
        title:
          "Seja iniciante ou avançado, descubra como o sistema progressivo pode <em>transformar sua prática</em>",
        button: "Aula experimental gratuita",
        url: "azambujabjj.com.br",
      },
    ],
  },
  {
    slug: "turmas",
    name: "Turmas",
    icon: "users",
    slides: [
      {
        type: "title",
        eyebrow: "Turmas",
        title: "Do Mini Kids ao adulto, <em>tem turma pra você</em>",
        lead: "Cada fase tem sua turma, com abordagem própria. Nos planos de jiu jitsu a frequência é livre entre as aulas da grade.",
      },
      {
        type: "cards",
        eyebrow: "Infantil e adolescentes",
        title: "Crescendo <em>no tatame</em>",
        cards: [
          {
            tag: "4 a 8 anos",
            title: "Mini Kids",
            text: "Primeiro contato com o jiu jitsu, com foco em desenvolvimento físico, disciplina e socialização.",
          },
          {
            tag: "8 a 12 anos",
            title: "Kids",
            text: "Evolução técnica gradual, sempre com abordagem positiva e educativa para os pequenos e suas famílias.",
          },
          {
            tag: "12 a 16 anos",
            title: "Adolescentes",
            text: "Ambiente próximo e motivador, sem infantilização, para uma fase de muitas mudanças.",
          },
        ],
      },
      {
        type: "cards",
        eyebrow: "Adultos",
        title: "Iniciantes, graduados <em>e turma feminina</em>",
        cards: [
          {
            tag: "16 anos +",
            title: "Adultos",
            text: "Turmas de iniciantes e de graduados, com frequência livre entre as aulas da grade.",
          },
          {
            tag: "Todas as idades",
            title: "Turma feminina",
            text: "Espaço acolhedor e seguro, com foco em confiança, defesa pessoal e integração entre mulheres.",
          },
          {
            tag: "Adultos",
            title: "Funcional",
            text: "Treinamento físico complementar ao jiu jitsu, em tatame próprio, terças e quintas.",
          },
        ],
      },
      {
        type: "cards",
        eyebrow: "Outros formatos",
        title: "Sábado e <em>aula particular</em>",
        cards: [
          {
            tag: "Sábados · 11h",
            title: "Sabadonze",
            text: "Treino de integração todo sábado às 11h, com iniciantes e graduados no mesmo tatame.",
          },
          {
            tag: "Sob agendamento",
            title: "Aulas particulares",
            text: "Acompanhamento individual, com pacotes de 4 ou 8 aulas por mês.",
          },
        ],
      },
      {
        type: "cta",
        eyebrow: "Primeira aula gratuita",
        title: "Ainda não sabe qual turma? <em>A gente te orienta.</em>",
        button: "Agendar aula experimental",
        url: "azambujabjj.com.br/agendar-aula-experimental",
      },
    ],
  },
  {
    slug: "horarios",
    name: "Horários",
    icon: "clock",
    slides: [
      {
        type: "title",
        eyebrow: "Grade de horários",
        title: "Frequência livre em <em>todas as aulas da grade</em>",
        lead: "Treine quantas vezes quiser. Escolha o horário que cabe na sua rotina.",
        chips: ["Manhã", "Meio-dia", "Tarde", "Noite", "Sábado"],
      },
      {
        type: "schedule",
        eyebrow: "Segunda, quarta e sexta",
        title: "Grade da <em>semana</em>",
        days: [
          {
            day: "Segunda",
            slots: [
              ["11h", "Iniciantes e graduados"],
              ["17h30", "Kids"],
              ["18h30", "Iniciantes"],
              ["19h30", "Graduados"],
            ],
          },
          {
            day: "Quarta",
            slots: [
              ["9h", "Feminina (kimono)"],
              ["11h", "Iniciantes e graduados"],
              ["17h30", "Kids"],
              ["18h30", "Iniciantes"],
              ["19h30", "Graduados"],
            ],
          },
          {
            day: "Sexta",
            slots: [
              ["11h", "Iniciantes e graduados"],
              ["18h30", "Iniciantes"],
              ["19h30", "Graduados"],
            ],
          },
        ],
      },
      {
        type: "schedule",
        eyebrow: "Terça e quinta",
        title: "Grade da <em>semana</em>",
        days: [
          {
            day: "Terça e quinta",
            slots: [
              ["7h", "Iniciantes"],
              ["10h", "Mini Kids"],
              ["12h", "Graduados"],
              ["12h", "Funcional"],
              ["17h", "Iniciantes"],
              ["18h15", "Mini Kids"],
              ["19h", "Adolescentes"],
              ["19h", "Feminina"],
              ["20h", "Iniciantes e graduados"],
            ],
          },
          { day: "Sábado", slots: [["11h", "Sabadonze"]] },
        ],
      },
      {
        type: "cta",
        eyebrow: "Grade completa",
        title: "Veja a grade completa e <em>escolha seu horário</em>",
        button: "Ver horários",
        url: "azambujabjj.com.br/horarios",
        note: "Horários sujeitos a alteração. Confira no site antes de vir.",
      },
    ],
  },
  {
    slug: "planos",
    name: "Planos",
    icon: "wallet",
    slides: [
      {
        type: "title",
        eyebrow: "Planos",
        title: "Sem taxa de matrícula, <em>frequência livre</em>",
        lead: "Todos os planos de jiu jitsu têm frequência livre e a primeira aula é gratuita.",
      },
      {
        type: "plan",
        eyebrow: "Mais procurado",
        title: "Jiu Jitsu <em>Adulto</em>",
        rows: [
          ["Mensal", "R$ 250/mês"],
          ["Recorrente · permanência mínima de 3 meses", "R$ 205/mês"],
          ["Semestral à vista", "R$ 1.160 · ≈ R$ 193/mês"],
          ["Anual à vista · melhor valor", "R$ 2.220 · ≈ R$ 185/mês"],
        ],
      },
      {
        type: "plan",
        eyebrow: "Mini Kids, Kids e Adolescentes",
        title: "Jiu Jitsu <em>Infantil</em>",
        rows: [
          ["Mensal", "R$ 220/mês"],
          ["Recorrente · permanência mínima de 3 meses", "R$ 205/mês"],
        ],
      },
      {
        type: "plan",
        eyebrow: "Outros formatos",
        title: "Particular, Funcional <em>e Avulsa</em>",
        rows: [
          ["Particular · 4 aulas/mês", "R$ 480"],
          ["Particular · 8 aulas/mês", "R$ 800"],
          ["Funcional · 1x/semana", "R$ 280"],
          ["Funcional · 2x/semana", "R$ 380"],
          ["Aula avulsa · turma regular", "R$ 50"],
        ],
      },
      {
        type: "cta",
        eyebrow: "Fale com a gente",
        title: "Qual plano combina <em>com a sua rotina?</em>",
        button: "Chamar no WhatsApp",
        url: "(51) 98026-7688",
        note: "Valores sujeitos a confirmação. A gente te ajuda a escolher.",
      },
    ],
  },
  {
    slug: "professores",
    name: "Professores",
    icon: "graduation-cap",
    slides: [
      {
        type: "title",
        eyebrow: "Equipe técnica",
        title: "Quem conduz o <em>Sistema Progressivo</em> na Azambuja",
        lead: "Faixas pretas formados dentro do método, com a coordenação técnica do Rafael Azambuja.",
      },
      {
        type: "profile",
        photo: "rafael-azambuja.jpg",
        eyebrow: "Faixa Preta 5º Grau · Fundador e coordenador técnico",
        name: "Rafael Azambuja",
        text: "Começou no jiu-jitsu em 1997 e conheceu o Sistema Progressivo na Winner Behring, em 1998. Faixa preta em 2005, fundou a Escola Azambuja em 2007 sob a tutela do Mestre Sylvio Behring.",
        stats: [
          ["5º grau", "Faixa preta"],
          ["2007", "Fundador"],
          ["24", "Faixas pretas formados"],
        ],
      },
      {
        type: "profile",
        photo: "henrique-aramburu.jpg",
        eyebrow: "Professor · Faixa preta desde 2018",
        name: "Henrique Aramburu",
        text: "Conduz as turmas de graduados e as turmas de iniciantes e graduados, nas aulas de segunda a sexta ao meio-dia e à noite.",
        stats: [
          ["12h", "Graduados"],
          ["19h30", "Graduados"],
          ["20h", "Iniciantes e graduados"],
        ],
      },
      {
        type: "profile",
        photo: "leonardo-antoria.jpg",
        eyebrow: "Professor · Faixa preta desde 2022",
        name: "Leonardo Antoria",
        text: "Monitor e instrutor desde a faixa roxa. A partir do Sistema Progressivo desenvolveu um método inclusivo, e já iniciou mais de 40 alunos com deficiência no esporte.",
        stats: [
          ["17h", "Iniciantes"],
          ["17h30", "Kids"],
          ["18h15", "Mini Kids"],
        ],
      },
      {
        type: "profile",
        photo: "diego-dias.jpg",
        eyebrow: "Professor · Faixa preta desde 2025",
        name: "Diego Dias",
        text: "Responsável pela turma de iniciantes das 7h, terças e quintas. Ótima opção pra quem quer treinar antes do trabalho.",
        stats: [
          ["7h", "Iniciantes"],
          ["Ter · Qui", "Manhã"],
        ],
      },
    ],
  },
  {
    slug: "faixas-pretas",
    name: "Faixas Pretas",
    icon: "award",
    slides: [
      {
        type: "title",
        eyebrow: "Legado",
        title: "<em>24 faixas pretas</em> formados desde 2009",
        lead: "Cada faixa preta da Azambuja passou pelo Sistema Progressivo e pela avaliação individual do Rafael.",
      },
      {
        type: "names",
        eyebrow: "Faixas pretas formados · 1 a 12",
        title: "Quem veio <em>primeiro</em>",
        names: [
          ["Gabriel Azambuja", "2009"],
          ["Delcia Enricone", "2011"],
          ["Roberto Wosiack", "2011"],
          ["Brandon Hoffman", "2013"],
          ["Ramiro Barcos", "2018"],
          ["Bruno Konzen", "2018"],
          ["Nenguirú Martins", "2018"],
          ["Pedro Palermo", "2018"],
          ["Henrique Aramburu", "2018"],
          ["Carlos Wainberg", "2019"],
          ["Josué Antunes", "2021"],
          ["Raphael Moraes", "2021"],
        ],
      },
      {
        type: "names",
        eyebrow: "Faixas pretas formados · 13 a 22",
        title: "A nova <em>geração</em>",
        start: 13,
        names: [
          ["Leonardo Antoria", "2022"],
          ["Bruno Rosa", "2023"],
          ["Guilherme Rodrigues", "2023"],
          ["Crisciele Santos", "2024"],
          ["Sergio Freiberg", "2024"],
          ["Edson Quagliotto", "2024"],
          ["Guilherme Entrudo", "2024"],
          ["Leonardo Rocha", "2024"],
          ["Adryan Carvalho", "2024"],
          ["Diego Dias", "2025"],
        ],
      },
      {
        type: "cta",
        eyebrow: "Galeria completa",
        title: "Conheça todos os faixas pretas <em>da escola</em>",
        button: "Ver faixas pretas",
        url: "azambujabjj.com.br/faixa-preta",
      },
    ],
  },
  {
    slug: "cursos",
    name: "Cursos",
    icon: "monitor-play",
    slides: [
      {
        type: "title",
        eyebrow: "Cursos online · Conteúdo oficial SBA",
        title: "Aprofunde o Sistema Progressivo <em>em qualquer lugar</em>",
        lead: "No seu ritmo, com acesso vitalício e 100% online pela Hotmart.",
        sba: true,
      },
      {
        type: "course",
        tag: "Imersão completa",
        title: "A Didática",
        subtitle: "Imersão no Sistema Progressivo de Jiu-Jitsu",
        text: "118 vídeos exclusivos para professores, faixas pretas, graduados e iniciantes, do básico ao avançado, com acesso vitalício.",
        oldPrice: "R$ 497,00",
        price: "R$ 297,00 à vista",
        installments: "ou 10x de R$ 35,69",
      },
      {
        type: "course",
        tag: "Guia Visual",
        title: "Volume I",
        subtitle: "Sistema Progressivo de Jiu-Jitsu",
        text: "218 técnicas entre fundamentos, autodefesa em pé e no solo, projeções, escapadas e passagem de guarda. 12 vídeos demonstrativos e 2 aulas bônus.",
        oldPrice: "R$ 997,00",
        price: "R$ 597,00 à vista",
        installments: "ou 10x de R$ 69,59",
      },
      {
        type: "course",
        tag: "Guia Visual",
        title: "Volume II",
        subtitle: "Sistema de Guarda Progressiva",
        text: "Guarda fechada, aberta, gancho por fora, sentada, borboleta, aranha, laço, de ganchos e guarda X. 11 vídeos demonstrativos e 1 aula bônus.",
        oldPrice: "R$ 917,00",
        price: "R$ 517,00 à vista",
        installments: "ou 10x de R$ 60,27",
      },
      {
        type: "cta",
        eyebrow: "Acesso vitalício",
        title: "Estude o método <em>no seu ritmo</em>",
        button: "Ver cursos",
        url: "azambujabjj.com.br/didatica",
        note: "Preços sujeitos a alteração. Confira o valor atualizado antes de comprar.",
      },
    ],
  },
  {
    slug: "sabadonze",
    name: "Sabadonze",
    icon: "sun",
    slides: [
      {
        type: "title",
        eyebrow: "Sábados · 11h",
        title: "<em>Sabadonze:</em> treino de integração todo sábado às 11h",
        lead: "Iniciantes e graduados no mesmo tatame, na matriz do Bom Fim. Pra quem nunca treinou, pra quem já treina, pra quem tá pensando há meses.",
      },
      {
        type: "text",
        eyebrow: "Sabadonze das Gurias",
        title: "Edições especiais <em>só entre mulheres</em>",
        lead: "De tempos em tempos o Sabadonze vira um treino de defesa pessoal só entre mulheres, gratuito e com vagas limitadas. As inscrições abrem aqui no Instagram e no site.",
      },
      {
        type: "cta",
        eyebrow: "Sábado, 11h",
        title:
          "Chega uns minutos antes. <em>O resto a gente resolve no tatame.</em>",
        button: "Garantir minha vaga",
        url: "azambujabjj.com.br/sabadonze",
      },
    ],
  },
  {
    slug: "filiais",
    name: "Filiais",
    icon: "map-pin",
    slides: [
      {
        type: "title",
        eyebrow: "Unidades",
        title: "Matriz, filiais e <em>projeto social</em>",
        lead: "Além da matriz no Bom Fim, a Azambuja está na Lomba do Pinheiro, em Nova Petrópolis e no IFSul Gravataí.",
      },
      {
        type: "unit",
        tag: "Matriz",
        title: "Escola Azambuja · Bom Fim",
        teacher: "Coordenação técnica: Rafael Azambuja",
        photo: "rafael-azambuja.jpg",
        text: "Turmas de Mini Kids, Kids, Adolescentes, adultos, feminina, funcional e Sabadonze, com a grade completa de horários.",
        address: "Av. Osvaldo Aranha, 794 · Bom Fim · Porto Alegre/RS",
        contact: "(51) 98026-7688 · @azambujabjj",
      },
      {
        type: "unit",
        tag: "Filial",
        title: "Lomba do Pinheiro",
        teacher: "Professor Guilherme Rodrigues",
        photo: "guilherme-rodrigues.jpg",
        text: "Unidade com gestão própria, no espaço da Academia Personal World. Horários e valores são próprios da unidade.",
        address:
          "Av. João de Oliveira Remião, 3322 · Parada 7 · Porto Alegre/RS",
        contact: "(51) 99247-7012 · @azbjiujitsulomba",
      },
      {
        type: "unit",
        tag: "Filial",
        title: "Azambuja Serra",
        teacher: "Professor Adryan Carvalho",
        photo: "adryan-carvalho.jpg",
        text: "Sistema Progressivo de Jiu-Jitsu na serra gaúcha, com a mesma metodologia da matriz.",
        address: "Rua Renânia, 66 · Centro · Nova Petrópolis/RS",
        contact: "(55) 99675-9530",
      },
      {
        type: "unit",
        tag: "Projeto social",
        title: "Projeto de Extensão IFSul",
        teacher: "Professor Ramiro Barcos",
        photo: "ramiro-barcos.jpg",
        text: "Jiu jitsu como extensão universitária, em parceria com o IFSul Gravataí.",
        address: "Rua Men de Sá, 800 · Bom Sucesso · Gravataí/RS",
        contact: "(51) 99233-8537",
      },
    ],
  },
  {
    slug: "contato",
    name: "Contato",
    icon: "message-circle",
    slides: [
      {
        type: "contact",
        eyebrow: "Localização",
        title: "Venha treinar <em>com a gente</em>",
        lead: "Matriz no bairro Bom Fim, Porto Alegre. Primeira aula experimental é gratuita.",
        rows: [
          ["Endereço", "Av. Osvaldo Aranha, 794 · Bom Fim"],
          ["WhatsApp", "(51) 98026-7688"],
          ["E-mail", "contato@azambujabjj.com.br"],
          ["Site", "azambujabjj.com.br"],
          ["Instagram", "@azambujabjj"],
        ],
      },
      {
        type: "cta",
        eyebrow: "Fale com a gente",
        title:
          "Dúvida sobre turma, horário ou plano? <em>Chama no WhatsApp.</em>",
        button: "(51) 98026-7688",
        url: "wa.me/5551980267688",
      },
    ],
  },
  {
    slug: "eventos",
    name: "Eventos",
    icon: "trophy",
    slides: [
      {
        type: "title",
        eyebrow: "Eventos e campeonatos",
        title: "Graduações, seminários <em>e competições</em>",
        lead: "Aqui ficam os registros das graduações, seminários da SBA, Sabadonze das Gurias e campeonatos da equipe. Use este destaque para reunir os stories de cada evento.",
      },
      {
        type: "cta",
        eyebrow: "Fique por dentro",
        title: "Novidades sempre <em>primeiro aqui no Instagram</em>",
        button: "Ativar notificações",
        url: "@azambujabjj",
      },
    ],
  },
];
