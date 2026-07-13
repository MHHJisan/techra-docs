import { SavedDocument } from "../types/document";

const STORAGE_KEY = "techra-documents";

export function getDocuments(): SavedDocument[] {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return [];

  return JSON.parse(data);
}

export function saveDocuments(documents: SavedDocument[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(documents));
}
