import { DocumentNode } from "../types/node";
import { measureParagraph } from "../utils/measure-paragraph";

export function heading(
  id: string,
  text: string,
  align: "left" | "center" | "right" = "center",
): DocumentNode {
  return {
    id,
    type: "heading",

    text,

    fontSize: 28,

    align,

    // height: 60,
  };
}

export function paragraph(
  id: string,
  text: string,
  align: "left" | "center" | "right" = "left",
): DocumentNode {
  return {
    id,
    type: "paragraph",

    text,

    fontSize: 16,

    align,
    height: measureParagraph(text),
  };
}
