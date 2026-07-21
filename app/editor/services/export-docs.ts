import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
} from "docx";

import { saveAs } from "file-saver";

import { EditorDocument } from "../types/document";

export async function exportDOCX(document: EditorDocument) {
  const sections = document.blocks.map((page) => ({
    properties: {},
    children: page.blocks.map((node) => {
      switch (node.type) {
        case "heading":
          return new Paragraph({
            heading: HeadingLevel.HEADING_1,

            alignment:
              node.align === "center"
                ? AlignmentType.CENTER
                : node.align === "right"
                  ? AlignmentType.RIGHT
                  : AlignmentType.LEFT,

            children: [
              new TextRun({
                text: node.text,
                bold: true,
                size: node.fontSize * 2,
              }),
            ],
          });

        case "paragraph":
          return new Paragraph({
            alignment:
              node.align === "center"
                ? AlignmentType.CENTER
                : node.align === "right"
                  ? AlignmentType.RIGHT
                  : AlignmentType.LEFT,

            spacing: {
              after: 200,
            },

            children: [
              new TextRun({
                text: node.text,
                size: node.fontSize * 2,
              }),
            ],
          });

        default:
          return new Paragraph("");
      }
    }),
  }));

  const doc = new Document({
    sections,
  });

  const blob = await Packer.toBlob(doc);

  saveAs(blob, `${document.title}.docx`);
}
