import { v4 as uuid } from 'uuid'

export function fetchData() {
  const data = [
    {
      title: "A fazer",
      tasks: [
        {
          id: uuid(),
          title: "#boraCodar um Kanban 🧑‍💻",
          description:
            "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
          categories: ["rocketseat", "desafio"],
        },
        {
          id: uuid(),
          title: "Manter a ofensiva 🔥",
          description:
            "Manter minha atividade na plataforma da Rocketseat para não perder a ofensiva",
          categories: ["rocketseat"],
        },
        {
          id: uuid(),
          title: "Almoçar 🥗",
          description:
            "Me alimentar, aproveitando um momento de descanso para recarregar minhas energias durante o almoço",
          categories: ["autocuidado"],
        },
        {
          id: uuid(),
          title: "Curtir post do #boraCodar 💜",
          description:
            "Deixar o like para demonstrar que gostei do novo desafio proposto",
          categories: ["rocketseat"],
        },
      ],
    },
    {
      title: "Fazendo",
      tasks: [
        {
          id: uuid(),
          title: "Conferir o novo desafio 🚀",
          description: "Conferir o novo projeto do #boraCodar para fazê-lo da melhor maneira possível",
          categories: ["rocketseat", "desafio"],
        },
        {
          id: uuid(),
          title: "Ser incrível 😎",
          description: "Sempre me lembrar de manter minha autenticidade e espalhar amor",
          categories: ["autocuidado"],
        },
      ],
    },
    {
      title: "Feito",
      tasks: [
        {
          id: uuid(),
          title: "#boraCodar uma página de login 🧑‍💻",
          description: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
          categories: ["rocketseat", "desafio"],
        },
        {
          id: uuid(),
          title: "#boraCodar uma página de clima 🧑‍💻",
          description: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
          categories: ["rocketseat", "desafio"],
        },
        {
          id: uuid(),
          title: "#boraCodar um conversor 🧑‍💻",
          description: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
          categories: ["rocketseat", "desafio"],
        },
        {
          id: uuid(),
          title: "#boraCodar um dashboard 🧑‍💻",
          description: "Novo desafio do #boraCodar da Rocketseat, onde é proposto construir um quadro de Kanban.",
          categories: ["rocketseat", "desafio"],
        },
      ],
    },
  ];

  return data
}
