# Destaques do Instagram (@azambujabjj)

Capas e stories dos destaques do perfil, no mesmo visual do site
(navy `#0b1c3d`, amarelo `#f2c230`, fontes Sora e Inter, faixas amarelas
duplas, eyebrow em caixa alta). Todo o texto vem do site, então destaque e
site contam a mesma história.

## O que tem aqui

- `content.mjs`: texto de cada destaque e de cada story. É o único arquivo
  que precisa mudar quando horário, valor, equipe ou unidade mudarem.
- `render.mjs`: gera as imagens com o Chromium do Playwright.
- `out/capas/`: capas 1080x1080, uma por destaque (ícone amarelo, anel
  amarelo e fundo navy). O Instagram recorta em círculo.
- `out/stories/<destaque>/`: stories 1080x1920, já na ordem de postagem.

## Ordem sugerida no perfil

| #   | Nome no Instagram | Capa              | Stories |
| --- | ----------------- | ----------------- | ------- |
| 1   | Aula grátis       | calendário        | 3       |
| 2   | A Escola          | escudo            | 4       |
| 3   | Método            | livro             | 5       |
| 4   | Turmas            | pessoas           | 5       |
| 5   | Horários          | relógio           | 4       |
| 6   | Planos            | carteira          | 5       |
| 7   | Professores       | capelo            | 5       |
| 8   | Faixas Pretas     | medalha           | 4       |
| 9   | Cursos            | play              | 5       |
| 10  | Sabadonze         | sol               | 3       |
| 11  | Filiais           | pino de mapa      | 5       |
| 12  | Contato           | balão de conversa | 2       |
| 13  | Eventos           | troféu            | 2       |

Nomes curtos aparecem inteiros embaixo do círculo. "Faixas Pretas" e
"Professores" podem cortar em telas pequenas, mas continuam legíveis.

O destaque Método substitui o antigo "Método ensino" e mantém a mesma
sequência dos stories originais (pergunta, o que é o Sistema Progressivo,
simplicidade e eficiência, qualidade e chamada), mais um story sobre como o
método funciona na Azambuja.

## Como publicar

1. Mande as imagens pro celular (o zip `destaques-azambujabjj.zip` ou a
   pasta `out/`).
2. Poste os stories de um destaque na ordem dos arquivos (01, 02, 03...).
3. Em cada story, adicione o sticker de link apontando pra URL que está no
   próprio story (site, WhatsApp ou página específica).
4. Depois de postados, crie o destaque, escolha os stories e use a capa da
   pasta `out/capas`.
5. Nos destaques antigos, troque só a capa e arquive os stories que ficaram
   fora do padrão.

## Como regerar

```sh
pnpm install                         # traz as fontes Sora e Inter
npm i -g playwright                  # ou use um Playwright já instalado
NODE_PATH=$(npm root -g) node instagram/destaques/render.mjs
```

Só um destaque: `node instagram/destaques/render.mjs metodo` (pelo slug).

Se as fontes ou os ícones estiverem em outra pasta, aponte
`AZ_FONTS_DIR` e `AZ_ICONS_DIR` pra uma pasta que contenha
`node_modules/@fontsource-variable` e `node_modules/lucide-static`.
`AZ_KEEP_HTML=1` salva o HTML de cada story ao lado da imagem, útil pra
ajustar o layout no navegador.
