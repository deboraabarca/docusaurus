---
sidebar_position: 3
---

# Análisis de Red

La pestaña **Network** de DevTools permite analizar todas las solicitudes y respuestas de red que se producen cuando se carga y utiliza una página web. Es esencial para entender el comportamiento de carga, solucionar errores de red y optimizar el rendimiento.

---

## Ver solicitudes HTTP

Cada vez que se carga una página, se realizan múltiples solicitudes HTTP (HTML, CSS, JS, imágenes, fuentes, etc.).

### Funcionalidades:

- Ver lista detallada de todas las solicitudes.
- Filtrar por tipo: Document, Script, XHR, Img, Font, etc.
- Inspeccionar encabezados (`Headers`), cuerpo de la respuesta (`Response`) y cookies.
- Ver estado de cada solicitud (200, 404, 500, etc.).

Puedes hacer clic en cada solicitud para ver sus detalles técnicos.

<img src="/img/xhr.png" alt="Panel Styles" className="custom-img" />
---

## Analizar tiempos de carga

DevTools muestra una **línea de tiempo** con el tiempo que toma cada recurso en cargarse.

### Datos clave:

- **Start Time**: cuándo comenzó la solicitud.
- **Duration**: cuánto tiempo tardó.
- **Waterfall**: visualización gráfica de los tiempos.
- **Size**: tamaño del archivo transferido.

Esto te ayuda a identificar cuellos de botella y recursos que retrasan la carga.

<video className="custom-img" controls>
  <source src="/img/waterfall.mp4" type="video/mp4" />
  Tu navegador no soporta el elemento de video.
</video>

---

## Depurar problemas de red

La pestaña Network es muy útil para identificar:

- **Errores de carga** (recursos no encontrados o bloqueados).
- **Solicitudes fallidas** (por CORS, redirecciones incorrectas, etc.).
- **Peticiones lentas** (APIs o archivos grandes).
- **Carga duplicada de archivos**.

También puedes inspeccionar peticiones AJAX o llamadas a APIs REST en tiempo real.

---

## Simular conexiones lentas

DevTools permite emular condiciones de red para probar cómo se comporta tu sitio en conexiones más lentas.

### Cómo hacerlo:

1. Ve a la pestaña **Network**.
2. Abre el menú **Throttling** (parte superior).
3. Selecciona un perfil: `Fast 3G`, `Slow 3G`, `Offline`, o crea uno personalizado.

Esto te permite ver qué tan rápido o lento se carga tu página en diferentes condiciones reales de conexión.

<img src="/img/ofline.png" alt="Panel Styles" className="custom-img" />
---

> 🔍 Consejo: marca la opción **Preserve log** si quieres mantener el historial de solicitudes al navegar entre páginas.
