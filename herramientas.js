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
      toast.textContent = `${message} Si te ahorro tiempo, puedes apoyar USD 1.`;
      toast.classList.add("show");
      window.setTimeout(() => toast.classList.remove("show"), 2600);
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

function initPromptGenerator() {
  const form = byId("prompt-tool");
  const output = byId("tool-output");
  const copy = byId("copy-tool-output");
  if (!form || !output) return;

  function buildPrompts() {
    const product = cleanToolValue(byId("prompt-product").value, "producto");
    const channel = cleanToolValue(byId("prompt-channel").value, "marketplace");
    const goal = cleanToolValue(byId("prompt-goal").value, "vender mejor");
    const tone = cleanToolValue(byId("prompt-tone").value, "claro y directo");
    const detail = cleanToolValue(byId("prompt-detail").value, "dato clave del producto");

    output.value = [
      "Prompts listos para pegar en una IA",
      "",
      "1. Publicacion optimizada",
      `Actua como especialista en ecommerce. Quiero ${goal} en ${channel} para este producto: ${product}. Usa un tono ${tone}. Dato clave: ${detail}. Devuelve un titulo claro, una descripcion breve, beneficios, preguntas frecuentes y advertencias que eviten reclamos.`,
      "",
      "2. Respuestas frecuentes",
      `Crea 10 respuestas rapidas para compradores de ${product} en ${channel}. Cubre stock, envio, medidas, garantia, factura, precio, cambios, devoluciones, retiro y compra mayorista. Tono ${tone}. Incluye este dato cuando corresponda: ${detail}.`,
      "",
      "3. Mensaje de cierre",
      `Escribe 5 mensajes cortos para cerrar una venta de ${product} por ${channel}. No prometas descuentos falsos. Usa urgencia moderada, claridad y tono ${tone}. Dato clave: ${detail}.`,
      "",
      "4. Revision anti-reclamos",
      `Revisa una publicacion de ${product} y dime que informacion falta para reducir reclamos. Ordena la respuesta en: titulo, fotos, descripcion, preguntas frecuentes, garantia, envio, cambios y postventa. Contexto: ${channel}.`,
      "",
      "5. Postventa",
      `Crea mensajes de postventa para ${product}: confirmacion de compra, seguimiento, pedido de datos faltantes, aviso de demora, cambio/devolucion y recompra. Tono ${tone}. Dato clave: ${detail}.`
    ].join("\n");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    buildPrompts();
  });

  if (copy) {
    copy.addEventListener("click", () => copyToolText(output.value, "Prompts copiados."));
  }

  buildPrompts();
}

function initWhatsAppGenerator() {
  const form = byId("whatsapp-tool");
  const output = byId("tool-output");
  const copy = byId("copy-tool-output");
  if (!form || !output) return;

  const templates = {
    consulta: {
      claro:
        "Hola. Gracias por escribir por {product}. Para confirmarte bien necesito {detail}. Con eso te digo disponibilidad, precio y entrega.",
      cercano:
        "Hola! Gracias por consultar por {product}. Pasame {detail} y te confirmo la mejor opcion para avanzar.",
      firme:
        "Hola. Para responder correctamente sobre {product}, necesito {detail}. Con ese dato confirmo disponibilidad y condiciones."
    },
    precio: {
      claro:
        "Hola. {product} esta en {price}. Incluye {detail}. Si te sirve, te paso medios de pago y coordinamos entrega.",
      cercano:
        "Hola! {product} te queda en {price}. {detail}. Si queres avanzar, lo dejamos reservado con pago o sena.",
      firme:
        "Hola. El precio vigente de {product} es {price}. {detail}. La reserva se confirma con pago."
    },
    stock: {
      claro:
        "Hola. Tenemos stock de {product}. {detail}. Puedo reservarlo cuando confirmes el pago.",
      cercano:
        "Hola! Si, tengo {product} disponible. {detail}. Si te sirve, avanzamos y lo dejamos listo.",
      firme:
        "Hola. Stock disponible de {product} al momento de esta respuesta. {detail}. Sin pago no queda reservado."
    },
    envio: {
      claro:
        "Pasame tu zona o codigo postal y te confirmo costo y plazo para {product}. {detail}.",
      cercano:
        "Dale, te confirmo envio de {product}. Pasame zona o CP. {detail}.",
      firme:
        "Para cotizar envio de {product}, necesito zona o codigo postal. {detail}."
    },
    descuento: {
      claro:
        "Por ahora el precio de {product} es {price}. {detail}. Si llevas mas unidades, puedo revisar una opcion por cantidad.",
      cercano:
        "Te entiendo. Hoy {product} esta en {price}. {detail}. Si queres, pasame cantidad y veo si hay margen por volumen.",
      firme:
        "El precio vigente de {product} es {price}. {detail}. No puedo bajarlo por una unidad, pero reviso por cantidad."
    },
    seguimiento: {
      claro:
        "Hola. Te escribo para saber si pudiste revisar {product}. Si necesitas precio, envio o medidas, te lo confirmo por aca.",
      cercano:
        "Hola! Queria saber si seguia interesandote {product}. Si te falta algun dato, te ayudo por aca.",
      firme:
        "Hola. Retomo la consulta por {product}. Si queres avanzar, confirmame {detail} y te indico el siguiente paso."
    },
    postventa: {
      claro:
        "Hola. Gracias por avisar sobre {product}. Mandame foto, numero de compra y detalle del problema para revisarlo.",
      cercano:
        "Hola! Lamento el inconveniente con {product}. Pasame foto y detalle de lo ocurrido, y lo revisamos.",
      firme:
        "Hola. Para revisar el caso de {product}, necesito evidencia, numero de compra y detalle del problema. La gestion se define con esos datos."
    }
  };

  function buildWhatsAppMessages() {
    const product = cleanToolValue(byId("wa-product").value, "el producto");
    const intent = cleanToolValue(byId("wa-intent").value, "consulta");
    const tone = cleanToolValue(byId("wa-tone").value, "claro");
    const price = cleanToolValue(byId("wa-price").value, "$[precio]");
    const detail = cleanToolValue(byId("wa-detail").value, "dato clave");
    const template = templates[intent]?.[tone] || templates.consulta.claro;
    const main = template
      .replaceAll("{product}", product)
      .replaceAll("{price}", price)
      .replaceAll("{detail}", detail);

    output.value = [
      "Mensaje principal para WhatsApp",
      "",
      main,
      "",
      "Seguimiento sin presionar",
      `Hola. Te escribo para saber si pudiste revisar ${product}. Si te falta precio, envio, medidas o forma de pago, te lo paso por aca.`,
      "",
      "Cierre amable",
      `Si te sirve, dejamos ${product} listo hoy. Te paso medios de pago y apenas se acredita coordinamos envio o retiro.`,
      "",
      "Recordatorio para cargar como respuesta rapida:",
      `/${intent}-${tone} -> ${main}`
    ].join("\n");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    buildWhatsAppMessages();
  });

  if (copy) {
    copy.addEventListener("click", () => copyToolText(output.value, "Mensajes copiados."));
  }

  buildWhatsAppMessages();
}

initTitleGenerator();
initPriceCalculator();
initPromptGenerator();
initWhatsAppGenerator();
