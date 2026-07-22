import { RenderItem } from "./render-item";

export interface RenderPage {
  id: string;

  pageNumber: number;

  width: number;

  height: number;

  background: string;

  renderItems: RenderItem[];
}
