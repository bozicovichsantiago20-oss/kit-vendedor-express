function byId(id) {
  return document.getElementById(id);
}

function cleanToolValue(value, fallback) {
  const text = String(value || "").trim();
  return text.length ? text : fallback;
}

function copyToolText(text, message) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      const toast = byId("toast");
      if (!toast) return;
      toast.textContent = message;
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 1800);
    })
    .catch(() => {
      const output = byId("tool-output");
      if (output) output.select();
    });
}

function initTitleGenerator() {
  const form = byId("title-tool");
  const output = byId("tool-output");
  const copy = byId("copy-tool-output");
  if (!form || !output) return;

  function buildTitles() {
    const product = cleanToolValue(byId("product").value, "producto");
    const brand = cleanToolValue(byId("brand").value, "");
    const model = cleanToolValue(byId("model").value, "");
    const attribute = cleanToolValue(byId("attribute").value, "detalle clave");
    const audience = cleanToolValue(byId("audience").value, "uso diario");
    const condition = cleanToolValue(byId("condition").value, "nuevo");
    const core = [brand, product, model].filter(Boolean).join(" ");

    const titles = [
      `${core} ${attribute} ${condition}`.trim(),
      `${product} ${attribute} para ${audience}`.trim(),
      `${core} ideal ${audience} - ${attribute}`.trim(),
      `${product} ${condition} con ${attribute}`.trim()
    ];

    const description = [
      `Publicacion sugerida para ${product}:`,
      "",
      `Titulo principal: ${titles[0]}`,
      "",
      "Descripcion breve:",
      `Producto ${condition} pensado para ${audience}. Incluye ${attribute}. Antes de comprar, revisa medidas, compatibilidad, stock y opciones de envio disponibles en la publicacion.`,
      "",
      "Preguntas frecuentes para agregar:",
      "- Hay stock disponible?",
      "- Cuanto demora el envio?",
      "- Emite factura?",
      "- Tiene garantia?",
      "- Que medidas o compatibilidad debo revisar?"
    ];

    output.value = ["Titulos sugeridos:", ...titles.map((title, index) => `${index + 1}. ${title}`), "", ...description].join("\n");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    buildTitles();
  });

  if (copy) {
    copy.addEventListener("click", () => copyToolText(output.value, "Texto copiado."));
  }

  buildTitles();
}

function initPriceCalculator() {
  const form = byId("price-tool");
  const output = byId("tool-output");
  if (!form || !output) return;

  const money = new Intl.NumberFormat("es-AR", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });

  function num(id, fallback = 0) {
    const value = Number(String(byId(id).value || "").replace(",", "."));
    return Number.isFinite(value) ? value : fallback;
  }

  function calculate() {
    const cost = Math.max(0, num("cost"));
    const packaging = Math.max(0, num("packaging"));
    const fixedFee = Math.max(0, num("fixed-fee"));
    const commission = Math.max(0, num("commission")) / 100;
    const margin = Math.max(0, num("margin")) / 100;
    const baseCost = cost + packaging;
    const denominator = 1 - commission;

    if (denominator <= 0) {
      output.value = "La comision no puede ser 100% o mas.";
      return;
    }

    const targetProfit = baseCost * margin;
    const suggestedPrice = (baseCost + targetProfit + fixedFee) / denominator;
    const platformCost = suggestedPrice * commission + fixedFee;
    const netAfterCosts = suggestedPrice - platformCost - baseCost;
    const breakEven = (baseCost + fixedFee) / denominator;

    output.value = [
      "Resultado estimado",
      "",
      `Precio minimo para no perder: $${money.format(breakEven)}`,
      `Precio sugerido con margen: $${money.format(suggestedPrice)}`,
      `Costo total producto + empaque: $${money.format(baseCost)}`,
      `Comision y cargos estimados: $${money.format(platformCost)}`,
      `Ganancia estimada: $${money.format(netAfterCosts)}`,
      "",
      "Nota: es una estimacion operativa. Revisa comisiones, impuestos, envios y promociones reales antes de publicar."
    ].join("\n");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    calculate();
  });

  const copy = byId("copy-tool-output");
  if (copy) {
    copy.addEventListener("click", () => copyToolText(output.value, "Calculo copiado."));
  }

  calculate();
}

initTitleGenerator();
initPriceCalculator();
