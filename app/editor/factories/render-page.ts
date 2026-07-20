import { RenderPage } from "../types/RenderPage";

export const PAGE_WIDTH = 794;
export const PAGE_HEIGHT = 1123;

export const PAGE_PADDING_TOP = 60;
export const PAGE_PADDING_BOTTOM = 60;
export const PAGE_PADDING_LEFT = 60;
export const PAGE_PADDING_RIGHT = 60;

export function createRenderPage(id: string): RenderPage {
  return {
    id,

    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    background: "#ffffff",

    blocks: [],
  };
}
