export type NodeType =
  | "heading"
  | "paragraph"
  | "table"
  | "image"
  | "signature";

export type TextAlign = "left" | "center" | "right";

interface BaseNode {
  id: string;

  type: NodeType;

  // Automatically updated by the editor
  height: number;

  // Layout
  spacingBefore: number;
  spacingAfter: number;

  // Pagination
  keepWithNext?: boolean;
  pageBreakBefore?: boolean;

  // Visibility
  visible: boolean;
  locked: boolean;
}

export interface HeadingNode extends BaseNode {
  type: "heading";

  text: string;

  fontSize: number;

  align: TextAlign;
}

export interface ParagraphNode extends BaseNode {
  type: "paragraph";

  text: string;

  fontSize: number;

  align: TextAlign;
}

export interface ImageNode extends BaseNode {
  type: "image";

  src: string;

  width: number;

  height: number;
}

export interface TableNode extends BaseNode {
  type: "table";
}

export interface SignatureNode extends BaseNode {
  type: "signature";
}

export type DocumentNode =
  | HeadingNode
  | ParagraphNode
  | ImageNode
  | TableNode
  | SignatureNode;
