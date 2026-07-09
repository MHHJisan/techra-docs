"use client";

import EditableText from "../blocks/EditableText";

import { Block } from "../types/block";

interface Props {
  block: Block;
}

export default function BlockRenderer({ block }: Props) {
  switch (block.type) {
    case "text":
      return <EditableText block={block} />;

    default:
      return null;
  }
}
