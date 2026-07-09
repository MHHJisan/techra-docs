import { DocumentNode } from "./document-node";

export interface DocumentPage {
  id: string;
  nodes: DocumentNode[];
}

export interface EditorDocument {
  id: string;
  title: string;
  pages: DocumentPage[];
}
