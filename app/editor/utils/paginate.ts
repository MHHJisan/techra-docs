import { EditorDocument } from "../types/document";

const PAGE_HEIGHT = 1123;
const PAGE_PADDING = 70;

export function paginate(document: EditorDocument): EditorDocument {
  const newPages = [];

  let currentPage = {
    ...document.pages[0],
    nodes: [],
  };

  let currentHeight = PAGE_PADDING;

  let pageNumber = 1;

  for (const node of document.pages.flatMap((page) => page.nodes)) {
    const nodeHeight = node.height ?? 40;

    if (currentHeight + nodeHeight > PAGE_HEIGHT - PAGE_PADDING) {
      newPages.push(currentPage);

      pageNumber++;

      currentPage = {
        id: `page-${pageNumber}`,

        width: 794,

        height: 1123,

        background: "#ffffff",

        nodes: [],
      };

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
