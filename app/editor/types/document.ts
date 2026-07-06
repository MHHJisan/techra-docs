import { DocumentPage } from "./page";

export interface EditorDocument {
  id: string;

  title: string;

  pages: DocumentPage[];
}
