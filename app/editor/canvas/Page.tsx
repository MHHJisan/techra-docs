"use client";

import { DocumentNode } from "../types/node";
import { RenderPage } from "../types/RenderPage";
import NodeRenderer from "./NodeRenderer";

interface Props {
  page: RenderPage;
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
      {page.blocks.map((node: DocumentNode) => (
        <NodeRenderer key={node.id} node={node} />
      ))}
    </div>
  );
}
