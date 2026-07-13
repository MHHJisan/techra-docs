import { DocumentPage } from "./page";

export interface EditorDocument {
  id: string;

  title: string;

  pages: DocumentPage[];
}

export interface SavedDocument {
  id: string;

  title: string;

  updatedAt: string;

  createdAt: string;

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
