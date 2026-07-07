"use client";

import {
  House,
  LayoutTemplate,
  Star,
  FolderOpen,
  Settings,
} from "lucide-react";

export default function Toolbar() {
  const menuItems = [
    {
      icon: House,
      label: "Home",
      active: true,
    },
    {
      icon: LayoutTemplate,
      label: "Templates",
    },
    {
      icon: Star,
      label: "Favorites",
    },
    {
      icon: FolderOpen,
      label: "My Documents",
    },
    {
      icon: Settings,
      label: "Settings",
    },
  ];

  return (
    <nav className="flex h-14 items-center justify-center border-b border-gray-200 bg-white px-8">
      <div className="flex items-center gap-2 rounded-full bg-gray-100 p-1 shadow-sm">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.label}
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
