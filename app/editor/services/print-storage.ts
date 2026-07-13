import { EditorDocument } from "../types/document";

const KEY = "techra-print-document";

export function setPrintDocument(document: EditorDocument) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(document));
}

export function getPrintDocument(): EditorDocument | null {
  if (typeof window === "undefined") return null;
  const json = localStorage.getItem(KEY);

  if (!json) return null;

  return JSON.parse(json);
}

export function clearPrintDocument() {
  localStorage.removeItem(KEY);
}
