"use client";

import {
  House,
  LayoutTemplate,
  Star,
  FolderOpen,
  Save,
  Printer,
  Undo2,
  Redo2,
  LucideIcon,
  RefreshCw,
} from "lucide-react";

import { useTranslation } from "../editor/hooks/useTranslation";
import { toast } from "react-hot-toast";
import { useEditorStore, EditorView } from "../editor/store/editor-store";
import { saveDocument } from "../editor/services/save-document";
import { printDocument } from "../editor/services/print-document";
import DownloadMenu from "./DownloadMenu";
import { usePathname, useRouter } from "next/navigation";

export default function Toolbar() {
  const { t } = useTranslation("toolbar");

  const router = useRouter();

  const pathname = usePathname();

  const setCurrentView = useEditorStore((state) => state.setCurrentView);

  const document = useEditorStore((state) => state.document);

  const menuItems: {
    key: EditorView;
    icon: LucideIcon;
    label: string;
    href: string;
  }[] = [
    {
      key: "home",
      icon: House,
      label: t.home,
      href: "/editor",
    },
    {
      key: "templates",
      icon: LayoutTemplate,
      label: t.templates,
      href: "/templates",
    },
    {
      key: "favorites",
      icon: Star,
      label: t.favorites,
      href: "/favourites",
    },
    {
      key: "myDocuments",
      icon: FolderOpen,
      label: t.documents,
      href: "/myDocuments",
    },
    {
      key: "tools",
      icon: RefreshCw,
      label: t.tools,
      href: "/tools",
    },
  ];

  return (
    <nav className="sticky top-0 z-40 flex h-14 items-center justify-between border-b border-gray-200 bg-white px-8">
      <div className="flex items-center gap-2 rounded-full bg-gray-100 p-1 shadow-sm">
        {menuItems.map((item) => {
          const Icon = item.icon;

          // const isActive = pathname === item.href;
          const isActive = pathname.startsWith(item.href);
          return (
            <button
              key={item.key}
              onClick={() => {
                switch (item.key) {
                  case "home":
                    setCurrentView("home");
                    router.push("/editor");
                    break;

                  case "templates":
                    setCurrentView("templates");
                    router.push("/templates");
                    break;

                  case "favorites":
                    setCurrentView("favorites");
                    router.push("/favourites");
                    break;

                  case "myDocuments":
                    setCurrentView("myDocuments");
                    router.push("/myDocuments");
                    break;

                  case "tools":
                    router.push("/tools");
                    break;
                }
              }}
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
        <button disabled className="rounded-lg p-2 hover:bg-gray-100">
          <Undo2 size={18} />
        </button>

        <button disabled className="rounded-lg p-2 hover:bg-gray-100">
          <Redo2 size={18} />
        </button>

        <div className="mx-2 h-6 w-px bg-gray-300" />

        <button
          onClick={() => {
            if (document) {
              saveDocument(document);
              toast.success("Document saved successfully!");
            }
          }}
          className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          <Save size={18} />
          Save
        </button>

        <button
          onClick={() => {
            if (document) {
              printDocument(document);
            }
          }}
          className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100"
        >
          <Printer size={18} />
          Print
        </button>

        {/* <button
          onClick={() => {
            if (document) {
              downloadDocument(document);
            }
          }}
          className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100"
        >
          <Download size={18} />
          Download
        </button> */}
        <DownloadMenu />
      </div>
    </nav>
  );
}
