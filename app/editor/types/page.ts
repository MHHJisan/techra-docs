import { DocumentNode } from "./node";
export interface DocumentPage {
  id: string;

  width: number;

  height: number;

  background: string;

  nodes: DocumentNode[];
}
