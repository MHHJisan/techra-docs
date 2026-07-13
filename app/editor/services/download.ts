import { EditorDocument } from "../types/document";

export function downloadDocument(document: EditorDocument) {
  const blob = new Blob([JSON.stringify(document, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${document.title}.json`;
  link.click();

  URL.revokeObjectURL(url);
}
