import assert from "node:assert/strict";
import { access, readdir, readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("given the new homepage, every primary journey has a stable anchor", async () => {
  const homeDirectory = new URL("../src/components/home/", import.meta.url);
  const files = await readdir(homeDirectory);
  const page = (
    await Promise.all(
      files
        .filter((file) => file.endsWith(".astro"))
        .map((file) => read(`src/components/home/${file}`)),
    )
  ).join("\n");
  const anchors = [
    "metodologia",
    "turmas",
    "horarios",
    "professores",
    "planos",
    "cursos",
    "filiais",
    "contato",
  ];

  for (const anchor of anchors) {
    assert.match(page, new RegExp(`id=["']${anchor}["']`));
  }
});

test("given any page, the shared shell exposes accessible navigation and motion preferences", async () => {
  const [header, styles] = await Promise.all([
    read("src/components/site/SiteHeader.astro"),
    read("src/styles/globals.css"),
  ]);

  assert.match(header, /aria-expanded/);
  assert.match(header, /aria-controls/);
  assert.match(header, /Escape/);
  assert.match(styles, /prefers-reduced-motion/);
});

test("given a booking action, it uses the canonical scheduler", async () => {
  const content = await read("src/data/site.ts");
  assert.match(content, /bookingUrl = "\/agendar-aula-experimental"/);
});

test("given the supplied design, the homepage preserves its canonical content", async () => {
  const [home, footer, layout, data] = await Promise.all([
    Promise.all(
      [
        "Hero.astro",
        "AboutMethodology.astro",
        "ProgramsSchedule.astro",
        "PeoplePlans.astro",
        "CoursesLocationsContact.astro",
      ].map((file) => read(`src/components/home/${file}`)),
    ).then((files) => files.join("\n")),
    read("src/components/site/SiteFooter.astro"),
    read("src/layouts/Layout.astro"),
    read("src/data/site.ts"),
  ]);
  const canonical = `${home}\n${footer}\n${layout}\n${data}`.replace(
    /\s+/g,
    " ",
  );

  for (const content of [
    "Quarta-feira é dia de No Gi (sem kimono)",
    "Quero começar a imersão",
    "Filial Lomba do Pinheiro",
    "Horários e valores da Filial Lomba do Pinheiro são próprios da unidade",
    "Agendar aula experimental gratuita",
    "Sistema Progressivo de Jiu-Jitsu · Filiada à SBA",
    "Escola de Jiu Jitsu Azambuja · Porto Alegre / RS",
  ]) {
    assert.match(
      canonical,
      new RegExp(content.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
    );
  }

  assert.doesNotMatch(
    home,
    /Conheça nossa história|Ver e baixar a grade completa|Endereços, contatos e mapas/,
  );
});

test("given legacy visitors, every existing route remains available", async () => {
  const routes = [
    "index",
    "historia",
    "rafael-azambuja",
    "didatica",
    "faixa-preta",
    "horarios",
    "filiais",
    "contato",
  ];

  await Promise.all(
    routes.map((route) =>
      access(new URL(`../src/pages/${route}.astro`, import.meta.url)),
    ),
  );
});
