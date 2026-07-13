import { EditorDocument } from "../types/document";

export function downloadDocument(editorDocument: EditorDocument) {
  const data = JSON.stringify(editorDocument, null, 2);

  const blob = new Blob([data], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const link = window.document.createElement("a");

  link.href = url;
  link.download = `${editorDocument.title}.json`;

  link.click();

  URL.revokeObjectURL(url);
}
