"use client";

import { useState } from "react";

import { ChevronDown, ChevronRight } from "lucide-react";

import { SIDEBAR_CATEGORIES } from "../constants/sidebar";

import { TEMPLATE_REGISTRY } from "../templates/registry";

import { useEditorStore } from "../store/editor-store";

export default function SidebarCategories() {
  const [expanded, setExpanded] = useState<string[]>(["rental"]);

  const setDocument = useEditorStore((state) => state.setDocument);

  const toggle = (id: string) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <div className="flex-1 overflow-y-auto py-2">
      {SIDEBAR_CATEGORIES.map((category) => {
        const Icon = category.icon;

        const isExpanded = expanded.includes(category.id);

        return (
          <div key={category.id}>
            <button
              onClick={() => toggle(category.id)}
              className="flex w-full items-center justify-between px-4 py-3 transition hover:bg-gray-100"
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className="text-blue-600" />

                <span className="text-sm font-medium text-gray-800">
                  {category.title}
                </span>
              </div>

              {isExpanded ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {isExpanded && (
              <div className="ml-9 mb-2 border-l border-gray-200">
                {category.children.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => {
                      console.log("Clicked:", child.title);

                      const template = TEMPLATE_REGISTRY[child.template];

                      console.log("Template:", template);

                      setDocument(template);
                    }}
                    className="..."
                  >
                    {child.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
