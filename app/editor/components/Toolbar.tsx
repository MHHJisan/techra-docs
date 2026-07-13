import {
  House,
  LayoutTemplate,
  Star,
  FolderOpen,
  Save,
  Printer,
  Download,
  Undo2,
  Redo2,
  LucideIcon,
} from "lucide-react";

import { useTranslation } from "../hooks/useTranslation";
import { useEditorStore, EditorView } from "../store/editor-store";
import { saveDocument } from "../services/save-document";

export default function Toolbar() {
  const { t } = useTranslation("toolbar");

  const currentView = useEditorStore((state) => state.currentView);

  const setCurrentView = useEditorStore((state) => state.setCurrentView);

  const document = useEditorStore((state) => state.document);

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
  ];

  return (
    <nav className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-gray-200 bg-white px-8">
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
              <Icon size={18} />

              <span>{item.label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2">
        <button className="rounded-lg p-2 hover:bg-gray-100">
          <Undo2 size={18} />
        </button>

        <button className="rounded-lg p-2 hover:bg-gray-100">
          <Redo2 size={18} />
        </button>

        <div className="mx-2 h-6 w-px bg-gray-300" />

        <button
          onClick={() => {
            if (document) {
              saveDocument(document);
            }
          }}
          className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          <Save size={18} />
          Save
        </button>

        <button className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100">
          <Printer size={18} />
          Print
        </button>

        <button className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100">
          <Download size={18} />
          Download
        </button>
      </div>
    </nav>
  );
}
