import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const readSource = (path) =>
  readFile(new URL(`../src/${path}`, import.meta.url), "utf8");

test("the icon-only mobile menu button has an accessible name", async () => {
  const header = await readSource("components/site/SiteHeader.astro");

  assert.match(
    header,
    /<button[\s\S]*?aria-label="Abrir menu"[\s\S]*?aria-expanded="false"/,
  );
});

test("the home page exposes its primary content in a main landmark", async () => {
  const page = await readSource("components/home/HomePage.astro");

  assert.match(
    page,
    /<main[^>]*id="conteudo"[^>]*>[\s\S]*?<Hero \/>[\s\S]*?<\/main>/,
  );
});
