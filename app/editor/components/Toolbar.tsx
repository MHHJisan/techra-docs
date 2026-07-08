"use client";

import {
  House,
  LayoutTemplate,
  Star,
  FolderOpen,
  Settings,
  LucideIcon,
} from "lucide-react";

import { useTranslation } from "../hooks/useTranslation";
import { useEditorStore, EditorView } from "../store/editor-store";

export default function Toolbar() {
  const { t } = useTranslation("toolbar");

  const currentView = useEditorStore((state) => state.currentView);

  const setCurrentView = useEditorStore((state) => state.setCurrentView);

  const menuItems: {
    key: EditorView;
    icon: LucideIcon;
    label: string;
  }[] = [
    {
      key: "home",
      icon: House,
      label: t.home,
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

          const isActive = currentView === item.key;

          return (
            <button
              key={item.key}
              onClick={() => setCurrentView(item.key)}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                isActive
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
