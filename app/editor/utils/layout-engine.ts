import { EditorDocument } from "../types/document";
import { LayoutBlock } from "../types/layout";
import { wrapText } from "./text-layout";

const CONTENT_WIDTH = 794 - 60 - 60;

function measureTextWidth(text: string, fontSize: number): number {
  if (typeof window === "undefined") {
    return text.length * fontSize * 0.5;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) {
    return text.length * fontSize * 0.5;
  }

  context.font = `${fontSize}px sans-serif`;
  return context.measureText(text).width;
}

export function layoutDocument(document: EditorDocument): LayoutBlock[] {
  return document.blocks.map((node) => {
    if (node.type === "heading" || node.type === "paragraph") {
      const wrappedLines = wrapText(node.text, CONTENT_WIDTH, node.fontSize);
      const lines = wrappedLines.map((text) => ({
        text,
        height: node.fontSize * 1.8, // Match actual rendered line height
      }));

      // Use actual measured height if available, otherwise use calculated height
      const actualHeight = node.height;
      const calculatedHeight = lines.reduce(
        (sum, line) => sum + line.height,
        0,
      );
      const contentHeight = actualHeight > 0 ? actualHeight : calculatedHeight;

      return {
        node,
        lines,

        contentHeight,

        totalHeight: contentHeight + node.spacingBefore + node.spacingAfter,
      };
    }

    return {
      node,

      lines: [],

      contentHeight: node.height,

      totalHeight: node.height + node.spacingBefore + node.spacingAfter,
    };
  });
}
