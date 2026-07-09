"use client";

import { useState } from "react";

import { ChevronDown, ChevronRight } from "lucide-react";

import { SIDEBAR_CATEGORIES } from "../constants/sidebar";

import { TEMPLATE_REGISTRY } from "../templates/registry";

import { useEditorStore } from "../store/editor-store";

import { FileText } from "lucide-react";

import { useTranslation } from "../hooks/useTranslation";

export default function SidebarCategories() {
  const [expanded, setExpanded] = useState<string[]>(["rental"]);

  const editorDocument = useEditorStore((state) => state.document);

  const setDocument = useEditorStore((state) => state.setDocument);

  const toggle = (id: string) => {
    setExpanded((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const { t } = useTranslation("sidebar");

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
                  {t[category.title]}{" "}
                </span>
              </div>

              {isExpanded ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {isExpanded && (
              <div className="ml-7 mt-3 space-y-2 space-x-2 border-l border-slate-200 pl-2 pr-2">
                {category.children.map((child) => {
                  const template = TEMPLATE_REGISTRY[child.template];
                  const isActive = template?.id === editorDocument?.id;

                  return (
                    <button
                      key={child.id}
                      onClick={() => setDocument(template)}
                      className={`group flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-200 ${
                        isActive
                          ? "border-blue-500 bg-blue-50 shadow-sm"
                          : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50 hover:shadow-sm"
                      }`}
                    >
                      <div
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${
                          isActive
                            ? "bg-blue-600 text-white"
                            : "bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600"
                        }`}
                      >
                        <FileText size={18} strokeWidth={2} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p
                          className={`truncate text-sm font-semibold ${
                            isActive ? "text-blue-700" : "text-slate-800"
                          }`}
                        >
                          {t[child.title]}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
