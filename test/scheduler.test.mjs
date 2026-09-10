import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("given a visitor wants a trial class, the local scheduler route exists", async () => {
  await access(
    new URL("../src/pages/agendar-aula-experimental.astro", import.meta.url),
  );
});

test("given the replicated scheduler, it preserves the complete booking journey", async () => {
  const [page, data] = await Promise.all([
    read("src/components/scheduler/SchedulerPage.astro"),
    read("src/data/scheduler.ts"),
  ]);
  const source = `${page}\n${data}`.replace(/\s+/g, " ");

  for (const behavior of [
    "Preencha e continue no WhatsApp",
    "Jiu Jitsu Infantil",
    "Idade da criança",
    "Somente graduados",
    "Qual dia você quer vir",
    "Pronto, sua aula está marcada",
    "Abrir conversa no WhatsApp",
    "5551980267688",
  ]) {
    assert.match(
      source,
      new RegExp(behavior.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
    );
  }
});
