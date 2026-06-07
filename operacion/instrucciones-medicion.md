# Instrucciones exactas de medicion y conectores

Estas acciones requieren sesion del usuario o propiedad de cuentas. No piden bancos ni contrasenas dentro del proyecto.

Objetivo comercial: saber que canal trae impresiones, clics de compra, descargas, pedidos y pagos. Sin esto, el proyecto solo puede medir GitHub Issues, descargas de release y registros locales.

## Lista rapida para abrir a las 05:00

1. Google Search Console: https://search.google.com/search-console
2. Bing Webmaster Tools: https://www.bing.com/webmasters
3. Google Analytics: https://analytics.google.com/
4. Microsoft Clarity: https://clarity.microsoft.com/
5. PayPal actividad: https://www.paypal.com/activity
6. Gmail, si se usara para oportunidades: https://mail.google.com/
7. GitHub Issues del proyecto: https://github.com/bozicovichsantiago20-oss/kit-vendedor-express/issues

No pasar bancos, claves ni codigos de seguridad. Solo pasar los valores publicos indicados abajo.

## Estado 2026-06-07 05:02 ART

- GitHub conectado: Issues, release, vistas y clones verificables desde CLI.
- Edge real validado: los eventos comerciales preparados funcionan en navegador.
- Pendiente de accion humana: Search Console, Bing Webmaster, Analytics, Clarity, PayPal actividad y Gmail si se quiere detectar pedidos por correo.
- Senal actual: 6 vistas / 1 unico y 2936 clones / 564 unicos en GitHub. No se cuenta como ingreso sin pago o pedido.

## Google Search Console

1. Abrir https://search.google.com/search-console
2. Agregar propiedad de prefijo de URL:
   `https://bozicovichsantiago20-oss.github.io/kit-vendedor-express/`
3. Elegir verificacion por etiqueta HTML.
4. Copiar solo el valor del meta tag de verificacion.
5. Avisar el valor para agregarlo al `<head>` del sitio.
6. Enviar sitemap:
   `https://bozicovichsantiago20-oss.github.io/kit-vendedor-express/sitemap.xml`
7. Cuando la propiedad quede verificada, revisar "Rendimiento" y pasar capturas o datos de consultas con impresiones/clics.

## Bing Webmaster Tools

1. Abrir https://www.bing.com/webmasters
2. Agregar sitio:
   `https://bozicovichsantiago20-oss.github.io/kit-vendedor-express/`
3. Elegir verificacion por meta tag.
4. Copiar solo el valor del meta tag.
5. Avisar el valor para agregarlo al `<head>`.
6. Enviar sitemap:
   `https://bozicovichsantiago20-oss.github.io/kit-vendedor-express/sitemap.xml`
7. Si permite importar desde Search Console, aceptar solo si ya esta verificada la propiedad.

## Google Analytics

1. Abrir https://analytics.google.com/
2. Crear propiedad web para Kit Vendedor Express.
3. Crear stream web con URL:
   `https://bozicovichsantiago20-oss.github.io/kit-vendedor-express/`
4. Copiar el Measurement ID con formato `G-XXXXXXXXXX`.
5. Avisar el ID para agregar el script de medicion.

Eventos recomendados:

- click_paypal_base
- click_paypal_auditoria
- click_paypal_bundle
- click_download_base
- click_download_auditoria
- click_download_bundle

Estado del sitio:

- Estos eventos ya estan preparados en `app.js` y `herramientas.js`.
- Cuando se agregue Google Analytics, los clics de PayPal y descargas principales se enviaran como eventos.
- Cuando se agregue Clarity, los mismos clics se marcaran como eventos de sesion.
- Sin Analytics/Clarity, el navegador deja una cola local de prueba en `window.kveCommercialEvents`.
- Validacion local 2026-06-07 04:46 ART: Edge real en modo headless confirmo `click_paypal_base`, `click_download_bundle` y `click_paypal_bundle`.
- Validacion local 2026-06-07 13:28 ART: `app.js` conserva atribucion inicial de origen con `src`, `utm_source`, `utm_campaign`, `utm_medium`, `first_referrer` y `first_referrer_domain`; prueba simulada confirmo `click_paypal_bundle` con origen `github-readme`.
- Validacion remota 2026-06-07 13:44 ART: nueve README publicos de GitHub quedaron apuntando a `/empezar.html?src=github-readme&utm_campaign=...`; no quedaron URLs partidas ni parametros duplicados.
- Validacion remota 2026-06-07 13:58 ART: los homepages de los tres repos principales de GitHub apuntan a `/empezar.html?src=github-about&utm_campaign=...`.
- Validacion remota 2026-06-07 14:14 ART: cinco Gists publicos existentes apuntan a `/empezar.html?src=github-gist&utm_campaign=...`; todos conservaron PayPal directo.

Campos utiles para revisar en eventos:

- `source`: primer origen detectado, por ejemplo `github-readme`, `github.com` o `direct`.
- `campaign`: campana si la URL trae `utm_campaign`.
- `medium`: medio si la URL trae `utm_medium`.
- `first_referrer_domain`: dominio que trajo la visita inicial.
- `page_path` y `page_search`: pagina y parametros donde ocurrio el clic.

Datos que sirven para agregarlo al sitio:

- Measurement ID, ejemplo `G-XXXXXXXXXX`.
- No hace falta pasar usuario, contrasena ni acceso de la cuenta.

## Microsoft Clarity

1. Abrir https://clarity.microsoft.com/
2. Crear proyecto para Kit Vendedor Express.
3. Copiar el Project ID o el script de instalacion.
4. Avisar el ID/script para agregarlo al sitio.

Dato que sirve:

- Project ID o snippet de instalacion. Si se pasa el snippet completo, revisar que no incluya datos personales.

## PayPal actividad

1. Abrir https://www.paypal.com/activity
2. Revisar movimientos recientes.
3. Si aparece pago relacionado al kit, pasar fecha, monto, moneda y concepto visible.
4. No pasar claves, documentos, tarjetas ni datos privados del comprador.

## Gmail y oportunidades

Si el usuario quiere detectar pedidos por correo:

1. Abrir Gmail o conectar el conector Gmail de Codex.
2. Buscar asuntos o textos: `Kit Vendedor Express`, `PayPal`, `auditoria`, `bundle`, `Mercado Libre`, `pedido`.
3. Si aparece un pedido real, registrar producto, monto esperado, estado y proximo paso.

## GitHub

Mantener conectados:

- Issues del repo principal para pedidos/leads.
- Notificaciones de comentarios si alguien pregunta por una herramienta, gist o repo.
- Releases para descargas, sin contar descargas como ingreso.

## Prioridad

1. Search Console y Bing Webmaster para saber si hay impresiones.
2. Analytics para medir clics de compra.
3. Clarity para ver friccion visual si empieza a haber trafico.
4. PayPal actividad para confirmar pagos reales.
5. Gmail/GitHub para detectar trabajos, leads o pedidos.
