import { HeadingNode, ParagraphNode } from "../types/node";
import { measureParagraph } from "../utils/measure-paragraph";

export function heading(id: string, text: string): HeadingNode {
  return {
    id,

    type: "heading",

    text,

    fontSize: 28,

    align: "center",

    height: 60,

    spacingBefore: 0,
    spacingAfter: 20,

    keepWithNext: true,

    pageBreakBefore: false,

    visible: true,

    locked: false,
  };
}

export function paragraph(
  id: string,
  text: string,
  align: "left" | "center" | "right" = "left",
): ParagraphNode {
  return {
    id,
    type: "paragraph",

    text,

    fontSize: 16,

    align,

    height: measureParagraph(text),
    spacingBefore: 0,
    spacingAfter: 20,

    keepWithNext: false,
    pageBreakBefore: false,

    visible: true,
    locked: false,
  };
}
