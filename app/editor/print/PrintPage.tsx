"use client";

import { RenderPage } from "../types/RenderPage";
import { DocumentNode } from "../types/node";
import PrintNodeRenderer from "./PrintNodeRenderer";

interface Props {
  page: RenderPage;
}

export default function PrintPage({ page }: Props) {
  return (
    <div
      className="print-page"
      style={{
        width: "210mm",
        minHeight: "297mm",
        margin: "0 auto 20px",
        padding: "20mm",
        background: "#fff",
        boxSizing: "border-box",
        boxShadow: "0 0 15px rgba(0,0,0,.15)",
        pageBreakAfter: "always",
      }}
    >
      {page.blocks.map((node, index) => (
        <PrintNodeRenderer key={index} node={node as unknown as DocumentNode} />
      ))}
    </div>
  );
}
