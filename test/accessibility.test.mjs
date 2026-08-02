import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readComponent = (name) =>
  readFile(new URL(`../src/components/${name}`, import.meta.url), "utf8");

test("the icon-only mobile menu button has an accessible name", async () => {
  const header = await readComponent("Header.astro");

  assert.match(
    header,
    /<button[^>]*aria-label="Abrir menu de navegação"[^>]*>[\s\S]*?<svg/,
  );
});

test("the home page exposes its primary content in a main landmark", async () => {
  const page = await readComponent("PaginaInicial.astro");

  assert.match(page, /<main[^>]*>[\s\S]*?<Conteudo \/>[\s\S]*?<\/main>/);
});
