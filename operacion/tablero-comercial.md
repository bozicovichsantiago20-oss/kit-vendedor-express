# Tablero comercial - Ganancias 2

Ultima actualizacion: 2026-06-07 06:03 ART.

## Estado financiero real

| Metrica | Valor | Evidencia |
|---|---:|---|
| USD generados | 0 | `operacion/registro-cobros.csv` sin cobros confirmados |
| USD por cobrar | 0 | No hay pedidos abiertos ni pagos pendientes verificables |
| Pagos confirmados | 0 | Sin acceso/evidencia PayPal o Banco Galicia |
| Pedidos | 0 | `gh issue list` devolvio lista vacia |
| Leads | 0 | No hay formularios ni pedidos reales registrados |
| Trafico GitHub principal | 6 vistas / 1 unico | `gh api repos/.../traffic/views`; no contar como venta |
| Clones GitHub principal | 2936 clones / 564 unicos | `gh api repos/.../traffic/clones`; senal tecnica, no contar como venta |

## Descargas que NO se cuentan como ingreso

| Archivo | Descargas release | Decision |
|---|---:|---|
| `kit-vendedor-express.zip` | 2 | No contar como venta sin pago |
| `auditoria-express-publicacion.zip` | 1 | No contar como venta sin pago |
| `kit-vendedor-express-pro.zip` | Retirado | Activo separado retirado de la release; no contar como venta |
| `bundle-vendedor-express.zip` | 0 | Activo actualizado en release; no contar descargas como venta sin pago |

## Canales con mejor rendimiento

No hay rendimiento comercial demostrado todavia. GitHub muestra trafico tecnico por clones, pero sin pedidos ni pagos. El ranking queda en modo hipotesis hasta tener Search Console, Bing Webmaster, Analytics, Clarity, pedidos o pagos:

1. `empezar.html`: mejor pagina de decision y entrada recomendada.
2. `bundle.html`: mejor ticket/valor, opcion recomendada.
3. `comprar.html`: menor friccion por precio USD 5.
4. `auditoria.html`: dolor fuerte de publicacion que no vende.
5. Herramientas gratis: captacion, solo si derivan a compra.

## Reglas de actualizacion

- Registrar ingresos solo con evidencia verificable de PayPal, Banco Galicia, pedido o comprobante.
- No contar descargas, visitas tecnicas ni commits como ingresos.
- Si aparece un issue/pedido, registrar canal, producto, estado y monto esperado.
- Si aparece un pago, registrar fecha, producto, canal, monto, moneda, evidencia y nota.
- Actualizar este tablero despues de cada control operativo.

## Proximo control

Revisar:

- PayPal si el usuario lo deja visible.
- Banco Galicia/CBU si el usuario muestra movimientos.
- GitHub Issues del repo.
- Descargas de release.
- Search Console/Bing/Analytics/Clarity si ya estan conectados.
- PayPal actividad si el usuario lo deja visible.
- Gmail si se usara para oportunidades.

## Ultimo trabajo realizado

