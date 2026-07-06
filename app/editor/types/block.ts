export type BlockType = "text" | "image" | "table" | "signature" | "line";

export interface BaseBlock {
  id: string;

  type: BlockType;

  x: number;
  y: number;

  width: number;
  height: number;

  rotation: number;

  locked: boolean;

  visible: boolean;
}
export interface TextBlock extends BaseBlock {
  type: "text";

  text: string;

  fontFamily: string;

  fontSize: number;

  color: string;

  bold: boolean;

  italic: boolean;

  underline: boolean;

  align: "left" | "center" | "right";
}

export type Block = TextBlock;
