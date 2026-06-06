# Instrucciones exactas de medicion

Estas acciones requieren sesion del usuario o propiedad de cuentas. No piden bancos ni contrasenas dentro del proyecto.

## Google Search Console

1. Abrir https://search.google.com/search-console
2. Agregar propiedad de prefijo de URL:
   `https://bozicovichsantiago20-oss.github.io/kit-vendedor-express/`
3. Elegir verificacion por etiqueta HTML.
4. Copiar solo el valor del meta tag de verificacion.
5. Avisar el valor para agregarlo al `<head>` del sitio.
6. Enviar sitemap:
   `https://bozicovichsantiago20-oss.github.io/kit-vendedor-express/sitemap.xml`

## Bing Webmaster Tools

1. Abrir https://www.bing.com/webmasters
2. Agregar sitio:
   `https://bozicovichsantiago20-oss.github.io/kit-vendedor-express/`
3. Elegir verificacion por meta tag.
4. Copiar solo el valor del meta tag.
5. Avisar el valor para agregarlo al `<head>`.
6. Enviar sitemap:
   `https://bozicovichsantiago20-oss.github.io/kit-vendedor-express/sitemap.xml`

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

## Microsoft Clarity

1. Abrir https://clarity.microsoft.com/
2. Crear proyecto para Kit Vendedor Express.
3. Copiar el Project ID o el script de instalacion.
4. Avisar el ID/script para agregarlo al sitio.

## Prioridad

1. Search Console y Bing Webmaster para saber si hay impresiones.
2. Analytics para medir clics de compra.
3. Clarity para ver friccion visual si empieza a haber trafico.
