"use client";

import {
  PAGE_HEIGHT,
  PAGE_PADDING_BOTTOM,
  PAGE_PADDING_LEFT,
  PAGE_PADDING_RIGHT,
  PAGE_PADDING_TOP,
  FOOTER_HEIGHT,
} from "../factories/render-page";
import { DocumentNode } from "../types/node";
import { RenderPage } from "../types/RenderPage";
import NodeRenderer from "./NodeRenderer";

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
          paddingTop: `${PAGE_PADDING_TOP}px`,
          paddingBottom: `${PAGE_PADDING_BOTTOM + FOOTER_HEIGHT}px`,
          paddingLeft: `${PAGE_PADDING_LEFT}px`,
          paddingRight: `${PAGE_PADDING_RIGHT}px`,
          boxSizing: "border-box",
          height:
            PAGE_HEIGHT -
            PAGE_PADDING_TOP -
            PAGE_PADDING_BOTTOM -
            FOOTER_HEIGHT,
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
          left: `${PAGE_PADDING_LEFT}px`,
          right: `${PAGE_PADDING_RIGHT}px`,
          bottom: `${PAGE_PADDING_BOTTOM}px`,
          height: `${FOOTER_HEIGHT}px`,
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
