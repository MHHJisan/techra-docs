import { DocumentNode } from "./node";

export interface EditorDocument {
  id: string;
  title: string;

  blocks: DocumentNode[];
}

export interface SavedDocument {
  id: string;

  title: string;

  createdAt: string;

  updatedAt: string;

  document: EditorDocument;
}

export interface PrintHistory {
  id: string;

  documentId: string;

  documentTitle: string;

  printedAt: string;
}

export interface DownloadHistory {
  id: string;

  documentId: string;

  fileName: string;

  type: "pdf" | "docx";

  downloadedAt: string;
}
