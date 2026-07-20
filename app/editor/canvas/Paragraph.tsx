"use client";

import { useEffect, useRef } from "react";

import { ParagraphNode } from "../types/node";
import { useEditorStore } from "../store/editor-store";

interface Props {
  node: ParagraphNode;
}

export default function Paragraph({ node }: Props) {
  const updateNode = useEditorStore((state) => state.updateNode);

  const updateNodeHeight = useEditorStore((state) => state.updateNodeHeight);

  const ref = useRef<HTMLDivElement>(null);

  // Sync external updates into the editor
  useEffect(() => {
    if (!ref.current) return;

    if (document.activeElement !== ref.current) {
      ref.current.textContent = node.text;
    }
  }, [node.text]);

  // Observe actual rendered height
  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(() => {
      if (!ref.current) return;

      updateNodeHeight(node.id, ref.current.scrollHeight);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [node.id, updateNodeHeight]);

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
        updateNode(node.id, {
          text: e.currentTarget.textContent ?? "",
        });
      }}
    />
  );
}
