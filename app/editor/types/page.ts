import { Block } from "./block";

export interface DocumentPage {
  id: string;
  width: number;
  height: number;
  background: string;

  blocks: Block[];
}
