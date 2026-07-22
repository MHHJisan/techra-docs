import { DocumentNode } from "./node";

export interface LayoutLine {
  text: string;

  height: number;
}

export interface LayoutBlock {
  node: DocumentNode;

  lines: LayoutLine[];

  contentHeight: number;

  totalHeight: number;
}
