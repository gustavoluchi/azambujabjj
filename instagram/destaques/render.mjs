// Gera as capas e os stories dos destaques do Instagram em JPG,
// no visual do site (cores, fontes e componentes de src/styles/globals.css).
//
// Uso:
//   node instagram/destaques/render.mjs            # gera tudo em instagram/destaques/out
//   node instagram/destaques/render.mjs metodo     # só um destaque (pelo slug)
//
// Precisa do Playwright (npm i -g playwright, ou NODE_PATH apontando pra ele)
// e das fontes @fontsource-variable/sora e /inter (pnpm install na raiz, ou
// AZ_FONTS_DIR apontando pra uma pasta com node_modules/@fontsource-variable).

/* global process */
import { createRequire } from "node:module";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { brand, highlights } from "./content.mjs";

const require = createRequire(import.meta.url);
const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "../..");
const outDir = join(here, "out");
const fontsRoot = process.env.AZ_FONTS_DIR ?? root;
const iconsRoot = process.env.AZ_ICONS_DIR ?? fontsRoot;

const fontFile = (pkg, file) =>
  pathToFileURL(
    join(fontsRoot, "node_modules/@fontsource-variable", pkg, "files", file),
  ).href;
const asset = (rel) => pathToFileURL(join(root, rel)).href;

const photoPath = (name) => {
  const candidates = [
    `src/assets/reference/${name}`,
    `src/assets/Faixas Pretas/21. Adryan Carvalho.jpg`,
  ];
  for (const c of candidates)
    if (
      c.endsWith(name) ||
      (name === "adryan-carvalho.jpg" && c.includes("Adryan"))
    ) {
      if (existsSync(join(root, c))) return asset(c);
    }
  throw new Error(`Foto não encontrada: ${name}`);
};

const icon = (name) => {
  const file = join(
    iconsRoot,
    "node_modules/lucide-static/icons",
    `${name}.svg`,
  );
  return readFileSync(file, "utf8").replace(/<svg[^>]*>/, (tag) =>
    tag
      .replace(/\s(width|height)="[^"]*"/g, "")
      .replace("<svg", '<svg width="1em" height="1em"'),
  );
};

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
// Permite só <em> no texto de título.
const rich = (s) =>
  esc(s)
    .replace(/&lt;em>/g, "<em>")
    .replace(/&lt;\/em>/g, "</em>");

