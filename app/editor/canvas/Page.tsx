"use client";

import { DocumentPage } from "../types/page";
import NodeRenderer from "./NodeRenderer";

interface Props {
  page: DocumentPage;
}

export default function Page({ page }: Props) {
  return (
    <div
      className="mx-auto rounded-sm border border-gray-300 bg-white shadow-xl"
      style={{
        width: page.width,
        minHeight: page.height,
        backgroundColor: page.background,
        padding: "25mm",
      }}
    >
      {page.nodes.map((node) => (
        <NodeRenderer key={node.id} node={node} />
      ))}
    </div>
  );
}
