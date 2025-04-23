---
sidebar_position: 3
---

# Trabajo con CSS

El panel de **Estilos (Styles)** en DevTools permite inspeccionar, modificar y probar reglas CSS en tiempo real. Es una herramienta poderosa para depurar diseño, probar nuevos estilos o entender cómo se aplican los estilos en una página web.

---

## Visualizar estilos aplicados

Cuando seleccionas un elemento en el panel **Elements**, verás a la derecha el panel **Styles**, que muestra:

- Las reglas CSS que se aplican al elemento.
- La fuente del estilo (archivo, línea).
- Estilos tachados (sobrescritos).
- Estilos heredados desde elementos padre.

---

## Modificar estilos en tiempo real

Puedes cambiar valores directamente desde el panel **Styles**:

- Haz clic en un valor (como `color`, `margin`, etc.) y edítalo.
- Usa flechas ↑/↓ para ajustar valores numéricos rápidamente.
- Los cambios se reflejan en la página inmediatamente.

También puedes:

- Activar/desactivar reglas con las casillas de verificación.
- Cambiar nombres de propiedades y ver sugerencias automáticas.

---

## Añadir nuevas reglas CSS

Para agregar nuevos estilos:

1. En el panel **Styles**, haz clic en el botón `+` para crear una nueva regla CSS.
2. Escribe el selector o edita el existente.
3. Añade las propiedades y valores deseados.

También puedes hacer clic derecho sobre un elemento en el DOM y elegir **"Add style rule"**.

---

## Box Model y Layout

El panel **Computed** (o "Calculado") incluye una visualización del **Modelo de Caja (Box Model)**:

- Muestra visualmente el `margin`, `border`, `padding` y `content`.
- Al pasar el cursor sobre cada parte, se resalta en la página.
- También muestra propiedades clave como `width`, `height`, `display`, `position`, etc.

Este modelo te ayuda a entender el espacio que ocupa cada elemento.

---

## Entender la cascada y especificidad

DevTools te permite ver cómo se resuelven los estilos según:

- **Cascada**: qué reglas se aplican y cuáles son sobrescritas.
- **Especificidad**: reglas más específicas tienen prioridad.
- **Orden de aparición**: si dos reglas tienen igual especificidad, gana la que aparece después.

En el panel **Styles**, verás las reglas en orden de prioridad y tachadas si han sido sobrescritas. Esto te ayuda a entender por qué un estilo se aplica (o no).

---

> 🎨 Consejo: Puedes experimentar con propiedades como `display`, `flex`, `grid` o `position` y ver de inmediato cómo afecta al diseño del sitio.

