"use client";

import { useEffect, useRef } from "react";

import { ParagraphNode } from "../types/node";
import { useEditorStore } from "../store/editor-store";

interface Props {
  pageId: string;
  node: ParagraphNode;
}

export default function Paragraph({ pageId, node }: Props) {
  const updateNode = useEditorStore((state) => state.updateNode);

  const ref = useRef<HTMLDivElement>(null);

  // Only update DOM when the document changes externally.
  // Never overwrite while the user is actively editing.
  useEffect(() => {
    if (!ref.current) return;

    if (document.activeElement !== ref.current) {
      ref.current.textContent = node.text;
    }
  }, [node.text]);

  return (
    <div
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      className="mb-5 whitespace-pre-wrap outline-none"
      style={{
        fontSize: node.fontSize,
        textAlign: node.align,
        lineHeight: 1.8,
      }}
      onInput={(e) => {
        if (!ref.current) return;

        updateNode(pageId, node.id, {
          text: e.currentTarget.textContent ?? "",
          height: ref.current.scrollHeight,
        });
      }}
      onBlur={() => {
        if (!ref.current) return;

        updateNode(pageId, node.id, {
          text: ref.current.textContent ?? "",
          height: ref.current.scrollHeight,
        });
      }}
    />
  );
}