const css = `
@font-face { font-family: "Sora Variable"; font-weight: 100 800; src: url("${fontFile("sora", "sora-latin-wght-normal.woff2")}") format("woff2"); }
@font-face { font-family: "Inter Variable"; font-weight: 100 900; src: url("${fontFile("inter", "inter-latin-wght-normal.woff2")}") format("woff2"); }
:root {
  --navy: #0b1c3d; --navy-deep: #071228; --navy-soft: #14294f;
  --yellow: #f2c230; --yellow-soft: #f7d669; --ivory: #f6f4ee; --white: #fdfdfd;
  --ink: #13213a; --muted: #c9d1e0; --line-dark: rgb(253 253 253 / 13%);
}
* { box-sizing: border-box; margin: 0; }
html, body { width: 1080px; height: 1920px; overflow: hidden; }
body {
  position: relative; color: var(--white);
  font-family: "Inter Variable", system-ui, sans-serif; line-height: 1.5;
  background:
    radial-gradient(circle at 88% 12%, rgb(242 194 48 / 16%), transparent 34%),
    linear-gradient(180deg, var(--navy-deep), var(--navy));
  -webkit-font-smoothing: antialiased;
}
body::before {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgb(255 255 255 / 3.5%) 1px, transparent 1px),
    linear-gradient(90deg, rgb(255 255 255 / 3.5%) 1px, transparent 1px);
  background-size: 96px 96px;
}
h1, h2, h3, .eyebrow, .button, .brand, .number, .stat strong { font-family: "Sora Variable", system-ui, sans-serif; }
em { font-style: normal; color: var(--yellow); }
img { display: block; }

.frame { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; padding: 250px 88px 280px; }
.brand { position: absolute; top: 120px; left: 88px; display: flex; align-items: center; gap: 22px; }
.brand img { width: 96px; height: 96px; }
.brand__copy { display: flex; flex-direction: column; line-height: 1.15; }
.brand__copy strong { font-size: 28px; letter-spacing: .02em; text-transform: uppercase; }
.brand__copy span { margin-top: 6px; color: var(--yellow-soft); font-size: 16px; letter-spacing: .13em; text-transform: uppercase; }
.sba { position: absolute; top: 118px; right: 88px; height: 100px; opacity: .9; }
.sba img { height: 100%; width: auto; }

.footer { position: absolute; right: 88px; bottom: 150px; left: 88px; }
.footer__stripes { display: grid; gap: 14px; margin-bottom: 30px; }
.footer__stripes::before, .footer__stripes::after { content: ""; height: 12px; background: var(--yellow); }
.footer__stripes::after { opacity: .5; }
.footer__row { display: flex; justify-content: space-between; color: var(--muted); font-size: 22px; letter-spacing: .14em; text-transform: uppercase; }
.footer__row strong { color: var(--white); font-weight: 650; }

.eyebrow { margin-bottom: 26px; color: var(--yellow-soft); font-size: 22px; font-weight: 750; letter-spacing: .16em; text-transform: uppercase; }
h1 { font-size: 88px; line-height: 1.06; letter-spacing: -.045em; font-weight: 700; max-width: 12ch; }
h1.h1--sm { font-size: 76px; }
h2 { font-size: 64px; line-height: 1.1; letter-spacing: -.035em; font-weight: 700; margin-bottom: 30px; }
.lead { margin-top: 40px; color: var(--muted); font-size: 34px; line-height: 1.45; max-width: 26ch; }
.chips { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 56px; }
.chips span { padding: 14px 22px; border: 1px solid var(--line-dark); border-radius: 999px; background: rgb(253 253 253 / 6%); font-size: 24px; font-weight: 550; }

.center { justify-content: center; }
blockquote { font-family: "Sora Variable", system-ui, sans-serif; font-size: 62px; line-height: 1.22; letter-spacing: -.03em; font-weight: 600; }
blockquote::before { content: "“"; display: block; color: var(--yellow); font-size: 180px; line-height: .6; margin-bottom: 30px; }
cite { display: block; margin-top: 44px; color: var(--yellow-soft); font-style: normal; font-size: 22px; letter-spacing: .16em; text-transform: uppercase; }

.check-list { list-style: none; padding: 0; margin-top: 40px; display: grid; gap: 22px; }
.check-list li { display: flex; gap: 20px; align-items: flex-start; font-size: 32px; line-height: 1.3; }
.check-list li::before { content: ""; flex: none; width: 34px; height: 34px; margin-top: 6px; border-radius: 50%; background: var(--yellow) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23071228' stroke-width='3.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E") center/20px no-repeat; }

.numbered { display: grid; gap: 34px; margin-top: 44px; }
.method-item { padding: 40px 44px; border: 1px solid var(--line-dark); border-radius: 28px; background: rgb(253 253 253 / 5%); }
.method-item .number { color: var(--yellow); font-size: 24px; font-weight: 750; letter-spacing: .16em; margin-bottom: 12px; }
.method-item h3 { font-size: 38px; margin-bottom: 12px; letter-spacing: -.02em; }
.method-item p { color: var(--muted); font-size: 28px; line-height: 1.4; }

.cards { display: grid; gap: 28px; margin-top: 44px; }
.card { padding: 38px 44px; border-radius: 28px; background: var(--ivory); color: var(--ink); }
.card .tag { display: inline-block; margin-bottom: 14px; padding: 8px 16px; border-radius: 999px; background: var(--navy); color: var(--yellow-soft); font-size: 20px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
.card h3 { font-size: 40px; margin-bottom: 10px; letter-spacing: -.02em; }
.card p { color: #5c5a52; font-size: 27px; line-height: 1.4; }

.stats { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 56px; }
.stat { padding: 44px 40px; border: 1px solid var(--line-dark); border-radius: 28px; background: rgb(253 253 253 / 5%); }
.stat strong { display: block; color: var(--yellow); font-size: 84px; line-height: 1; letter-spacing: -.04em; margin-bottom: 14px; }
.stat span { color: var(--muted); font-size: 26px; }

.schedule { display: grid; gap: 34px; margin-top: 30px; }
.day h3 { color: var(--yellow-soft); font-size: 24px; letter-spacing: .16em; text-transform: uppercase; margin-bottom: 14px; }
.day table { width: 100%; border-collapse: collapse; }
.day td { padding: 14px 0; border-top: 1px solid var(--line-dark); font-size: 30px; }
.day td:first-child { width: 150px; font-family: "Sora Variable", system-ui, sans-serif; font-weight: 700; color: var(--yellow); }

.plan { margin-top: 40px; padding: 48px 44px; border-radius: 28px; background: var(--ivory); color: var(--ink); }
.plan .row { display: flex; justify-content: space-between; gap: 30px; padding: 24px 0; border-top: 1px solid rgb(11 28 61 / 12%); }
.plan .row:first-child { border-top: 0; padding-top: 0; }
.plan .row span { font-size: 27px; color: #5c5a52; max-width: 20ch; }
.plan .row strong { flex: none; font-family: "Sora Variable", system-ui, sans-serif; font-size: 30px; text-align: right; }

.profile-photo { width: 100%; aspect-ratio: 4 / 3; border-radius: 28px; overflow: hidden; margin-bottom: 44px; border: 1px solid var(--line-dark); }
.profile-photo img { width: 100%; height: 100%; object-fit: cover; object-position: center 12%; }
.profile p.text { margin-top: 26px; color: var(--muted); font-size: 29px; line-height: 1.45; }
.profile .stats { grid-template-columns: repeat(3, 1fr); gap: 18px; margin-top: 36px; }
.profile .stat { padding: 26px 22px; }
.profile .stat strong { font-size: 44px; margin-bottom: 8px; }
.profile .stat span { font-size: 20px; }

.names { list-style: none; padding: 0; margin-top: 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px 32px; }
.names li { display: grid; grid-template-columns: 54px 1fr; gap: 12px; align-items: baseline; padding: 16px 0; border-top: 1px solid var(--line-dark); font-size: 27px; }
.names .n { color: var(--yellow); font-family: "Sora Variable", system-ui, sans-serif; font-weight: 700; }
.names small { display: block; color: var(--muted); font-size: 20px; margin-top: 2px; }

.course { margin-top: 40px; padding: 48px 44px; border-radius: 28px; background: var(--ivory); color: var(--ink); }
.course .tag { display: inline-block; margin-bottom: 20px; padding: 8px 16px; border-radius: 999px; background: var(--navy); color: var(--yellow-soft); font-size: 20px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
.course h3 { font-size: 56px; letter-spacing: -.03em; }
.course .subtitle { color: var(--navy); font-weight: 650; font-size: 28px; margin: 8px 0 20px; }
.course p { color: #5c5a52; font-size: 27px; line-height: 1.45; }
.course .price { margin-top: 34px; padding-top: 28px; border-top: 1px solid rgb(11 28 61 / 12%); display: grid; gap: 6px; }
.course .price s { color: #8a8578; font-size: 24px; }
.course .price strong { font-family: "Sora Variable", system-ui, sans-serif; font-size: 44px; letter-spacing: -.02em; }
.course .price span { color: #5c5a52; font-size: 24px; }

.unit { margin-top: 40px; padding: 48px 44px; border-radius: 28px; background: var(--ivory); color: var(--ink); }
.unit .tag { display: inline-block; margin-bottom: 18px; padding: 8px 16px; border-radius: 999px; background: var(--navy); color: var(--yellow-soft); font-size: 20px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
.unit h3 { font-size: 46px; letter-spacing: -.025em; margin-bottom: 20px; }
.unit .teacher { display: flex; align-items: center; gap: 16px; font-weight: 650; font-size: 27px; color: var(--navy); margin-bottom: 20px; }
.unit .teacher img { width: 72px; height: 72px; border-radius: 50%; object-fit: cover; }
.unit p { color: #5c5a52; font-size: 27px; line-height: 1.45; }
.unit address { margin-top: 26px; padding-top: 22px; border-top: 1px solid rgb(11 28 61 / 12%); font-style: normal; font-size: 26px; line-height: 1.4; }
.unit .contact { margin-top: 10px; font-family: "Sora Variable", system-ui, sans-serif; font-weight: 700; font-size: 27px; }

.contact-list { display: grid; gap: 18px; margin-top: 50px; }
.contact-list div { padding: 26px 32px; border: 1px solid var(--line-dark); border-radius: 22px; background: rgb(253 253 253 / 5%); }
.contact-list strong { display: block; color: var(--yellow-soft); font-size: 20px; letter-spacing: .14em; text-transform: uppercase; margin-bottom: 6px; }
.contact-list span { font-size: 30px; }

.button { display: inline-flex; align-items: center; justify-content: center; margin-top: 60px; padding: 30px 48px; border-radius: 18px; background: var(--yellow); color: var(--navy-deep); font-size: 32px; font-weight: 750; }
.url { margin-top: 30px; font-family: "Sora Variable", system-ui, sans-serif; font-size: 30px; font-weight: 650; text-decoration: underline; text-decoration-color: var(--yellow); text-decoration-thickness: 3px; text-underline-offset: 8px; word-break: break-all; }
.note { margin-top: 40px; color: var(--muted); font-size: 24px; }

/* Capa */
body.cover { width: 1080px; height: 1080px; background: linear-gradient(145deg, var(--navy-soft), var(--navy-deep)); }
html.cover { height: 1080px; }
body.cover::after { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 50% 32%, rgb(242 194 48 / 16%), transparent 60%); }
.cover__ring { position: absolute; inset: 70px; border: 8px solid var(--yellow); border-radius: 50%; }
.cover__ring::after { content: ""; position: absolute; inset: 22px; border: 2px solid rgb(242 194 48 / 45%); border-radius: 50%; }
.cover__icon { position: absolute; inset: 0; display: grid; place-items: center; color: var(--yellow); font-size: 380px; z-index: 1; }
.cover__icon svg { stroke-width: 1.6; filter: drop-shadow(0 24px 40px rgb(0 0 0 / 35%)); }
.cover__stripes { position: absolute; left: 300px; right: 300px; bottom: 210px; display: grid; gap: 14px; z-index: 1; }
.cover__stripes::before, .cover__stripes::after { content: ""; height: 12px; background: var(--yellow); }
.cover__stripes::after { opacity: .5; }
`;

