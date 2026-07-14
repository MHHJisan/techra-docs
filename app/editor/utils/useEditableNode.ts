"use client";

import { useEffect, useRef } from "react";
import { useEditorStore } from "../store/editor-store";

interface Options {
  pageId: string;
  nodeId: string;
  text: string;
}

export function useEditableNode({ pageId, nodeId, text }: Options) {
  const ref = useRef<HTMLElement>(null);

  const updateNode = useEditorStore((s) => s.updateNode);
  const updateNodeHeight = useEditorStore((s) => s.updateNodeHeight);

  // Sync only when not editing
  useEffect(() => {
    if (!ref.current) return;

    if (document.activeElement !== ref.current) {
      ref.current.textContent = text;
    }
  }, [text]);

  // Observe height changes
  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(() => {
      if (!ref.current) return;

      updateNodeHeight(pageId, nodeId, ref.current.scrollHeight);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [pageId, nodeId, updateNodeHeight]);

  const onInput = (e: React.FormEvent<HTMLElement>) => {
    updateNode(pageId, nodeId, {
      text: e.currentTarget.textContent ?? "",
    });
  };

  return {
    ref,
    onInput,
  };
}
