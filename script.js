// ── Datos ──────────────────────────────────────────────────────────────────

const contacto = {
  empresa: "ELABORA Servicios",
  email: "info@elaboraservicios.es",
  telefono: "+34 000 000 000",
  direccion: "Sevilla, España"
};

// ── Render ─────────────────────────────────────────────────────────────────

function renderContacto() {
  const container = document.getElementById("contacto-info");
  if (!container) return;
  container.className = "contacto-info";
  container.innerHTML = `
    <p><strong>${contacto.empresa}</strong></p>
    <p>Email: <a href="mailto:${contacto.email}">${contacto.email}</a></p>
    <p>Teléfono: <a href="tel:${contacto.telefono}">${contacto.telefono}</a></p>
    <p>Dirección: ${contacto.direccion}</p>
  `;
}

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

// ── Acordeón genérico (un botón, un cuerpo) ────────────────────────────────

function initSimpleAcordeon(toggleSelector, bodyId) {
  const toggle = document.querySelector(toggleSelector);
  const body   = document.getElementById(bodyId);
  if (!toggle || !body) return;
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    body.classList.toggle("is-open", !expanded);
  });
}

// ── Tabs de servicios ──────────────────────────────────────────────────────

function initServiciosTabs() {
  const tabs   = document.querySelectorAll(".srv-block");
  const panels = document.querySelectorAll(".srv-panel");
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const panelId = tab.getAttribute("aria-controls");

      // Reset todos los tabs y paneles
      tabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      panels.forEach(p => p.classList.remove("active"));

      // Activar el pulsado
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      const panel = document.getElementById(panelId);
      if (panel) panel.classList.add("active");
    });
  });
}

// ── Init ───────────────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  renderContacto();
  setYear();
  initSimpleAcordeon(".quienes-toggle",    "quienes-body");
  initSimpleAcordeon(".servicios-toggle",  "servicios-body");
  initSimpleAcordeon(".proyectos-toggle",  "proyectos-body");
  initServiciosTabs();
});
