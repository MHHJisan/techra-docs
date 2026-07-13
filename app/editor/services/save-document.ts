import { EditorDocument, SavedDocument } from "../types/document";
import { getDocuments, saveDocuments } from "./storage";

export function saveDocument(document: EditorDocument) {
  const documents = getDocuments();

  const existing = documents.find((d) => d.id === document.id);

  if (existing) {
    existing.document = document;
    existing.title = document.title;
    existing.updatedAt = new Date().toISOString();
  } else {
    const newDocument: SavedDocument = {
      id: document.id,
      title: document.title,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      document,
    };

    documents.unshift(newDocument);
  }

  saveDocuments(documents);
}
