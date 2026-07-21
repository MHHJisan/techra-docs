import { EditorDocument } from "../types/document";
import { RenderPage } from "../types/RenderPage";
// import { getDocumentBlocks } from "./normalize-document";

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

  const CONTENT_HEIGHT =
    PAGE_HEIGHT - PAGE_PADDING_TOP - PAGE_PADDING_BOTTOM - FOOTER_HEIGHT;
  //temporary from chatgpt
  for (let i = 0; i < (document.blocks?.length ?? 0); i++) {
    const block = document.blocks![i];

    if (block.pageBreakBefore && currentPage.blocks.length > 0) {
      console.log("====== FORCED NEW PAGE ======");

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

    console.log({
      block: block.id,
      blockHeight,
      currentHeight,
      availableHeight,
      totalAfterInsert: currentHeight + blockHeight,
      contentLimit: CONTENT_HEIGHT,
    });

    if (blockHeight > availableHeight && currentPage.blocks.length > 0) {
      console.log("========== NEW PAGE ==========");

      pages.push(currentPage);

      pageNumber++;

      currentPage = createRenderPage(`page-${pageNumber}`, pageNumber);

      currentHeight = PAGE_PADDING_TOP;
    }

    currentPage.blocks.push(block);

    currentHeight += blockHeight;
  }

  pages.push(currentPage);

  console.log("TOTAL PAGES:", pages.length);

  return pages;
}