const frameTop = (slide) => `
  <a class="brand"><img src="${asset("src/assets/reference/logo-azambuja.png")}" alt=""><span class="brand__copy"><strong>${esc(brand.name)}</strong><span>${esc(brand.tagline)}</span></span></a>
  ${slide.sba ? `<span class="sba"><img src="${asset("src/assets/reference/sba-logo.png")}" alt=""></span>` : ""}`;

const frameBottom = () => `
  <div class="footer"><div class="footer__stripes"></div>
    <div class="footer__row"><strong>${esc(brand.site)}</strong><span>${esc(brand.instagram)}</span></div></div>`;

const head = (s) =>
  `${s.eyebrow ? `<p class="eyebrow">${esc(s.eyebrow)}</p>` : ""}`;
const stats = (rows) =>
  `<div class="stats">${rows.map(([v, l]) => `<div class="stat"><strong>${esc(v)}</strong><span>${esc(l)}</span></div>`).join("")}</div>`;

const bodies = {
  title: (s) =>
    `${head(s)}<h1>${rich(s.title)}</h1>${s.lead ? `<p class="lead">${esc(s.lead)}</p>` : ""}${s.chips ? `<div class="chips">${s.chips.map((c) => `<span>${esc(c)}</span>`).join("")}</div>` : ""}`,
  text: (s) =>
    `${head(s)}<h1 class="h1--sm">${rich(s.title)}</h1><p class="lead">${esc(s.lead)}</p>`,
  quote: (s) =>
    `<blockquote>${esc(s.quote)}</blockquote><cite>${esc(s.cite)}</cite>`,
  list: (s) =>
    `${head(s)}<h2>${rich(s.title)}</h2>${s.lead ? `<p class="lead" style="margin-top:0">${esc(s.lead)}</p>` : ""}<ul class="check-list">${s.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`,
  numbered: (s) =>
    `${head(s)}<h2>${rich(s.title)}</h2><div class="numbered">${s.items.map((i, n) => `<article class="method-item"><p class="number">0${n + 1}</p><h3>${esc(i.title)}</h3><p>${esc(i.text)}</p></article>`).join("")}</div>`,
  cards: (s) =>
    `${head(s)}<h2>${rich(s.title)}</h2><div class="cards">${s.cards.map((c) => `<article class="card"><span class="tag">${esc(c.tag)}</span><h3>${esc(c.title)}</h3><p>${esc(c.text)}</p></article>`).join("")}</div>`,
  stats: (s) =>
    `${head(s)}<h2>${rich(s.title)}</h2>${stats(s.stats.map((x) => [x.value, x.label]))}`,
  schedule: (s) =>
    `${head(s)}<h2>${rich(s.title)}</h2><div class="schedule">${s.days.map((d) => `<section class="day"><h3>${esc(d.day)}</h3><table>${d.slots.map(([t, n]) => `<tr><td>${esc(t)}</td><td>${esc(n)}</td></tr>`).join("")}</table></section>`).join("")}</div>`,
  plan: (s) =>
    `${head(s)}<h2>${rich(s.title)}</h2><div class="plan">${s.rows.map(([l, p]) => `<div class="row"><span>${esc(l)}</span><strong>${esc(p)}</strong></div>`).join("")}</div>`,
  profile: (s) =>
    `<div class="profile"><div class="profile-photo"><img src="${photoPath(s.photo)}" alt=""></div>${head(s)}<h2 style="margin-bottom:0">${esc(s.name)}</h2><p class="text">${esc(s.text)}</p>${stats(s.stats)}</div>`,
  names: (s) =>
    `${head(s)}<h2>${rich(s.title)}</h2><ol class="names">${s.names.map(([n, d], i) => `<li><span class="n">${(s.start ?? 1) + i}</span><span>${esc(n)}<small>Faixa preta em ${esc(d)}</small></span></li>`).join("")}</ol>`,
  course: (s) =>
    `<p class="eyebrow">Curso online · Conteúdo oficial SBA</p><h2>Aprofunde <em>o método</em></h2><article class="course"><span class="tag">${esc(s.tag)}</span><h3>${esc(s.title)}</h3><p class="subtitle">${esc(s.subtitle)}</p><p>${esc(s.text)}</p><div class="price"><s>${esc(s.oldPrice)}</s><strong>${esc(s.price)}</strong><span>${esc(s.installments)}</span></div></article>`,
  unit: (s) =>
    `<p class="eyebrow">Unidades</p><h2>Onde <em>treinar</em></h2><article class="unit"><span class="tag">${esc(s.tag)}</span><h3>${esc(s.title)}</h3><div class="teacher"><img src="${photoPath(s.photo)}" alt="">${esc(s.teacher)}</div><p>${esc(s.text)}</p><address>${esc(s.address)}</address><p class="contact">${esc(s.contact)}</p></article>`,
  contact: (s) =>
    `${head(s)}<h1 class="h1--sm">${rich(s.title)}</h1><p class="lead" style="margin-top:24px">${esc(s.lead)}</p><div class="contact-list">${s.rows.map(([l, v]) => `<div><strong>${esc(l)}</strong><span>${esc(v)}</span></div>`).join("")}</div>`,
  cta: (s) =>
    `${head(s)}<h1 class="h1--sm">${rich(s.title)}</h1><div><span class="button">${esc(s.button)}</span></div><p class="url">${esc(s.url)}</p>${s.note ? `<p class="note">${esc(s.note)}</p>` : ""}`,
};

