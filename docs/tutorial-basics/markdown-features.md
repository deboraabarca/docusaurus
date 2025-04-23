---
sidebar_position: 4
---

# Herramientas para Responsive Design

Chrome DevTools incluye herramientas integradas para simular dispositivos móviles y probar cómo responde tu sitio a diferentes tamaños de pantalla. Estas herramientas son fundamentales para garantizar una experiencia de usuario óptima en distintos dispositivos.

---

## Modo dispositivo

Para activar el modo de vista adaptable:

1. Abre DevTools (`F12` o clic derecho → "Inspeccionar").
2. Haz clic en el ícono de **dispositivo** (📱) en la parte superior izquierda del panel.

Este modo te permite:

- Ajustar el tamaño de la ventana para ver cómo responde el diseño.
- Cambiar entre vistas horizontales y verticales.
- Simular diferentes densidades de píxeles.

<img src="/img/responsive.png" alt="Panel Styles" className="custom-img" />

---

## Emulación de dispositivos móviles

DevTools incluye perfiles predefinidos de dispositivos móviles, como:

- iPhone (diferentes modelos)
- Pixel
- iPad
- Galaxy, entre otros

Puedes seleccionarlos desde el menú desplegable en la parte superior de la vista adaptable. Esto permite:

- Simular tamaños de pantalla reales.
- Probar la orientación (retrato/paisaje).
- Emular la tasa de zoom y pixel ratio.

<img src="/img/pixeles.png" alt="Panel Styles" className="custom-img" />

---

## Testear diferentes resoluciones

Además de los dispositivos predefinidos, puedes:

- Ingresar **resoluciones personalizadas** (ej. 1366x768, 1920x1080).
- Usar reglas para medir el diseño en píxeles.
- Simular una conexión de red lenta (3G, offline).
- Ver cómo se comporta tu sitio con limitaciones de CPU o ancho de banda.

Estas pruebas son esenciales para detectar errores de diseño, asegurar la legibilidad y mejorar la accesibilidad en múltiples contextos.

## <img src="/img/network.png" alt="Panel Styles" className="custom-img" />

> 📱 Consejo: También puedes activar la opción "Show media queries" en la parte superior para ver puntos de ruptura activos durante la simulación.
