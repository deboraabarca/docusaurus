---
sidebar_position: 1
---

# Depuración de JavaScript

Chrome DevTools ofrece potentes herramientas para depurar código JavaScript, lo cual es esencial para detectar errores, entender el flujo del programa y mejorar el rendimiento de tu aplicación.

---

## Consola para ejecutar código

La pestaña **Console** permite:

- Escribir y ejecutar código JavaScript en tiempo real.
- Ver mensajes de `console.log()`, advertencias y errores.
- Interactuar directamente con objetos del DOM seleccionados.
- Acceder a variables desde el contexto actual (`$0` representa el último elemento seleccionado en el DOM).

Es ideal para probar funciones rápidamente o inspeccionar valores sin modificar el código fuente.

---

## Breakpoints (puntos de interrupción)

Los **breakpoints** te permiten pausar la ejecución del código en una línea específica para inspeccionarlo paso a paso.

Cómo añadir un breakpoint:

1. Abre la pestaña **Sources**.
2. Navega al archivo JavaScript.
3. Haz clic en el número de línea donde quieres pausar.

Tipos de breakpoints disponibles:

- **De línea**: pausa en una línea específica.
- **Condicionales**: pausa solo si se cumple una condición (`x > 5`).
- **DOM breakpoints**: pausa cuando cambia un nodo del DOM.
- **Event listener breakpoints**: pausa cuando se dispara un evento específico.

---

## Ver variables y scope

Cuando se detiene la ejecución con un breakpoint:

- Puedes ver las **variables locales**, los **valores actuales** y el **scope** en el panel lateral.
- También puedes expandir objetos para inspeccionar sus propiedades.
- El panel **Call Stack** te muestra la secuencia de llamadas que llevó al punto actual del código.

Esto te ayuda a comprender el estado del programa en cada paso.

---

## Monitorizar eventos

Desde la pestaña **Event Listeners** (en el panel derecho de **Elements** o en **Sources**) puedes:

- Ver qué eventos están registrados en un elemento (`click`, `input`, `submit`, etc.).
- Inspeccionar las funciones asociadas.
- Agregar breakpoints en listeners de eventos fácilmente.

También puedes pausar la ejecución cuando ocurren ciertos eventos desde el panel **Event Listener Breakpoints** en **Sources**.

---

## Depurar errores

Cuando se produce un error JavaScript:

- DevTools muestra el mensaje de error en la **Consola**, incluyendo el archivo y la línea.
- Puedes hacer clic en el enlace para ir directamente al código en **Sources**.
- También puedes usar el botón "Pause on exceptions" para detener el código automáticamente al lanzarse un error (incluso si está dentro de un `try...catch`).

---

> 🛠️ Tip: Usa `debugger;` en tu código para establecer un breakpoint manual. Cuando el navegador lo encuentra, detiene la ejecución automáticamente.
