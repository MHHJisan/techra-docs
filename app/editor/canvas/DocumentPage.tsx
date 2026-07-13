"use client";

import { DocumentPage as Page } from "../types/page";
import NodeRenderer from "./NodeRenderer";

interface Props {
  page: Page;
}

export default function DocumentPage({ page }: Props) {
  return (
    <div
      className="mx-auto bg-white shadow-xl"
      style={{
        width: "210mm",
        minHeight: "297mm",
        padding: "22mm",
      }}
    >
      {page.nodes.map((node) => (
        <NodeRenderer key={node.id} pageId={page.id} node={node} />
      ))}
    </div>
  );
}
