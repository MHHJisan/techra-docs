"use client";

import { useRef } from "react";

import { HeadingNode } from "../types/node";
import { useEditorStore } from "../store/editor-store";

interface Props {
  pageId: string;
  node: HeadingNode;
}

export default function Heading({ pageId, node }: Props) {
  const updateNode = useEditorStore((state) => state.updateNode);

  const ref = useRef<HTMLHeadingElement>(null);

  return (
    <h1
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      style={{
        fontSize: node.fontSize,
        textAlign: node.align,
        marginBottom: 20,
        outline: "none",
      }}
      onBlur={() => {
        if (!ref.current) return;

        updateNode(pageId, node.id, {
          text: ref.current.textContent ?? "",
          height: ref.current.scrollHeight,
        });
      }}
    >
      {node.text}
    </h1>
  );
}
