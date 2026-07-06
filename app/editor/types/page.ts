import { TextBlock } from "./block";

export interface DocumentPage {
  id: string;

  blocks: TextBlock[];
}
