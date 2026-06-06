# Tablero comercial - Ganancias 2

Ultima actualizacion: 2026-06-06 18:36 ART.

## Estado financiero real

| Metrica | Valor | Evidencia |
|---|---:|---|
| USD generados | 0 | `operacion/registro-cobros.csv` sin cobros confirmados |
| USD por cobrar | 0 | No hay pedidos abiertos ni pagos pendientes verificables |
| Pagos confirmados | 0 | Sin acceso/evidencia PayPal o Banco Galicia |
| Pedidos | 0 | `gh issue list` devolvio lista vacia |
| Leads | 0 | No hay formularios ni pedidos reales registrados |
| Trafico GitHub principal | 0 vistas / 0 unicos | `gh api repos/.../traffic/views` |

## Descargas que NO se cuentan como ingreso

| Archivo | Descargas release | Decision |
|---|---:|---|
| `kit-vendedor-express.zip` | 2 | No contar como venta sin pago |
| `auditoria-express-publicacion.zip` | 1 | No contar como venta sin pago |
| `kit-vendedor-express-pro.zip` | 1 | No contar como venta sin pago |
| `bundle-vendedor-express.zip` | 1 | No contar como venta sin pago |

## Canales con mejor rendimiento

No hay rendimiento comercial demostrado todavia. El ranking queda en modo hipotesis hasta tener Search Console, Bing Webmaster, Analytics, Clarity, pedidos o pagos:

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

## Ultimo trabajo realizado

- 2026-06-06 18:36 ART: no aparecieron pedidos, trabajos ni leads verificables en GitHub Issues o registro local. Se reconcentro la calculadora de descuentos en Base USD 5, Auditoria USD 7 y Bundle USD 15, retirando la salida visible y estructurada a USD 19.
