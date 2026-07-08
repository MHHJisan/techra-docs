export type ElementType = "text" | "image" | "shape" | "table" | "signature";

export interface BaseElement {
  id: string;
  type: ElementType;

  x: number;
  y: number;

  width: number;
  height: number;

  rotation: number;
  opacity: number;

  locked: boolean;
  visible: boolean;
}

export interface TextElement extends BaseElement {
  type: "text";

  text: string;

  fontFamily: string;
  fontSize: number;
  fontWeight: number;

  color: string;

  align: "left" | "center" | "right";
}

export interface ImageElement extends BaseElement {
  type: "image";

  src: string;

  borderRadius: number;
}

export interface ShapeElement extends BaseElement {
  type: "shape";

  fill: string;

  stroke: string;

  strokeWidth: number;
}

export interface TableElement extends BaseElement {
  type: "table";

  rows: number;

  columns: number;
}

export interface SignatureElement extends BaseElement {
  type: "signature";

  src: string;
}

export type DocumentElement =
  | TextElement
  | ImageElement
  | ShapeElement
  | TableElement
  | SignatureElement;

export interface Page {
  id: string;

  width: number;
  height: number;

  background: string;

  elements: DocumentElement[];
}

export interface DocumentModel {
  id: string;

  name: string;

  pages: Page[];
}
