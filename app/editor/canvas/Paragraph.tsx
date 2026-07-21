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

    const update = () => {
      if (!ref.current) return;

      const style = getComputedStyle(ref.current);

      const marginTop = parseFloat(style.marginTop);
      const marginBottom = parseFloat(style.marginBottom);

      const height = Math.ceil(
        ref.current.getBoundingClientRect().height + marginTop + marginBottom,
      );

      // console.log("Paragraph height:", height);

      updateNodeHeight(node.id, height);
    };

    update();

    const observer = new ResizeObserver(update);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [node.id, updateNodeHeight]);

  return (
    <div
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      className="whitespace-pre-wrap outline-none"
      style={{
        fontSize: node.fontSize,
        textAlign: node.align,
        lineHeight: 1.8,
        marginTop: `${node.spacingBefore}px`,
        marginBottom: `${node.spacingAfter}px`,
      }}
      onInput={(e) => {
        updateNode(node.id, {
          text: e.currentTarget.textContent ?? "",
        });
      }}
    />
  );
}
