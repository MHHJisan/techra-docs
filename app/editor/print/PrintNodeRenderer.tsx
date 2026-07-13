"use client";

import { DocumentNode } from "../types/node";

interface Props {
  node: DocumentNode;
}

export default function PrintNodeRenderer({ node }: Props) {
  switch (node.type) {
    case "heading":
      return (
        <h1
          style={{
            fontSize: node.fontSize,
            textAlign: node.align,
            marginBottom: 20,
          }}
        >
          {node.text}
        </h1>
      );

    case "paragraph":
      return (
        <p
          style={{
            fontSize: node.fontSize,
            textAlign: node.align,
            whiteSpace: "pre-wrap",
            lineHeight: 1.8,
            marginBottom: 16,
          }}
        >
          {node.text}
        </p>
      );

    default:
      return null;
  }
}
