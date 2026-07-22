"use client";

import { useEffect, useRef } from "react";

import { HeadingNode } from "../types/node";
import { useEditorStore } from "../store/editor-store";
import { LayoutLine } from "../types/layout";

interface Props {
  node: HeadingNode;
  lines: LayoutLine[];
}

export default function Heading({ node, lines }: Props) {
  const updateNode = useEditorStore((state) => state.updateNode);
  const updateNodeHeight = useEditorStore((state) => state.updateNodeHeight);

  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    if (document.activeElement !== ref.current) {
      // Get the lines from the layout block
      const textToRender = lines.map((line) => line.text).join("\n");
      ref.current.textContent = textToRender;
    }
  }, [node.text, lines]);

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

      updateNodeHeight(node.id, height);
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [node.id, updateNodeHeight]);

  // Get the lines to render
  const textToRender = lines.map((line) => line.text).join("\n");

  return (
    <h1
      ref={ref}
      contentEditable
      suppressContentEditableWarning
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
    >
      {textToRender}
    </h1>
  );
}
