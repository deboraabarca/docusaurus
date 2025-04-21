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
} from "lucide-react";

function getIconForItem(item) {
  if (item.label && typeof item.label === "string") {
    if (item.label.includes("Tutorial - Basics")) return <Boxes size={18} />;
    if (item.label.includes("Create a Document"))
      return <Smartphone size={18} />;
    if (item.label.includes("Blog")) return <DownloadCloud size={18} />;
    if (item.label.includes("Reseller")) return <Users size={18} />;
    if (item.label.includes("Guias adicionales")) return <BookOpen size={18} />;
    if (item.label.includes("Devs")) return <Code size={18} />;
    if (item.label.includes("Esenciales")) return <Star size={18} />;
    if (item.label.includes("Complementarios")) return <Package size={18} />;
    if (item.label.includes("Rubro")) return <Folder size={18} />;
    if (item.label.includes("Específicos")) return <PenTool size={18} />;
    if (item.label.includes("Configuración")) return <Settings size={18} />;
    if (item.label.includes("API")) return <Terminal size={18} />;
    if (item.label.includes("Custom")) return <PenTool size={18} />;
    if (item.label.includes("Devops")) return <Terminal size={18} />;
    if (item.label.includes("Manual de Usuario")) return <BookOpen size={18} />;
    if (item.label.includes("Plugins")) return <Plug size={18} />;
    if (item.label.includes("Mozo.pe")) return <Utensils size={18} />;
  }
  return null;
}

function modifyItems(items) {
  if (!items) return items;

  return items.map((item) => {
    const newItem = { ...item };

    if (newItem.items) {
      newItem.items = modifyItems(newItem.items);
    }

    if (newItem.label && typeof newItem.label === "string") {
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

    return newItem;
  });
}

function DocSidebarWrapper(props) {
  const newProps = { ...props };
  if (newProps.sidebar) {
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
