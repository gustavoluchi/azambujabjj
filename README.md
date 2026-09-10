# Site da Escola de Jiu-Jitsu Azambuja

Site institucional em Astro para a matriz, filiais, turmas e produtos digitais da Escola Azambuja.

## Arquitetura

- `src/components/home`: seções da página inicial.
- `src/components/site`: navegação, rodapé e elementos compartilhados.
- `src/components/didatica`: conteúdo da página da imersão.
- `src/data`: horários, planos, cursos e conteúdos estruturados.
- `src/pages`: rotas públicas estáticas e indexáveis.

## Cores base

1. #162f4f rgb(22,47,79)
2. #ffc718 rgb(255,199,24)

Complementares:

#A69576
#E6BA6A
#738091
#666056

## 🧞 Comandos

Todos os comandos são executados a partir da raiz do projeto, em um terminal:

| Comando                | Ação                                                           |
| :--------------------- | :------------------------------------------------------------- |
| `pnpm install`         | Instala as dependências                                        |
| `pnpm dev`             | Inicia o servidor de desenvolvimento local em `localhost:4321` |
| `pnpm build`           | Compila o site para produção na pasta `./dist/`                |
| `pnpm preview`         | Visualiza a build localmente, antes de implantar               |
| `pnpm test`            | Gera a build e valida os contratos de comportamento            |
| `pnpm check`           | Valida os componentes e a integração Astro                     |
| `pnpm lint`            | Executa as regras estáticas de JavaScript e TypeScript         |
| `pnpm format`          | Formata o projeto com Prettier                                 |
| `pnpm tsc`             | Executa a verificação estrita de TypeScript                    |
| `pnpm astro ...`       | Executa comandos da CLI como `astro add`, `astro check`        |
| `pnpm astro -- --help` | Obtém ajuda sobre a CLI do Astro                               |
