import { RenderPage } from "../types/RenderPage";

export const PAGE_WIDTH = 794;
export const PAGE_HEIGHT = 1123;

export const PAGE_PADDING_TOP = 60;
export const PAGE_PADDING_BOTTOM = 30;
export const PAGE_PADDING_LEFT = 60;
export const PAGE_PADDING_RIGHT = 60;

export const FOOTER_HEIGHT = 30;

export function createRenderPage(id: string, pageNumber: number): RenderPage {
  return {
    id,
    pageNumber,

    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,

    background: "#ffffff",

    renderItems: [],
  };
}
