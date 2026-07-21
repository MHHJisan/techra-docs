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

  for (let i = 0; i < document.blocks.length; i++) {
    const block = document.blocks[i];

    // Force a new page before this block
    if (block.pageBreakBefore && currentPage.blocks.length > 0) {
      pages.push(currentPage);

      pageNumber++;

      currentPage = createRenderPage(`page-${pageNumber}`, pageNumber);

      currentHeight = PAGE_PADDING_TOP;
    }

    const blockHeight =
      Math.max(block.height ?? 40, 40) +
      block.spacingBefore +
      block.spacingAfter;

    const availableHeight = CONTENT_HEIGHT - currentHeight;

    // Doesn't fit on current page
    if (blockHeight > availableHeight && currentPage.blocks.length > 0) {
      pages.push(currentPage);

      pageNumber++;

      currentPage = createRenderPage(`page-${pageNumber}`, pageNumber);

      currentHeight = PAGE_PADDING_TOP;
    }

    currentPage.blocks.push(block);

    currentHeight += blockHeight;

    console.log({
      id: block.id,
      // type: block.type,
      // text: "text" in block ? block.text.slice(0, 30) : "",

      height: block.height,
      // before: block.spacingBefore,
      // after: block.spacingAfter,

      // totalHeight: blockHeight,

      // currentHeight,
      // availableHeight,

      // page: pageNumber,
      // block.text?.length,
    });
  }
  pages.push(currentPage);

  return pages;
}
