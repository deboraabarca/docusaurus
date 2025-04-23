---
sidebar_position: 2
---

# Análisis de Rendimiento

Optimizar el rendimiento de una página web es clave para mejorar la experiencia del usuario. DevTools ofrece diversas herramientas que te permiten medir, analizar y solucionar problemas de rendimiento.

---

## Auditorías Lighthouse

**Lighthouse** es una herramienta automatizada que analiza la calidad de tu sitio web.

### ¿Qué analiza?

- **Rendimiento** (tiempo de carga, interacción, etc.)
- **Accesibilidad**
- **Buenas prácticas**
- **SEO**
- **PWA (Progressive Web App)**

<img src="/img/lithouse.png" alt="Panel Styles" className="custom-img" />

### Cómo usarla:

1. Abre DevTools y ve a la pestaña **Lighthouse**.
2. Selecciona las auditorías deseadas.
3. Haz clic en **Analyze page load**.

Te mostrará un informe detallado con puntuaciones y sugerencias de mejora.

---

## Performance timeline

La pestaña **Performance** te permite grabar y analizar cómo se carga y ejecuta tu sitio.

### Qué puedes ver:

- Eventos como **repaint**, **reflow**, **layout**, y **scripting**.
- Cuellos de botella en el proceso de renderizado.
- Uso de recursos y llamadas a funciones.


### Cómo usarla:

1. Abre la pestaña **Performance**.
2. Haz clic en el botón de grabación (círculo rojo).
3. Interactúa con tu sitio.
4. Detén la grabación para analizar los resultados.

Esta herramienta es ideal para detectar retrasos, animaciones lentas o tareas que bloquean el hilo principal.

<img src="/img/loading.png" alt="Panel Styles" className="custom-img" />
---

## Memory profiling

La pestaña **Memory** ayuda a detectar fugas de memoria y optimizar el uso de recursos.

### Funciones clave:

- **Heap snapshot**: toma una foto del uso de memoria actual.
- **Allocation instrumentation**: graba asignaciones de memoria con el tiempo.
- **Garbage collection**: analiza lo que se elimina y lo que permanece en la memoria.

Te permite inspeccionar objetos, ver qué se mantiene en memoria y encontrar referencias no liberadas.

<img src="/img/snapshot.png" alt="Panel Styles" className="custom-img" />
---

## Rendering performance

La pestaña **Rendering** (accesible desde el panel lateral de DevTools) permite activar superposiciones para visualizar problemas de renderizado.

### Opciones útiles:

- **Paint flashing**: muestra en color cuando un elemento se vuelve a pintar.
- **Layer borders**: revela cómo el navegador organiza capas para renderizar.
- **FPS meter**: muestra la tasa de frames por segundo.
- **Scrolling performance issues**: marca áreas que afectan el rendimiento del scroll.

Estas herramientas ayudan a identificar qué partes de tu UI están causando cuellos de botella gráficos.

<img src="/img/paint-flashing.gif" alt="Panel Styles" className="custom-img" />

---

> ⚡ Consejo: Usa estas herramientas regularmente para detectar problemas antes de que afecten la experiencia del usuario final.
