"use client";

import { DocumentNode } from "../types/node";

import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface Props {
  node: DocumentNode;
}

export default function NodeRenderer({ node }: Props) {
  switch (node.type) {
    case "heading":
      return <Heading node={node} />;

    case "paragraph":
      return <Paragraph node={node} />;

    default:
      return null;
  }
}
