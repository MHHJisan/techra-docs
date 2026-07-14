"use client";

import { useEffect } from "react";

export function useNodeHeight<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  pageId: string,
  nodeId: string,
  updateNodeHeight: (pageId: string, nodeId: string, height: number) => void,
) {
  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const observer = new ResizeObserver(() => {
      updateNodeHeight(pageId, nodeId, element.scrollHeight);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [pageId, nodeId, ref, updateNodeHeight]);
}
