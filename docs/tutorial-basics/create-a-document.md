---
sidebar_position: 2
---

# Manipulación del DOM

DevTools permite inspeccionar y modificar la estructura HTML (DOM) de una página directamente desde el navegador. Esto resulta útil para depurar, probar cambios rápidos o comprender mejor cómo está construida una página web.

---

## Navegar por la estructura HTML

En el panel **Elements**, puedes ver la jerarquía completa del DOM.

- Usa las flechas para expandir o contraer nodos HTML.
- Al pasar el cursor por un elemento, se resaltará su área en la página.
- Los elementos con subnodos se pueden abrir para ver su contenido interno.

---

## Seleccionar elementos

Puedes seleccionar cualquier elemento de la página de dos formas:

- Haz clic derecho sobre un elemento y elige **"Inspeccionar"**.
- Usa el selector de elementos (el ícono de cursor en la parte superior izquierda de DevTools) y luego haz clic en el elemento deseado.

Esto resaltará el elemento en el panel y mostrará sus estilos y propiedades asociadas.

---

## Editar HTML en tiempo real

Puedes modificar directamente cualquier parte del HTML desde DevTools:

- Haz doble clic en una etiqueta, atributo o contenido de texto para editarlo.
- Haz clic derecho sobre un elemento y selecciona **"Edit as HTML"** para editar un bloque completo.
- Los cambios se reflejan de inmediato en la vista previa del sitio (aunque no se guardan en el archivo original).

---

## Añadir / eliminar elementos

### Añadir
- Haz clic derecho sobre cualquier nodo y selecciona **"Add attribute"** o **"Edit as HTML"** para insertar contenido.
- También puedes usar **"Insert adjacent HTML"** para agregar elementos antes o después del nodo actual.

### Eliminar
- Haz clic derecho sobre el elemento y selecciona **"Delete element"**.
- También puedes presionar la tecla `Delete` con el nodo seleccionado.

---

## Buscar elementos específicos

Para encontrar un elemento en el DOM:

- Usa el atajo `Ctrl + F` (o `Cmd + F` en macOS) dentro del panel **Elements**.
- Puedes buscar por nombre de etiqueta, texto, clases, atributos, etc.

Ejemplos:
- `header` para encontrar etiquetas `<header>`.
- `.btn-primary` para encontrar elementos con esa clase.
- `[data-id="123"]` para buscar por atributos específicos.

---

> 🔍 Consejo: El panel **Elements** también muestra eventos vinculados a los nodos, facilitando la depuración de interactividad en la página.
