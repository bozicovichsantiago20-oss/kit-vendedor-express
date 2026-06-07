const CBU = "0070034430004032923161";
const PAYPAL_ME = "https://paypal.me/SBozicovich";

const scenarios = {
  envio: {
    claro:
      "Hola. Sí, hacemos envíos para {product}. {detail}. Al comprar, la plataforma te muestra el plazo exacto según tu zona. Quedo atento por cualquier otra consulta.",
    cercano:
      "¡Hola! Sí, te podemos enviar {product}. {detail}. Si avanzás con la compra, vas a ver el tiempo estimado antes de pagar. Gracias por consultar.",
    firme:
      "Hola. Para {product}, el envío se gestiona según la opción disponible en la publicación. {detail}. El plazo final lo informa la plataforma antes del pago."
  },
  stock: {
    claro:
      "Hola. Tenemos stock disponible de {product}. {detail}. Podés comprar directamente desde la publicación.",
    cercano:
      "¡Hola! Sí, tenemos {product} disponible. {detail}. Si querés, podés avanzar con la compra ahora.",
    firme:
      "Hola. Stock disponible al momento de esta respuesta para {product}. {detail}. La reserva se confirma con la compra."
  },
  medidas: {
    claro:
      "Hola. Para {product}, revisá la medida/modelo antes de comprar. {detail}. Si me pasás el dato exacto que necesitás, te confirmo compatibilidad.",
    cercano:
      "¡Hola! Te ayudo con eso. En {product}, lo ideal es confirmar medida o modelo. {detail}. Pasame ese dato y lo verificamos.",
    firme:
      "Hola. Para evitar cambios, necesitamos confirmar medida/modelo antes de la compra de {product}. {detail}. Sin ese dato no conviene avanzar."
  },
  garantia: {
    claro:
      "Hola. {product} cuenta con garantía según lo indicado en la publicación. {detail}. Conservá el comprobante de compra para cualquier gestión.",
    cercano:
      "¡Hola! Sí, la compra de {product} queda respaldada. {detail}. Si surge algo, nos escribís por el chat de la compra.",
    firme:
      "Hola. La garantía de {product} aplica bajo las condiciones informadas en la publicación. {detail}. No cubre mal uso ni daños externos."
  },
  factura: {
    claro:
      "Hola. Podemos emitir factura para la compra de {product}. {detail}. Cargá correctamente los datos fiscales al momento de comprar.",
    cercano:
      "¡Hola! Sí, podemos facturar {product}. {detail}. Revisá que tus datos estén bien cargados antes de finalizar.",
    firme:
      "Hola. La factura de {product} se emite con los datos cargados en la compra. {detail}. No podemos cambiar datos fiscales ya facturados."
  },
  precio: {
    claro:
      "Hola. El precio vigente de {product} es el publicado. {detail}. Si hay promoción activa, aparece aplicada antes de pagar.",
    cercano:
      "¡Hola! Por ahora el precio de {product} es el que ves publicado. {detail}. Si comprás más de una unidad, contame cantidad y lo revisamos.",
    firme:
      "Hola. El precio publicado de {product} es el válido al momento de la compra. {detail}. No reservamos precio sin compra confirmada."
  },
  retiro: {
    claro:
      "Hola. Para {product}, podés elegir las opciones de entrega disponibles en la publicación. {detail}. Si aparece retiro, el sistema te muestra la dirección luego de comprar.",
    cercano:
      "¡Hola! Sí, revisá las opciones de entrega para {product}. {detail}. Si te figura retiro, coordinamos desde el chat de la compra.",
    firme:
      "Hola. La entrega de {product} se realiza solo por las opciones habilitadas en la publicación. {detail}. La coordinación se hace luego de la compra."
  },
  devolucion: {
    claro:
      "Hola. Si necesitás cambiar o devolver {product}, escribinos desde el chat de la compra. {detail}. Te vamos a indicar el paso siguiente según el caso.",
    cercano:
      "¡Hola! Lo vemos. Para cambio o devolución de {product}, mandanos el detalle desde la compra. {detail}. Te ayudamos a resolverlo.",
    firme:
      "Hola. Los cambios o devoluciones de {product} se gestionan por el canal de la compra y según las condiciones aplicables. {detail}."
  },
  reclamo: {
    claro:
      "Hola. Lamentamos el inconveniente con {product}. {detail}. Escribinos por el chat de la compra con foto o detalle del problema para revisarlo.",
    cercano:
      "¡Hola! Gracias por avisar. Queremos revisar lo ocurrido con {product}. {detail}. Enviá el detalle por el chat de la compra y seguimos por ahí.",
    firme:
      "Hola. Para analizar el reclamo de {product}, necesitamos evidencia y número de compra. {detail}. La gestión se realiza por el canal oficial de la operación."
  },
  mayorista: {
    claro:
      "Hola. Para compra mayorista de {product}, indicame cantidad y zona de entrega. {detail}. Con esos datos revisamos disponibilidad y precio.",
    cercano:
      "¡Hola! Sí, podemos ver cantidad mayorista de {product}. {detail}. Pasame unidades aproximadas y te respondemos con una propuesta.",
    firme:
      "Hola. Las condiciones mayoristas para {product} dependen de cantidad, stock y entrega. {detail}. Enviá esos datos para cotizar."
  }
};

