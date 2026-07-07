"use client";

import {
  House,
  LayoutTemplate,
  Star,
  FolderOpen,
  Settings,
} from "lucide-react";

import { useTranslation } from "../hooks/useTranslation";

export default function Toolbar() {
  const { t } = useTranslation("toolbar");
  const menuItems = [
    {
      key: "home",
      icon: House,
      label: t.home,
      active: true,
    },
    {
      key: "templates",
      icon: LayoutTemplate,
      label: t.templates,
    },
    {
      key: "favorites",
      icon: Star,
      label: t.favorites,
    },
    {
      key: "documents",
      icon: FolderOpen,
      label: t.documents,
    },
    {
      key: "settings",
      icon: Settings,
      label: t.settings,
    },
  ];

  return (
    <nav className="sticky top-0 z-40 flex h-14 items-center justify-center border-b border-gray-200 bg-white px-8">
      <div className="flex items-center gap-2 rounded-full bg-gray-100 p-1 shadow-sm">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.key}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                item.active
                  ? "bg-white text-blue-600 shadow"
                  : "text-gray-600 hover:bg-white hover:text-blue-600"
              }`}
            >
              <Icon size={18} strokeWidth={2} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
