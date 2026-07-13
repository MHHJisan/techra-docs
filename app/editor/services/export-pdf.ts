import { EditorDocument } from "../types/document";
import { setPrintDocument } from "./print-storage";

export function exportPDF(document: EditorDocument) {
  setPrintDocument(document);

  window.open("/editor/print", "_blank");
}
