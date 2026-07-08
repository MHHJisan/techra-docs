"use client";

import TextBlock from "../blocks/TextBlock";
import { Block } from "../types/block";

interface Props {
  block: Block;
}

export default function BlockRenderer({ block }: Props) {
  switch (block.type) {
    case "text":
      return <TextBlock block={block} />;

    default:
      return null;
  }
}