- 2026-06-06 18:36 ART: no aparecieron pedidos, trabajos ni leads verificables en GitHub Issues o registro local. Se reconcentro la calculadora de descuentos en Base USD 5, Auditoria USD 7 y Bundle USD 15, retirando la salida visible y estructurada a USD 19. Publicacion verificada con estado 200 e IndexNow 202.
- 2026-06-06 19:07 ART: no aparecieron pedidos, trabajos ni leads verificables. Se limpio la dispersion en `index.html`, `comprar.html`, `auditoria.html` y `herramientas/generador-auditoria-publicacion-marketplace.html` para empujar a Base USD 5, Auditoria USD 7 y Bundle USD 15. Publicacion verificada con estado 200 en las 4 URL; IndexNow respondio 403.
- 2026-06-06 19:21 ART: no aparecieron pedidos, trabajos ni leads verificables. Se reconcentraron `ofertas.html` y `pago-y-entrega.html` en Base USD 5, Auditoria USD 7 y Bundle USD 15, retirando opciones secundarias de esas superficies.
- 2026-06-06 21:10 ART: no aparecieron pedidos, trabajos ni leads verificables. Se reconcentraron 10 guias existentes hacia Base USD 5, Auditoria USD 7 y Bundle USD 15, retirando salidas secundarias USD 19, USD 29, Pro y Apoyar de las guias.
- 2026-06-06 21:26 ART: no aparecieron pedidos, trabajos ni leads verificables. Se convirtieron paginas raiz secundarias (`auditoria-descuento-mercado-libre.html`, `auditoria-personalizada.html`, `respuestas-personalizadas.html`, `pro.html`) en derivadores hacia Base USD 5, Auditoria USD 7 y Bundle USD 15, se retiraron enlaces internos secundarios desde la portada y se verifico publicacion 200 sin precios secundarios viejos.
- 2026-06-06 21:37 ART: no aparecieron pedidos, trabajos ni leads verificables. Se reconcentro `por-que-mi-publicacion-no-vende-mercado-libre.html` hacia Auditoria USD 7 y Bundle USD 15, eliminando USD 19, pedido manual y enlaces de auditoria personalizada de esa pagina de alta intencion.
- 2026-06-06 21:51 ART: no aparecieron pedidos, trabajos ni leads verificables. Se reconcentro `herramientas/priorizador-preguntas-mercado-libre.html` hacia Base USD 5 y Bundle USD 15, eliminando USD 29, pedido manual y Apoyar de la herramienta.
- 2026-06-06 22:06 ART: no aparecieron pedidos, trabajos ni leads verificables. Se reconcentraron `herramientas/generador-respuestas-rapidas-mercado-libre.html` y `herramientas/generador-prompts-ventas-marketplace.html`, retirando USD 29, pedido manual, Pro USD 12 y Apoyar donde quedaban.
- 2026-06-06 22:26 ART: no aparecieron pedidos, trabajos ni leads verificables. Se retiraron salidas a Apoyar/Pro de `bundle.html`, paginas rapidas de respuestas/WhatsApp/reclamos y cuatro herramientas publicas, derivando a Base USD 5, Auditoria USD 7, Bundle USD 15 o pago.
- 2026-06-06 22:37 ART: no aparecieron pedidos, trabajos ni leads verificables. Se reconcentraron las tres paginas en ingles del sitemap hacia Base USD 5, Audit USD 7 y Bundle USD 15, retirando USD 29, Pro, Apoyar y soporte USD 1.
- 2026-06-06 22:54 ART: no aparecieron pedidos, trabajos ni leads verificables. Se reconvirtio `apoyar.html` de aporte USD 1 a puente de compra hacia Base USD 5, Auditoria USD 7 y Bundle USD 15.
- 2026-06-06 23:11 ART: no aparecieron pedidos, trabajos ni leads verificables. Se reconcentro la pagina de distribucion de la calculadora de descuentos Mercado Libre hacia Auditoria USD 7 y Bundle USD 15, retirando USD 19, pedido manual por Issues y accion estructurada vieja.
- 2026-06-06 23:27 ART: no aparecieron pedidos, trabajos ni leads verificables. Se reconcentro el hub raiz de distribucion hacia Base USD 5, Auditoria USD 7 y Bundle USD 15, retirando ofertas secundarias, PayPal viejos y enlaces a pedidos manuales.
- 2026-06-06 23:43 ART: no aparecieron pedidos, trabajos ni leads verificables. Se verifico publicamente el hub raiz y se reconcentro la pagina de distribucion de preguntas de compradores hacia Base USD 5 y Bundle USD 15, retirando USD 29, Apoyar y pedidos manuales.
- 2026-06-06 23:59 ART: no aparecieron pedidos, trabajos ni leads verificables. Se reconcentro la pagina inglesa de distribucion `marketplace-question-prioritizer` hacia Base USD 5 y Bundle USD 15, retirando USD 29, soporte USD 1 y servicio manual.
- 2026-06-07 00:15 ART: no aparecieron pedidos, trabajos ni leads verificables. Se reconcentro la pagina de distribucion `publicacion-no-vende-mercado-libre` hacia Auditoria USD 7 y Bundle USD 15, retirando Auditoria USD 19, PayPal 19 y auditoria personalizada.
- 2026-06-07 00:29 ART: no aparecieron pedidos, trabajos ni leads verificables. Se reconcentro la pagina de distribucion `plantillas-atencion-cliente-ecommerce` hacia Base USD 5 y Bundle USD 15, retirando Apoyar USD 1 y Pro.
- 2026-06-07 00:44 ART: no aparecieron pedidos, trabajos ni leads verificables. Se limpio el texto heredado de Pro en cinco paginas de distribucion y quedaron verificadas publicamente sin referencias viejas.
- 2026-06-07 00:58 ART: no aparecieron pedidos, trabajos ni leads verificables. Se audito el HTML publico fuera de `distribucion/github-repos` y no quedaron CTAs activos de precios secundarios, Apoyar, pedidos por Issues ni acciones estructuradas viejas; `distribucion/github-repos` sigue limpio.
- 2026-06-07 01:12 ART: no aparecieron pedidos, trabajos ni leads verificables. Se limpio el termino `Pro` de las paginas principales de decision y compra (`empezar.html`, `index.html`, `comprar.html`, `auditoria.html`, `bundle.html`) para reducir confusion y sostener solo Base USD 5, Auditoria USD 7 y Bundle USD 15.
- 2026-06-07 01:29 ART: no aparecieron pedidos, trabajos ni leads verificables. Se reconcentro README y release de GitHub en Base USD 5, Auditoria USD 7 y Bundle USD 15, retirando texto publico de ofertas viejas y el activo separado `kit-vendedor-express-pro.zip` de la release; el ZIP del Bundle fue regenerado con copia interna limpia.
- 2026-06-07 01:42 ART: no aparecieron pedidos, trabajos ni leads verificables. Se limpiaron menciones residuales de `Pro` en 12 guias y herramientas de captacion, dejando el Bundle explicado como Base, Auditoria y recursos avanzados; JSON-LD verificado.
- 2026-06-07 01:57 ART: no aparecieron pedidos, trabajos ni leads verificables. Se reconcentro `sitemap.xml` para priorizar `/empezar.html`, Base, Auditoria y Bundle, retirando paginas de ofertas descartadas y ZIPs directos del mapa de indexacion.
- 2026-06-07 02:12 ART: no aparecieron pedidos, trabajos ni leads verificables. Se marcaron cinco paginas puente antiguas como `noindex,follow`, se ajustaron canonicals hacia `/empezar.html`, `comprar.html`, `auditoria.html` o `bundle.html`, y se retiro texto residual de oferta vieja.
- 2026-06-07 02:27 ART: no aparecieron pedidos, trabajos ni leads verificables. Se reconcentraron `llms.txt`, `humans.txt` y sus equivalentes del hub raiz para que bots y buscadores vean solo Base USD 5, Auditoria USD 7 y Bundle USD 15.
- 2026-06-07 02:42 ART: no aparecieron pedidos, trabajos ni leads verificables. Se limpiaron textos reutilizables de lanzamiento y distribucion, se corrigieron enlaces rotos de bundle/base y se sincronizaron las copias de repos raiz/perfil hacia Base USD 5, Auditoria USD 7 y Bundle USD 15; sitio raiz publico verificado 200 sin referencias viejas tras deploy.
- 2026-06-07 03:00 ART: no aparecieron pedidos, trabajos ni leads verificables. Se actualizaron 10 gists publicos existentes y se verificaron 12 gists en total sin referencias a precios/paginas viejas; todos mantienen salida hacia Base USD 5, Auditoria USD 7 o Bundle USD 15.
- 2026-06-07 03:15 ART: no aparecieron pedidos, trabajos ni leads verificables. Se actualizaron 8 repos/micrositios tematicos publicos existentes y se verificaron 24 archivos remotos mas 8 micrositios publicados: todos quedaron sin referencias viejas y con salida a Base USD 5, Auditoria USD 7 o Bundle USD 15.
- 2026-06-07 03:30 ART: no aparecieron pedidos, trabajos ni leads verificables. Se envio IndexNow para 24 URLs propias de los 8 micrositios tematicos actualizados (`/`, `llms.txt` y `sitemap.xml` por micrositio) y la API respondio HTTP 200.
- 2026-06-07 03:45 ART: no aparecieron pedidos, trabajos ni leads verificables. Se actualizaron descripciones, homepages y temas de GitHub de 11 repos comerciales publicos para reforzar las ofertas Base USD 5, Auditoria USD 7 y Bundle USD 15 sin referencias viejas.
- 2026-06-07 04:00 ART: no aparecieron pedidos, trabajos ni leads verificables. Se normalizo el registro interno de canales de distribucion para retirar senales operativas de ofertas y precios retirados, Apoyar y pedidos por Issues; el mapa queda alineado a Base USD 5, Auditoria USD 7 y Bundle USD 15.
- 2026-06-07 04:16 ART: no aparecieron pedidos, trabajos ni leads verificables. Se preparo la guia operativa de medicion y conectores para completar Search Console, Bing Webmaster, Analytics, Clarity, PayPal actividad, Gmail y GitHub sin compartir contrasenas ni datos sensibles.
- 2026-06-07 04:31 ART: no aparecieron pedidos, trabajos ni leads verificables. Se instrumentaron eventos comerciales en `app.js` y `herramientas.js` para medir clics a PayPal, descargas principales, copiado de CBU/PayPal y uso de herramientas cuando se conecten Analytics o Clarity.
- 2026-06-07 04:46 ART: no aparecieron pedidos, trabajos ni leads verificables. GitHub marco 6 vistas / 1 unico en el repo principal, sin evidencia de pago. Se valido con Edge real en modo headless que funcionan los eventos `click_paypal_base`, `click_download_bundle` y `click_paypal_bundle`.
- 2026-06-07 05:02 ART: no aparecieron pedidos, trabajos ni leads verificables. GitHub mantiene 6 vistas / 1 unico y muestra 2936 clones / 564 unicos; se registra como senal tecnica de distribucion, no ingreso. No hubo descargas nuevas ni notificaciones accionables del repo.
- 2026-06-07 05:18 ART: no aparecieron pedidos, trabajos ni leads verificables. Como los clones de GitHub son la senal tecnica mas fuerte, se agrego al inicio de `README.md` una seccion para cloners/lectores de GitHub con CTA directo a Base USD 5, Auditoria USD 7 y Bundle USD 15.
- 2026-06-07 05:33 ART: no aparecieron pedidos, trabajos ni leads verificables. Se agrego `.github/FUNDING.yml` con links PayPal directos a Base USD 5, Auditoria USD 7 y Bundle USD 15 para aprovechar el trafico/clones de GitHub desde el boton de funding del repo.
- 2026-06-07 05:48 ART: no aparecieron pedidos, trabajos ni leads verificables. Se retiraron plantillas viejas de Issues con precios/ofertas descartadas y se agrego un selector limpio con compra directa a Base USD 5, Auditoria USD 7, Bundle USD 15 y una consulta publica segura sin datos privados.
- 2026-06-07 06:03 ART: no aparecieron pedidos, trabajos ni leads verificables. Se actualizo la release `v1.0.0` para que quien descargue un ZIP vea primero que opcion pagar: Base USD 5, Auditoria USD 7 o Bundle USD 15; se verifico sin referencias a ofertas retiradas.
