"use client";

import { useEffect, useRef } from "react";

import { HeadingNode } from "../types/node";
import { useEditorStore } from "../store/editor-store";
import { useNodeHeight } from "../hooks/useNodeHeight";

interface Props {
  pageId: string;
  node: HeadingNode;
}

export default function Heading({ pageId, node }: Props) {
  const updateNode = useEditorStore((state) => state.updateNode);

  const updateNodeHeight = useEditorStore((state) => state.updateNodeHeight);

  const ref = useRef<HTMLHeadingElement>(null);

  useNodeHeight(ref, pageId, node.id, updateNodeHeight);

  // Keep DOM synced with state
  useEffect(() => {
    if (!ref.current) return;

    if (document.activeElement !== ref.current) {
      if (ref.current.textContent !== node.text) {
        ref.current.textContent = node.text;
      }
    }
  }, [node.text]);

  // Watch rendered height
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const observer = new ResizeObserver(() => {
      updateNodeHeight(pageId, node.id, element.scrollHeight);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [pageId, node.id, updateNodeHeight]);

  return (
    <h1
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      className="wrap-break-word outline-none"
      style={{
        fontSize: node.fontSize,
        textAlign: node.align,
        fontWeight: "bold",
        margin: 0,
        padding: 0,
        lineHeight: 1.3,
      }}
      onInput={(e) => {
        updateNode(pageId, node.id, {
          text: e.currentTarget.textContent ?? "",
        });
      }}
    />
  );
}
