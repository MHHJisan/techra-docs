"use client";

import {
  PAGE_HEIGHT,
  PAGE_PADDING_BOTTOM,
  PAGE_PADDING_LEFT,
  PAGE_PADDING_RIGHT,
  PAGE_PADDING_TOP,
  FOOTER_HEIGHT,
} from "../factories/render-page";

import { LayoutBlock } from "../types/layout";
import { RenderPage } from "../types/RenderPage";

import NodeRenderer from "./NodeRenderer";

interface Props {
  page: RenderPage;
}

export default function Page({ page }: Props) {
  return (
    <div
      className="header relative mx-auto border border-gray-300 bg-white shadow-xl"
      style={{
        width: page.width,
        height: page.height,
        backgroundColor: page.background,
      }}
    >
      <div
        className="content"
        style={{
          paddingTop: PAGE_PADDING_TOP,
          paddingLeft: PAGE_PADDING_LEFT,
          paddingRight: PAGE_PADDING_RIGHT,
          boxSizing: "border-box",
          overflow: "visible",
          minHeight:
            (PAGE_HEIGHT -
              PAGE_PADDING_TOP -
              PAGE_PADDING_BOTTOM -
              FOOTER_HEIGHT) *
            0.5,
        }}
      >
        {page.renderItems.map((item) => (
          <NodeRenderer
            key={item.block.node.id + "-" + item.lineStart}
            item={item}
          />
        ))}
      </div>

      <div
        className="footer absolute border-t border-gray-300 text-sm text-gray-600"
        style={{
          left: 0,
          right: 0,
          bottom: 0,
          height: PAGE_PADDING_BOTTOM + FOOTER_HEIGHT,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "right",
          zIndex: 10,
          backgroundColor: page.background,
          paddingTop: PAGE_PADDING_BOTTOM,
        }}
      >
        চলমান পাতা ..... / {page.pageNumber}
      </div>
    </div>
  );
}
