"use client";

import { RenderItem } from "../types/render-item";

import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface Props {
  item: RenderItem;
}

export default function NodeRenderer({ item }: Props) {
  switch (item.block.node.type) {
    case "heading":
      return (
        <Heading
          node={item.block.node}
          lines={item.block.lines.slice(item.lineStart, item.lineEnd)}
        />
      );

    case "paragraph":
      return (
        <Paragraph
          node={item.block.node}
          lines={item.block.lines.slice(item.lineStart, item.lineEnd)}
        />
      );

    default:
      return null;
  }
}
