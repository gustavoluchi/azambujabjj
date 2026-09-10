export type SchedulerGroup = {
  day: string;
  classes: string[];
};

export const schedulerGrade: Record<string, SchedulerGroup[]> = {
  "Jiu Jitsu Adulto": [
    {
      day: "Segunda-feira",
      classes: [
        "11h - Iniciantes e graduados",
        "18h30 - Iniciantes",
        "19h30 - Somente graduados",
      ],
    },
    {
      day: "Terça-feira",
      classes: [
        "7h - Iniciantes",
        "12h - Somente graduados",
        "17h - Iniciantes",
        "20h - Iniciantes e graduados",
      ],
    },
    {
      day: "Quarta-feira",
      classes: [
        "11h - Iniciantes e graduados",
        "18h30 - Iniciantes",
        "19h30 - Somente graduados",
      ],
    },
    {
      day: "Quinta-feira",
      classes: [
        "7h - Iniciantes",
        "12h - Somente graduados",
        "17h - Iniciantes",
        "20h - Iniciantes e graduados",
      ],
    },
    {
      day: "Sexta-feira",
      classes: [
        "11h - Iniciantes e graduados",
        "18h30 - Iniciantes",
        "19h30 - Somente graduados",
      ],
    },
    { day: "Sábado", classes: ["11h - Sabadonze"] },
  ],
  "Jiu Jitsu Infantil": [
    { day: "Segunda-feira", classes: ["17h30 - Kids (8 a 12 anos)"] },
    {
      day: "Terça-feira",
      classes: [
        "10h - Mini Kids (4 a 8 anos)",
        "18h15 - Mini Kids (4 a 8 anos)",
        "19h - Adolescentes (12 a 16 anos)",
      ],
    },
    { day: "Quarta-feira", classes: ["17h30 - Kids (8 a 12 anos)"] },
    {
      day: "Quinta-feira",
      classes: [
        "10h - Mini Kids (4 a 8 anos)",
        "18h15 - Mini Kids (4 a 8 anos)",
        "19h - Adolescentes (12 a 16 anos)",
      ],
    },
  ],
  "Jiu Jitsu Feminino": [
    { day: "Segunda-feira", classes: ["9h"] },
    { day: "Quarta-feira", classes: ["9h (com kimono)"] },
  ],
  Funcional: [
    { day: "Terça-feira", classes: ["12h"] },
    { day: "Quinta-feira", classes: ["12h"] },
  ],
  "Aula Particular": [
    { day: "Horário combinado", classes: ["Vamos combinar direto com você"] },
  ],
  "Ainda não sei, quero orientação": [
    {
      day: "Prefiro dizer o período",
      classes: ["Manhã", "Tarde", "Noite", "Tanto faz"],
    },
  ],
};

export const schedulerTeachers: Record<string, string> = {
  "19h30 - Somente graduados": "Henrique",
  "12h - Somente graduados": "Henrique",
  "20h - Iniciantes e graduados": "Henrique",
  "7h - Iniciantes": "Diego",
  "17h - Iniciantes": "Leonardo",
  "17h30 - Kids (8 a 12 anos)": "Leonardo",
  "18h15 - Mini Kids (4 a 8 anos)": "Leonardo",
};

export const schedulerConfig = {
  whatsappNumber: "5551980267688",
  submissionUrl:
    "https://script.google.com/macros/s/AKfycbzk24hLUQDybb4e0WHqzbPRWrUztGeBsehefMPF6N5C4i1xfeXdWb2eTD7qwgkWq6DFGg/exec",
} as const;
