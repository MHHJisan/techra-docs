"use client";

import { DocumentNode } from "../types/node";

import Heading from "./Heading";
import Paragraph from "./Paragraph";

interface Props {
  pageId: string;
  node: DocumentNode;
}

export default function NodeRenderer({ pageId, node }: Props) {
  switch (node.type) {
    case "heading":
      return <Heading node={node} />;

    case "paragraph":
      return <Paragraph pageId={pageId} node={node} />;

    default:
      return null;
  }
}
