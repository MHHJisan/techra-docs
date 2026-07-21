"use client";

import { DocumentNode } from "../types/node";
import { RenderPage } from "../types/RenderPage";
import NodeRenderer from "./NodeRenderer";

const PAGE_PADDING = 25; // mm
const FOOTER_HEIGHT = 12; // mm

interface Props {
  page: RenderPage;
}

export default function Page({ page }: Props) {
  return (
    <div
      className="relative mx-auto border border-gray-300 bg-white shadow-xl"
      style={{
        width: page.width,
        height: page.height,
        backgroundColor: page.background,
      }}
    >
      {/* Content */}
      <div
        style={{
          padding: `${PAGE_PADDING}mm`,
          paddingBottom: `${PAGE_PADDING + FOOTER_HEIGHT}mm`,
          boxSizing: "border-box",
          height: "100%",
        }}
      >
        {page.blocks.map((node: DocumentNode) => (
          <NodeRenderer key={node.id} node={node} />
        ))}
      </div>

      {/* Footer */}
      <div
        className="absolute border-t border-gray-300 text-sm text-gray-600"
        style={{
          left: `${PAGE_PADDING}mm`,
          right: `${PAGE_PADDING}mm`,
          bottom: `${PAGE_PADDING}mm`,
          height: `${FOOTER_HEIGHT}mm`,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        চলমান পাতা ..... / {page.pageNumber}
      </div>
    </div>
  );
}
