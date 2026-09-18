const DATA_URL = "../apps.json";

const el = (id) => document.getElementById(id);
const listEl = el("app-list");
const searchEl = el("search");
const categoryEl = el("category");
const countEl = el("count");
const emptyEl = el("empty");
const detailEl = el("detail");
const sidebarEl = el("sidebar");
const toggleEl = el("menu-toggle");

let apps = [];
let selected = null;

function normalize(value) {
  return (value || "")
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function filtered() {
  const term = normalize(searchEl.value.trim());
  const cat = categoryEl.value;
  return apps.filter((app) => {
    const inCat = cat === "all" || (app.categories || []).includes(cat);
    const inTerm =
      !term ||
      normalize(app.app).includes(term) ||
      normalize(app.text).includes(term);
    return inCat && inTerm;
  });
}

function renderList() {
  const items = filtered();
  listEl.innerHTML = "";
  countEl.textContent =
    items.length === 1 ? "1 app encontrado" : `${items.length} apps encontrados`;

  items.forEach((app) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = app.app;
    if (selected && selected.app === app.app) btn.setAttribute("aria-current", "true");
    btn.addEventListener("click", () => {
      select(app);
      if (window.matchMedia("(max-width: 820px)").matches) sidebarEl.hidden = true;
    });
    li.appendChild(btn);
    listEl.appendChild(li);
  });
}

function select(app) {
  selected = app;
  emptyEl.hidden = true;
  detailEl.hidden = false;

  el("detail-title").textContent = app.app;
  el("detail-text").textContent = app.text || "";
  const installLines = Array.isArray(app.install)
    ? app.install.join("\n")
    : app.install || "";
  el("detail-install").textContent = installLines;

  const link = el("detail-page");
  if (app.page) {
    link.href = app.page;
    link.hidden = false;
  } else {
    link.hidden = true;
  }

  const cats = el("detail-categories");
  cats.innerHTML = "";
  (app.categories || []).forEach((c) => {
    const li = document.createElement("li");
    li.textContent = c;
    cats.appendChild(li);
  });

  const img = el("detail-img");
  if (app.img) {
    img.src = app.img;
    img.alt = `Captura de tela do ${app.app}`;
    img.hidden = false;
  } else {
    img.removeAttribute("src");
    img.hidden = true;
  }

  el("copy").textContent = "Copiar";
  renderList();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function buildCategories() {
  const set = new Set();
  apps.forEach((a) => (a.categories || []).forEach((c) => set.add(c)));
  const sorted = [...set].sort((a, b) => a.localeCompare(b, "pt-BR"));
  categoryEl.innerHTML = '<option value="all">Todas as categorias</option>';
  sorted.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    categoryEl.appendChild(opt);
  });
}

async function copyInstall() {
  const text = el("detail-install").textContent;
  const btn = el("copy");
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
  btn.textContent = "Copiado!";
  setTimeout(() => (btn.textContent = "Copiar"), 1600);
}

searchEl.addEventListener("input", renderList);
categoryEl.addEventListener("change", renderList);
el("copy").addEventListener("click", copyInstall);
toggleEl.addEventListener("click", () => (sidebarEl.hidden = !sidebarEl.hidden));

(async function init() {
  try {
    const res = await fetch(DATA_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    apps = data
      .filter((a) => a && a.app)
      .sort((a, b) => a.app.localeCompare(b.app, "pt-BR"));
    buildCategories();
    renderList();
    if (apps.length) select(apps[0]);
  } catch (err) {
    countEl.textContent = "Não foi possível carregar a lista de apps.";
    console.error(err);
  }
})();
