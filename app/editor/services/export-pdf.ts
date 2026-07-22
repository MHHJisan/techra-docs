"use client";

import { EditorDocument } from "../types/document";
import { paginate } from "../utils/paginate";

export async function exportPDF(editorDocument: EditorDocument) {
  // Dynamically import ONLY in browser
  const html2pdf = (await import("html2pdf.js")).default;

  const container = window.document.createElement("div");

  container.style.width = "210mm";
  container.style.background = "#ffffff";

  // paginate expects an array of layout blocks
  const pages = paginate(editorDocument.blocks);

  pages.forEach((page) => {
    const pageDiv = window.document.createElement("div");

    pageDiv.style.width = "210mm";
    pageDiv.style.minHeight = "297mm";
    pageDiv.style.padding = "20mm";
    pageDiv.style.boxSizing = "border-box";
    pageDiv.style.pageBreakAfter = "always";

    page.blocks.forEach((node) => {
      if ("type" in node) {
        switch (node.type) {
          case "heading": {
            const element = window.document.createElement("h1");

            element.innerText = node.text;
            element.style.fontSize = `${node.fontSize}px`;
            if ("align" in node) element.style.textAlign = node.align;
            element.style.whiteSpace = "pre-wrap";
            element.style.lineHeight = "1.8";

            pageDiv.appendChild(element);
            break;
          }

          case "paragraph": {
            const element = window.document.createElement("p");

            element.innerText = node.text;
            element.style.fontSize = `${node.fontSize}px`;
            if ("align" in node) element.style.textAlign = node.align;
            element.style.whiteSpace = "pre-wrap";
            element.style.lineHeight = "1.8";

            pageDiv.appendChild(element);
            break;
          }

          default:
            break;
        }
      }
    });

    container.appendChild(pageDiv);
  });

  await html2pdf()
    .set({
      filename: `${editorDocument.title}.pdf`,
      margin: 0,
      image: {
        type: "jpeg",
        quality: 1,
      },
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    })
    .from(container)
    .save();
}
