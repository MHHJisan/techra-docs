import { DocumentNode } from "./node";

export interface RenderPage {
  id: string;

  pageNumber: number;

  width: number;

  height: number;

  background: string;

  blocks: DocumentNode[];
}
