import { LayoutBlock } from "./layout";

export interface RenderItem {
  block: LayoutBlock;

  lineStart: number;

  lineEnd: number;
}
