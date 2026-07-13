"use client";

import html2pdf from "html2pdf.js";

import { EditorDocument } from "../types/document";

export async function exportPDF(editorDocument: EditorDocument) {
  // Create temporary container
  const container = window.document.createElement("div");

  container.style.width = "210mm";
  container.style.background = "#ffffff";
  container.style.padding = "0";
  container.style.margin = "0";

  editorDocument.pages.forEach((page) => {
    const pageDiv = window.document.createElement("div");

    pageDiv.style.width = "210mm";
    pageDiv.style.minHeight = "297mm";
    pageDiv.style.padding = "20mm";
    pageDiv.style.boxSizing = "border-box";
    pageDiv.style.background = "#ffffff";
    pageDiv.style.pageBreakAfter = "always";

    page.nodes.forEach((node) => {
      const element =
        node.type === "heading"
          ? window.document.createElement("h1")
          : window.document.createElement("p");

      element.textContent = node.text;

      element.style.fontSize = `${node.fontSize}px`;
      element.style.textAlign = node.align;
      element.style.whiteSpace = "pre-wrap";
      element.style.margin = "0 0 16px 0";
      element.style.lineHeight = "1.8";

      pageDiv.appendChild(element);
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
