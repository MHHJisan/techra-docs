export type NodeType =
  | "heading"
  | "paragraph"
  | "table"
  | "image"
  | "signature";

interface BaseNode {
  id: string;

  type: NodeType;

  height?: number;
}

export interface HeadingNode extends BaseNode {
  type: "heading";

  text: string;

  fontSize: number;

  align: "left" | "center" | "right";
}

export interface ParagraphNode extends BaseNode {
  type: "paragraph";

  text: string;

  fontSize: number;

  align: "left" | "center" | "right";
}

export type DocumentNode = HeadingNode | ParagraphNode;
