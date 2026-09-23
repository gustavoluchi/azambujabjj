import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const site = "https://azambujabjj.com.br";
const routes = [
  ["", "/"],
  ["historia", "/historia"],
  ["horarios", "/horarios"],
  ["filiais", "/filiais"],
  ["contato", "/contato"],
];
const read = (route) =>
  readFile(
    new URL(`../dist/${route ? `${route}/` : ""}index.html`, import.meta.url),
    "utf8",
  );

test("given a search engine, every page declares its own address on the official domain", async () => {
  for (const [route, path] of routes) {
    const page = await read(route);

    assert.match(
      page,
      new RegExp(`<link rel="canonical" href="${site}${path}"`),
      `Canônica ausente ou errada em /${route}`,
    );
  }
});

test("given a link shared on WhatsApp, the page carries a preview card", async () => {
  const home = await read("");

  assert.match(home, new RegExp(`<meta property="og:url" content="${site}/"`));
  assert.match(
    home,
    new RegExp(`<meta property="og:image" content="${site}/og-azambuja.jpg"`),
  );
  assert.match(home, /<meta property="og:image:width" content="1200">/);
  assert.match(home, /<meta property="og:image:height" content="630">/);
  assert.match(home, /<meta property="og:image:alt" content="[^"]+"/);
  assert.match(
    home,
    /<meta name="twitter:card" content="summary_large_image">/,
  );
});
