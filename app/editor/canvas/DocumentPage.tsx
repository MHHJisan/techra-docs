"use client";

import type { DocumentPage as Page } from "../types/page";

import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Table from "./Table";
import ImageBlock from "./ImageBlock";

interface Props {
  page: Page;
}

export default function DocumentPage({ page }: Props) {
  return (
    <div
      className="bg-white shadow-xl"
      style={{
        width: "210mm",
        minHeight: "297mm",
        padding: "25mm",
      }}
    >
      {page.blocks.map((block) => {
        switch (block.type as "text" | "paragraph" | "table" | "image") {
          case "text":
            return <Heading key={block.id} block={block} />;

          case "paragraph":
            return <Paragraph key={block.id} block={block} />;

          case "table":
            return <Table key={block.id} block={block} />;

          case "image":
            return <ImageBlock key={block.id} block={block} />;

          default:
            return null;
        }
      })}
    </div>
  );
}
