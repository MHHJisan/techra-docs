"use client";

import { useState, useRef, useEffect } from "react";
import { Download, FileText, FileType, ChevronDown } from "lucide-react";

import { useEditorStore } from "../store/editor-store";

import { exportPDF } from "../services/export-pdf";
import { exportDOCX } from "../services/export-docs";

export default function DownloadMenu() {
  const editorDocument = useEditorStore((s) => s.document);

  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm hover:bg-gray-100"
      >
        <Download size={16} />
        Download
        <ChevronDown size={16} />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl border bg-white shadow-xl">
          <button
            onClick={() => {
              if (editorDocument) exportPDF(editorDocument);

              setOpen(false);
            }}
            className="
flex
w-full
items-center
gap-3
px-4
py-3
text-sm
transition
hover:bg-blue-50
hover:text-blue-600
"
          >
            <FileText size={18} />
            PDF
          </button>

          <button
            onClick={() => {
              if (editorDocument) exportDOCX(editorDocument);

              setOpen(false);
            }}
            className="
flex
w-full
items-center
gap-3
px-4
py-3
text-sm
transition
hover:bg-blue-50
hover:text-blue-600
"
          >
            <FileType size={18} />
            DOCX
          </button>
        </div>
      )}
    </div>
  );
}
