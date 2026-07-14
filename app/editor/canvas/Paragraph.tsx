"use client";

import { useEffect, useRef } from "react";

import { ParagraphNode } from "../types/node";
import { useEditorStore } from "../store/editor-store";
import { useNodeHeight } from "../hooks/useNodeHeight";

interface Props {
  pageId: string;
  node: ParagraphNode;
}

export default function Paragraph({ pageId, node }: Props) {
  const updateNode = useEditorStore((state) => state.updateNode);

  const updateNodeHeight = useEditorStore((state) => state.updateNodeHeight);

  const ref = useRef<HTMLDivElement>(null);

  // Keep DOM synchronized when the document changes externally
  useEffect(() => {
    if (!ref.current) return;

    if (document.activeElement !== ref.current) {
      if (ref.current.textContent !== node.text) {
        ref.current.textContent = node.text;
      }
    }
  }, [node.text]);

  // Observe rendered height
  useNodeHeight(ref, pageId, node.id, updateNodeHeight);

  return (
    <div
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      className="mb-5 whitespace-pre-wrap wrap-break-word outline-none"
      style={{
        fontSize: node.fontSize,
        textAlign: node.align,
        lineHeight: 1.8,
      }}
      onInput={(e) => {
        updateNode(pageId, node.id, {
          text: e.currentTarget.textContent ?? "",
        });
      }}
    />
  );
}
