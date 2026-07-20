import { DocumentNode } from "./node";

export interface RenderPage {
  id: string;

  width: number;

  height: number;

  background: string;

  blocks: DocumentNode[];
}
