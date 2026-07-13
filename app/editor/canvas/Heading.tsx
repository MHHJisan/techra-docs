"use client";

import { HeadingNode } from "../types/node";

export default function Heading({ node }: { node: HeadingNode }) {
  return (
    <h1
      contentEditable
      suppressContentEditableWarning
      className="mb-8 outline-none"
      style={{
        fontSize: node.fontSize,
        textAlign: node.align,
        fontWeight: 700,
      }}
    >
      {node.text}
    </h1>
  );
}
