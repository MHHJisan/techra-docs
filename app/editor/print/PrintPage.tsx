"use client";

import { DocumentPage } from "../types/page";
import PrintNodeRenderer from "./PrintNodeRenderer";

interface Props {
  page: DocumentPage;
}

export default function PrintPage({ page }: Props) {
  return (
    <div
      className="print-page"
      style={{
        width: "210mm",
        minHeight: "297mm",
        padding: "20mm",
        background: "#fff",
        pageBreakAfter: "always",
        boxSizing: "border-box",
      }}
    >
      {page.nodes.map((node) => (
        <PrintNodeRenderer key={node.id} node={node} />
      ))}
    </div>
  );
}