const centered = new Set(["quote", "cta", "text", "title", "contact"]);

const storyHtml = (
  slide,
) => `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><style>${css}</style></head>
<body>${frameTop(slide)}<main class="frame ${centered.has(slide.type) ? "center" : ""}">${bodies[slide.type](slide)}</main>${frameBottom()}</body></html>`;

const coverHtml = (
  h,
) => `<!doctype html><html lang="pt-BR" class="cover"><head><meta charset="utf-8"><style>${css}</style></head>
<body class="cover"><div class="cover__ring"></div><div class="cover__icon">${icon(h.icon)}</div><div class="cover__stripes"></div></body></html>`;

const only = process.argv[2];
const { chromium } = require("playwright");
const browser = await chromium.launch();
const page = await browser.newPage({ deviceScaleFactor: 1 });

// Abre via file:// (e não setContent) pra fontes e fotos locais carregarem.
const tmpHtml = join(outDir, ".tmp.html");
const shoot = async (html, file, size) => {
  await page.setViewportSize(size);
  writeFileSync(tmpHtml, html);
  await page.goto(pathToFileURL(tmpHtml).href, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot(
    file.endsWith(".jpg")
      ? { path: file, type: "jpeg", quality: 92 }
      : { path: file, type: "png" },
  );
};

mkdirSync(join(outDir, "capas"), { recursive: true });
const index = [];
for (const [i, h] of highlights.entries()) {
  if (only && h.slug !== only) continue;
  const n = String(i + 1).padStart(2, "0");
  const coverFile = join(outDir, "capas", `${n}-${h.slug}.jpg`);
  await shoot(coverHtml(h), coverFile, { width: 1080, height: 1080 });
  const dir = join(outDir, "stories", `${n}-${h.slug}`);
  mkdirSync(dir, { recursive: true });
  for (const [j, slide] of h.slides.entries()) {
    const file = join(
      dir,
      `${n}-${h.slug}-${String(j + 1).padStart(2, "0")}-${slide.type}.jpg`,
    );
    await shoot(storyHtml(slide), file, { width: 1080, height: 1920 });
    if (process.env.AZ_KEEP_HTML)
      writeFileSync(file.replace(/\.jpg$/, ".html"), storyHtml(slide));
  }
  index.push(
    `${n}. ${h.name} (${h.slug}) · capa: ${h.icon} · ${h.slides.length} stories`,
  );
  console.log(index.at(-1));
}
await browser.close();
rmSync(tmpHtml, { force: true });
