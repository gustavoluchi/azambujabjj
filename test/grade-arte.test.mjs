import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

const readGrade = async () => {
  const page = await readFile(
    new URL("../dist/horarios/index.html", import.meta.url),
    "utf8",
  );
  const table = page.match(
    /<table class="schedule-table">([\s\S]*?)<\/table>/,
  )?.[1];
  assert.ok(table, "A grade semanal deve existir na página de horários");

  const rows = new Map();
  for (const row of table.match(/<tr>[\s\S]*?<\/tr>/g) ?? []) {
    const time = row.match(/<th scope="row">([^<]+)<\/th>/)?.[1];
    if (!time) continue;
    rows.set(
      time,
      (row.match(/<td>[\s\S]*?<\/td>/g) ?? []).map((cell) =>
        (cell.match(/<span class="class-chip">([^<]*)<\/span>/g) ?? []).map(
          (chip) => chip.replace(/<[^>]*>/g, "").trim(),
        ),
      ),
    );
  }

  return (time, day) => rows.get(time)?.[days.indexOf(day)] ?? [];
};

test("given the printed grid separates them, the table shows Graduados and Funcional as two classes at noon", async () => {
  const classesAt = await readGrade();

  for (const day of ["Terça", "Quinta"]) {
    assert.deepEqual(classesAt("12h", day), ["Graduados", "Funcional"]);
  }
});

test("given the monthly women's Saturday, the schedule page explains it like the printed grid", async () => {
  const page = await readFile(
    new URL("../dist/horarios/index.html", import.meta.url),
    "utf8",
  );
  const note = page.replace(/\s+/g, " ");

  assert.match(note, /Sabadonze das Gurias/);
  assert.match(note, /um sábado por mês/i);
});
