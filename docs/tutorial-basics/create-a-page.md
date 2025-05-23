---
sidebar_position: 1
---

# Interfaz del Inspector

El Inspector de Elementos, también conocido como "DevTools", proporciona una serie de paneles que permiten inspeccionar, modificar y depurar el contenido de una página web en tiempo real. A continuación, se presenta una visión general de los paneles más importantes.

---

## Visión general de los paneles

DevTools está organizado en varios paneles que se enfocan en diferentes aspectos del desarrollo web. Puedes acceder a ellos presionando `F12` o haciendo clic derecho sobre un elemento y seleccionando **"Inspeccionar"**.

Los paneles principales son:

- **Elements (Elementos)**: Muestra la estructura HTML y permite modificarla en vivo.
- **Styles (Estilos)**: Muestra las reglas CSS aplicadas al elemento seleccionado.
- **Computed (Calculado)**: Muestra los valores finales de todos los estilos después de aplicar herencia y cascada.
- **Console (Consola)**: Permite ejecutar comandos JavaScript y ver mensajes, errores o advertencias del navegador.

<img src="/img/inspector-general.png" alt="Panel Styles" className="custom-img" />

---

## Panel DOM / Elementos

Este panel te permite inspeccionar el DOM de la página en tiempo real. Puedes:

- Expandir y contraer nodos HTML.
- Hacer clic derecho para editar, eliminar o copiar elementos.
- Observar los cambios reflejados de inmediato en la página.
- Arrastrar y soltar nodos para reorganizar el contenido.

<img src="/img/elementos.png" alt="Panel Styles" className="custom-img" />


---

## Panel de Estilos

Este panel muestra las reglas CSS aplicadas al elemento seleccionado. Puedes:

- Ver qué archivos CSS afectan al elemento.
- Modificar valores directamente.
- Activar/desactivar reglas con checkboxes.
- Agregar nuevas reglas en tiempo real.
- Ver si un estilo ha sido sobrescrito o heredado.

---

## Panel Computed (Estilos Calculados)

Muestra el resultado final de todos los estilos CSS que se aplican al elemento seleccionado, incluyendo:

- Margen, relleno, borde y dimensiones.
- Propiedades como `color`, `font-size`, `display`, etc.
- La fuente exacta del valor (regla CSS que lo define).

Ideal para diagnosticar problemas visuales o inconsistencias de estilos.

<img src="/img/computed.png" alt="Panel Styles" className="custom-img" />
---

## Consola básica

La **Consola** es una herramienta esencial para desarrolladores. Puedes:

- Escribir y ejecutar código JavaScript directamente.
- Ver errores, advertencias y logs generados por la página.
- Usar comandos rápidos como `$0` para referirte al elemento seleccionado.
- Probar funciones sin modificar tu código fuente.

Ejemplo:
```js
console.log("Hola desde la consola");