const form = document.querySelector("#reply-form");
const output = document.querySelector("#reply-output");
const copyReply = document.querySelector("#copy-reply");
const copyCbu = document.querySelector("#copy-cbu");
const copyPaypal = document.querySelector("#copy-paypal");
const toast = document.querySelector("#toast");

function clean(value, fallback) {
  const trimmed = String(value || "").trim();
  return trimmed.length ? trimmed : fallback;
}

function buildReply() {
  const product = clean(document.querySelector("#product").value, "el producto");
  const channel = clean(document.querySelector("#channel").value, "tu canal");
  const scenario = clean(document.querySelector("#scenario").value, "envio");
  const tone = clean(document.querySelector("#tone").value, "claro");
  const detail = clean(document.querySelector("#detail").value, "te confirmamos el detalle antes de avanzar");

  const template = scenarios[scenario]?.[tone] || scenarios.envio.claro;
  const prefix =
    channel === "WhatsApp"
      ? "Mensaje sugerido para WhatsApp:\n\n"
      : channel === "Instagram"
        ? "Mensaje sugerido para Instagram DM:\n\n"
        : channel === "Tienda propia"
          ? "Mensaje sugerido para tienda propia:\n\n"
          : "Respuesta sugerida para Mercado Libre:\n\n";

  output.value = prefix + template.replaceAll("{product}", product).replaceAll("{detail}", detail);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1900);
}

async function copyText(text, successMessage) {
  try {
    await navigator.clipboard.writeText(text);
    showToast(successMessage);
  } catch {
    showToast("No se pudo copiar. Seleccioná el texto manualmente.");
  }
}

if (form && output) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    buildReply();
  });

  buildReply();
}

if (copyReply && output) {
  copyReply.addEventListener("click", () => {
    copyText(output.value, "Respuesta copiada. Si te ahorro tiempo, el Kit Base esta en USD 5.");
  });
}

if (copyCbu) {
  copyCbu.addEventListener("click", () => {
    copyText(CBU, "CBU copiado.");
  });
}

if (copyPaypal) {
  copyPaypal.addEventListener("click", () => {
    copyText(copyPaypal.dataset.paypalLink || PAYPAL_ME, "Link de PayPal copiado.");
  });
}

(function initCommercialTracking() {
  function classifyCommercialAction(target) {
    const href = target.href || target.dataset?.paypalLink || "";

    if (href.includes("paypal.me/SBozicovich/5USD")) return "click_paypal_base";
    if (href.includes("paypal.me/SBozicovich/7USD")) return "click_paypal_auditoria";
    if (href.includes("paypal.me/SBozicovich/15USD")) return "click_paypal_bundle";
    if (href.includes("pack/kit-vendedor-express.zip")) return "click_download_base";
    if (href.includes("pack-auditoria/auditoria-express-publicacion.zip")) return "click_download_auditoria";
    if (href.includes("pack-bundle/bundle-vendedor-express.zip")) return "click_download_bundle";
    if (target.id === "copy-cbu") return "copy_cbu";
    if (target.id === "copy-paypal") return "copy_paypal";

    return "";
  }

  function trackCommercialAction(eventName, target) {
    if (!eventName) return;

    const payload = {
      event_name: eventName,
      page_path: window.location.pathname,
      link_text: (target.textContent || "").trim().slice(0, 80),
      link_url: target.href || target.dataset?.paypalLink || ""
    };

    window.kveCommercialEvents = window.kveCommercialEvents || [];
    window.kveCommercialEvents.push(payload);

    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, payload);
    }

    if (typeof window.clarity === "function") {
      window.clarity("event", eventName);
    }
  }

  document.addEventListener("click", (event) => {
    const source = event.target instanceof Element ? event.target : event.target.parentElement;
    const target = source?.closest("a[href], button");
    if (!target) return;
    trackCommercialAction(classifyCommercialAction(target), target);
  });
})();
