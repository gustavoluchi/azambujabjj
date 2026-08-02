import assert from "node:assert/strict";
import { Buffer } from "node:buffer";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("the site uses the logo favicon at a browser-friendly size", async () => {
  const layout = await readFile(
    new URL("../src/layouts/Layout.astro", import.meta.url),
    "utf8",
  );
  const favicon = await readFile(
    new URL("../public/favicon.png", import.meta.url),
  );

  assert.match(
    layout,
    /<link rel="icon" type="image\/png" sizes="64x64" href="\/favicon\.png" \/>/,
  );
  assert.deepEqual(
    favicon.subarray(0, 8),
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
  );
  assert.equal(favicon.readUInt32BE(16), 64);
  assert.equal(favicon.readUInt32BE(20), 64);
});
