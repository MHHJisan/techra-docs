import { LayoutBlock } from "../types/layout";
import { RenderItem } from "../types/render-item";
import { RenderPage } from "../types/RenderPage";

import {
  createRenderPage,
  PAGE_HEIGHT,
  PAGE_PADDING_TOP,
  PAGE_PADDING_BOTTOM,
  FOOTER_HEIGHT,
} from "../factories/render-page";

export function paginate(layout: LayoutBlock[]): RenderPage[] {
  const pages: RenderPage[] = [];

  let pageNumber = 1;

  let page = createRenderPage(`page-${pageNumber}`, pageNumber);

  // Content height with extremely conservative buffer (40% of available space)
  const CONTENT_HEIGHT =
    (PAGE_HEIGHT - PAGE_PADDING_TOP - PAGE_PADDING_BOTTOM - FOOTER_HEIGHT) *
    0.4;

  let usedHeight = 0;

  for (const block of layout) {
    let start = 0;

    while (start < block.lines.length) {
      let end = start;

      let consumed = 0;

      // Add spacingBefore for the first line of a block on a page
      const spacingBefore = start === 0 ? block.node.spacingBefore : 0;

      // Check if block can fit with spacingBefore
      if (usedHeight + spacingBefore > CONTENT_HEIGHT && usedHeight > 0) {
        // Move entire block to next page
        pages.push(page);
        pageNumber++;
        page = createRenderPage(`page-${pageNumber}`, pageNumber);
        usedHeight = 0;
        continue;
      }

      while (
        end < block.lines.length &&
        usedHeight + spacingBefore + consumed + block.lines[end].height <=
          CONTENT_HEIGHT
      ) {
        consumed += block.lines[end].height;

        end++;
      }

      if (start === end) {
        // Block doesn't fit, move to next page
        pages.push(page);

        pageNumber++;

        page = createRenderPage(`page-${pageNumber}`, pageNumber);

        usedHeight = 0;

        continue;
      }

      // Add spacingAfter for the last line of a block on a page
      const spacingAfter =
        end === block.lines.length ? block.node.spacingAfter : 0;

      // Check if adding spacingAfter would cause overflow
      const totalHeight = spacingBefore + consumed + spacingAfter;
      if (totalHeight > CONTENT_HEIGHT) {
        // Move the last line to next page to avoid overflow
        end--;
        consumed -= block.lines[end].height;
      }

      page.renderItems.push({
        block,

        lineStart: start,

        lineEnd: end,
      });

      usedHeight +=
        spacingBefore +
        consumed +
        (end === block.lines.length ? block.node.spacingAfter : 0);

      start = end;

      if (start < block.lines.length) {
        pages.push(page);

        pageNumber++;

        page = createRenderPage(`page-${pageNumber}`, pageNumber);

        usedHeight = 0;
      }
    }
  }

  pages.push(page);

  return pages;
}
