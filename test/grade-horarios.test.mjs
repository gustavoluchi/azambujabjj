import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const gradePath = new URL("../dist/horarios/index.html", import.meta.url);
const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

const readGrade = async () => {
  const page = await readFile(gradePath, "utf8");
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

test("given a visitor lands on the homepage, the schedule section signals the downloadable grid", async () => {
  const home = await readFile(
    new URL("../dist/index.html", import.meta.url),
    "utf8",
  );
  const section = home.match(
    /<section[^>]*id="horarios"[\s\S]*?<\/section>/,
  )?.[0];

  assert.ok(section, "A página inicial deve ter a seção de horários");
  assert.match(section, /href="\/gradehorarios\.jpeg"[^>]*download/);
  assert.match(section, /href="\/horarios"/);
});

test("given the feminine class moved out of Monday, the grid no longer offers it at 9h", async () => {
  const classesAt = await readGrade();

  assert.deepEqual(classesAt("9h", "Segunda"), []);
  assert.deepEqual(classesAt("9h", "Quarta"), ["Feminina (kimono)"]);
});

test("given the new evening feminine classes, Tuesday and Thursday run them alongside the teenagers at 19h", async () => {
  const classesAt = await readGrade();

  for (const day of ["Terça", "Quinta"]) {
    assert.deepEqual(classesAt("19h", day), ["Adolescentes", "Feminina"]);
  }
});
