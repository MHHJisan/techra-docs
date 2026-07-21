import { DocumentNode } from "../types/node";
import { DocumentPage, EditorDocument } from "../types/document";

export function normalizeEditorDocument(document: EditorDocument): EditorDocument {
  if (document.blocks) {
    return document;
  }

  if (document.pages) {
    const blocks = document.pages.flatMap((page: DocumentPage) => page.nodes);

    const { pages, ...rest } = document;

    return {
      ...rest,
      blocks,
    };
  }

  return {
    ...document,
    blocks: [],
  };
}

export function getDocumentBlocks(document: EditorDocument): DocumentNode[] {
  if (document.blocks) {
    return document.blocks;
  }

  if (document.pages) {
    return document.pages.flatMap((page: DocumentPage) => page.nodes);
  }

  return [];
}
