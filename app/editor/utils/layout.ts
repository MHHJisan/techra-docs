import { EditorDocument } from "../types/document";
import { DocumentBlock } from "../types/block";
import { RenderPage } from "../types/page";
import {
  createPage,
  PAGE_HEIGHT,
  PAGE_PADDING_TOP,
  PAGE_PADDING_BOTTOM,
} from "../factories/page";

export function buildPages(document: EditorDocument): RenderPage[] {
  const pages: RenderPage[] = [];

  let pageNumber = 1;

  let currentPage = createPage(`page-${pageNumber}`);

  let currentHeight = PAGE_PADDING_TOP;

  const blocks: DocumentBlock[] = document.blocks ?? [];

  for (const block of blocks) {
    const blockHeight = Math.max(block.height ?? 40, 40);
    if (currentHeight + blockHeight > PAGE_HEIGHT - PAGE_PADDING_BOTTOM) {
      pages.push(currentPage);

      pageNumber++;

      currentPage = createPage(`page-${pageNumber}`);

      currentHeight = PAGE_PADDING_TOP;
    }

    currentPage.blocks.push(block);

    currentHeight += blockHeight;
  }

  pages.push(currentPage);

  return pages;
}
