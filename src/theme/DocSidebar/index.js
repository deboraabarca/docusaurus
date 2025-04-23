import React, { useEffect } from "react";
import DocSidebar from "@theme-original/DocSidebar";

import {
  Boxes,
  Smartphone,
  DownloadCloud,
  Users,
  BookOpen,
  Code,
  Star,
  Package,
  Folder,
  Settings,
  Terminal,
  PenTool,
  Plug,
  Utensils,
  FileText,
  Globe,
  Award,
  MessageCircle,
  Rocket,
} from "lucide-react";
function getIconForItem(item) {
  // Para ayudar con la depuración
  const label = item.label && typeof item.label === "string" ? item.label : "";

  // Versión mejorada con comprobaciones insensibles a mayúsculas/minúsculas
  const labelLower = label.toLowerCase();

  // Verificar coincidencias en español
  if (labelLower.includes("introducción")) return <Star size={18} />;
  if (labelLower.includes("fundamentos del inspector"))
    return <Boxes size={18} />;
  if (labelLower.includes("interfaz del inspector"))
    return <FileText size={18} />;
  if (labelLower.includes("manipulación del dom")) return <Code size={18} />;
  if (labelLower.includes("trabajo con css")) return <PenTool size={18} />;
  if (labelLower.includes("herramientas para responsive"))
    return <Smartphone size={18} />;
  if (labelLower.includes("¡felicidades!")) return <Award size={18} />;
  if (labelLower.includes("técnicas avanzadas")) return <Code size={18} />;
  if (labelLower.includes("depuración de javascript"))
    return <Terminal size={18} />;
  if (labelLower.includes("análisis de rendimiento"))
    return <Rocket size={18} />;
  if (labelLower.includes("análisis de red")) return <Globe size={18} />;
  if (labelLower.includes("casos prácticos")) return <BookOpen size={18} />;
  if (labelLower.includes("consejos avanzados"))
    return <MessageCircle size={18} />;
  if (labelLower.includes("manual completado")) return <Award size={18} />;

  if (labelLower.includes("create a document")) return <Smartphone size={18} />;
  if (labelLower.includes("create a blog post")) return <PenTool size={18} />;
  if (labelLower.includes("markdown features")) return <Code size={18} />;
  if (labelLower.includes("deploy your site")) return <Globe size={18} />;
  if (labelLower.includes("congratulations")) return <Award size={18} />;
  if (labelLower.includes("tutorial - extras")) return <Package size={18} />;

  if (labelLower.includes("blog")) return <DownloadCloud size={18} />;
  if (labelLower.includes("guias")) return <BookOpen size={18} />;
  if (labelLower.includes("esenciales")) return <Star size={18} />;
  if (labelLower.includes("complementarios")) return <Package size={18} />;
  if (labelLower.includes("configuración")) return <Settings size={18} />;
  if (labelLower.includes("api")) return <Terminal size={18} />;
  if (labelLower.includes("manual de usuario")) return <BookOpen size={18} />;
  if (labelLower.includes("plugins")) return <Plug size={18} />;

  return <FileText size={18} />;
}

function modifyItems(items) {
  if (!items) return items;

  return items.map((item) => {
    const newItem = { ...item };

    // Primero procesar los hijos recursivamente
    if (newItem.items) {
      newItem.items = modifyItems(newItem.items);
    }

    // Luego procesar este ítem
    if (newItem.label) {
      try {
        // Verifica si ya es un elemento React (para evitar procesar varias veces)
        if (typeof newItem.label === "string") {
          const icon = getIconForItem(newItem);
          if (icon) {
            newItem.label = (
              <div className="sidebar-item-with-icon">
                <span className="sidebar-icon">{icon}</span>
                <span>{newItem.label}</span>
              </div>
            );
          }
        }
      } catch (error) {
        console.error("Error processing sidebar item:", error);
      }
    }

    return newItem;
  });
}

function DocSidebarWrapper(props) {
  const newProps = { ...props };

  if (newProps.sidebar) {
    // Añadir registro para depuración
    console.log(
      "Sidebar original:",
      JSON.stringify(newProps.sidebar, (key, value) => {
        if (typeof value === "function" || React.isValidElement(value)) {
          return "[ReactElement]";
        }
        return value;
      })
    );

    newProps.sidebar = modifyItems(newProps.sidebar);
  }

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .sidebar-item-with-icon {
        display: flex !important;
        align-items: center;
        gap: 10px;
      }
      .sidebar-icon {
        color: var(--ifm-color-primary);
        min-width: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return <DocSidebar {...newProps} />;
}

export default DocSidebarWrapper;
