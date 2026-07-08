"use client";

import { DocumentPage } from "../types/page";
import BlockRenderer from "./BlockRenderer";

// import BlockRenderer from "./BlockRenderer";

interface Props {
  page: DocumentPage;
}

export default function Page({ page }: Props) {
  return (
    <div
      className="relative bg-white shadow-xl"
      style={{
        width: page.width,
        height: page.height,
        background: page.background,
      }}
    >
      {page.blocks.map((block) => (
        <BlockRenderer key={block.id} block={block} />
      ))}
    </div>
  );
}
