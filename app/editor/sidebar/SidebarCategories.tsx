"use client";

import { SIDEBAR_CATEGORIES } from "../constants/sidebar";

export default function SidebarCategories() {
  return (
    <div className="flex-1 overflow-y-auto py-3">
      {SIDEBAR_CATEGORIES.map((category) => {
        const Icon = category.icon;

        return (
          <button
            key={category.id}
            className="flex w-full items-center gap-3 px-5 py-3 text-left text-sm font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
          >
            <Icon size={19} />

            {category.title}
          </button>
        );
      })}
    </div>
  );
}
