import { DocumentPage } from "../types/page";

export const PAGE_WIDTH = 794;
export const PAGE_HEIGHT = 1123;
export const PAGE_BACKGROUND = "#ffffff";

export function createPage(id: string): DocumentPage {
  return {
    id,
    width: PAGE_WIDTH,
    height: PAGE_HEIGHT,
    background: PAGE_BACKGROUND,
    nodes: [],
  };
}
