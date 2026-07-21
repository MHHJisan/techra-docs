import { EditorDocument } from "../types/document";
import { RenderPage } from "../types/RenderPage";

import {
  createRenderPage,
  PAGE_HEIGHT,
  PAGE_PADDING_TOP,
  PAGE_PADDING_BOTTOM,
  FOOTER_HEIGHT,
} from "../factories/render-page";

export function paginate(document: EditorDocument): RenderPage[] {
  const pages: RenderPage[] = [];

  let pageNumber = 1;

  let currentPage = createRenderPage(`page-${pageNumber}`, pageNumber);

  let currentHeight = PAGE_PADDING_TOP;

  const CONTENT_HEIGHT = PAGE_HEIGHT - PAGE_PADDING_BOTTOM - FOOTER_HEIGHT;

  for (const block of document.blocks) {
    const blockHeight =
      Math.max(block.height ?? 40, 40) +
      block.spacingBefore +
      block.spacingAfter;

    if (currentHeight + blockHeight > CONTENT_HEIGHT) {
      pages.push(currentPage);

      pageNumber++;

      currentPage = createRenderPage(`page-${pageNumber}`, pageNumber);

      currentHeight = PAGE_PADDING_TOP;
    }

    currentPage.blocks.push(block);

    currentHeight += blockHeight;
  }

  pages.push(currentPage);

  return pages;
}
