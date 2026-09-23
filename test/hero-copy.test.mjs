import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const antithesis = /não precisa estar pronto/i;

test("given a first-time visitor, the homepage leads with the new promise", async () => {
  const home = await readFile(
    new URL("../dist/index.html", import.meta.url),
    "utf8",
  );
  const heading = home.match(/<h1 id="hero-title">([\s\S]*?)<\/h1>/)?.[1];

  assert.ok(heading, "A página inicial deve ter o título principal");
  assert.match(heading.replace(/<[^>]*>/g, " "), /Jiu jitsu que cabe/);
  assert.match(heading.replace(/<[^>]*>/g, " "), /na sua vida/);
});

test("given the copy a competitor also uses, no page repeats it", async () => {
  const sources = await Promise.all(
    [
      "src/components/home/Hero.astro",
      "src/components/scheduler/SchedulerPage.astro",
    ].map(read),
  );

  for (const source of sources) {
    assert.doesNotMatch(source, antithesis);
  }
});
