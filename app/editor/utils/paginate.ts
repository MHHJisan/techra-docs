import { EditorDocument } from "../types/document";
import { DocumentPage } from "../types/page";
import { createPage, PAGE_HEIGHT } from "../factories/page";

const PAGE_PADDING = 70;
const PAGE_CONTENT_HEIGHT = PAGE_HEIGHT - PAGE_PADDING * 2;

export function paginate(document: EditorDocument): EditorDocument {
  const pages: DocumentPage[] = [];

  let pageNumber = 1;
  let currentPage = createPage(`page-${pageNumber}`);
  let usedHeight = 0;

  const nodes = document.pages.flatMap((page) => page.nodes);

  for (const node of nodes) {
    const nodeHeight = Math.max(node.height ?? 40, 40);

    // Move the whole node to the next page
    if (
      currentPage.nodes.length > 0 &&
      usedHeight + nodeHeight > PAGE_CONTENT_HEIGHT
    ) {
      pages.push(currentPage);

      pageNumber++;

      currentPage = createPage(`page-${pageNumber}`);
      usedHeight = 0;
    }

    currentPage.nodes.push(node);
    usedHeight += nodeHeight;
  }

  pages.push(currentPage);

  return {
    ...document,
    pages,
  };
}
