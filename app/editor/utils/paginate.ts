import { EditorDocument } from "../types/document";
import { DocumentPage } from "../types/page";
import { createPage, PAGE_HEIGHT } from "../factories/page";

const PAGE_PADDING = 70;

export function paginate(document: EditorDocument): EditorDocument {
  const newPages: DocumentPage[] = [];

  let pageNumber = 1;

  let currentPage = createPage(`page-${pageNumber}`);

  let currentHeight = PAGE_PADDING;

  const allNodes = document.pages.flatMap((page) => page.nodes);

  for (const node of allNodes) {
    const nodeHeight = node.height ?? 40;

    if (currentHeight + nodeHeight > PAGE_HEIGHT - PAGE_PADDING) {
      newPages.push(currentPage);

      pageNumber++;

      currentPage = createPage(`page-${pageNumber}`);

      currentHeight = PAGE_PADDING;
    }

    currentPage.nodes.push(node);

    currentHeight += nodeHeight;
  }

  newPages.push(currentPage);

  return {
    ...document,
    pages: newPages,
  };
}
