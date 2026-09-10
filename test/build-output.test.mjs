import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const routes = [
  "",
  "historia",
  "rafael-azambuja",
  "didatica",
  "faixa-preta",
  "horarios",
  "filiais",
  "contato",
];
const outputPath = (route) =>
  new URL(`../dist/${route ? `${route}/` : ""}index.html`, import.meta.url);

test("given a visitor opens any preserved route, the built page has one clear document structure", async () => {
  const pages = await Promise.all(
    routes.map((route) => readFile(outputPath(route), "utf8")),
  );
  const titles = new Set();

  for (const page of pages) {
    assert.equal((page.match(/<h1(?:\s|>)/g) ?? []).length, 1);
    assert.equal((page.match(/<main(?:\s|>)/g) ?? []).length, 1);
    assert.equal((page.match(/<footer(?:\s|>)/g) ?? []).length, 1);
    assert.match(page, /<meta name="description" content="[^"]+">/);
    for (const image of page.match(/<img\b[^>]*>/g) ?? []) {
      assert.match(image, /\salt(?:="[^"]*"|\s)/);
    }
    for (const frame of page.match(/<iframe\b[^>]*>/g) ?? []) {
      assert.match(frame, /\stitle="[^"]+"/);
    }
    for (const externalLink of page.match(/<a\b[^>]*target="_blank"[^>]*>/g) ??
      []) {
      assert.match(externalLink, /\srel="[^"]*noopener[^"]*noreferrer[^"]*"/);
    }
    const title = page.match(/<title>([^<]+)<\/title>/)?.[1];
    assert.ok(title);
    titles.add(title);
  }

  assert.equal(titles.size, routes.length);
});

test("given the generated site, every root-relative page and asset link resolves", async () => {
  const home = await readFile(outputPath(""), "utf8");
  const anchors = new Set(
    [...home.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]),
  );

  for (const route of routes) {
    const page = await readFile(outputPath(route), "utf8");
    const hrefs = [...page.matchAll(/href="(\/[^"]*)"/g)].map(
      (match) => match[1],
    );

    for (const href of hrefs) {
      const [pathname, hash] = href.split("#");
      if (hash)
        assert.ok(anchors.has(hash), `Missing #${hash} linked from /${route}`);
      if (!pathname || pathname === "/") continue;
      const relative = pathname.replace(/^\//, "");
      const target = relative.includes(".")
        ? new URL(`../dist/${relative}`, import.meta.url)
        : new URL(`../dist/${relative}/index.html`, import.meta.url);
      await access(target);
    }
  }
});
