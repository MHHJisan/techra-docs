"use client";

import { ParagraphNode } from "../types/node";

export default function Paragraph({ node }: { node: ParagraphNode }) {
  return (
    <div
      contentEditable
      suppressContentEditableWarning
      className="mb-5 whitespace-pre-wrap outline-none"
      style={{
        fontSize: node.fontSize,
        textAlign: node.align,
        lineHeight: 1.8,
      }}
    >
      {node.text}
    </div>
  );
}
