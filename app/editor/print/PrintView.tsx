"use client";

import { EditorDocument } from "../types/document";
import { paginate } from "../utils/paginate";
import PrintPage from "./PrintPage";

interface Props {
  document: EditorDocument;
}

export default function PrintView({ document: editorDocument }: Props) {
  // blocks come from the editor document (DocumentNode[]). Paginate expects
  // layout blocks; cast through unknown to the paginate parameter type to
  // satisfy the type system without using `any`.
  const pages = paginate(
    editorDocument.blocks as unknown as Parameters<typeof paginate>[0]
  );

  return (
    <main
      style={{
        background: "#d1d5db",
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      {pages.map((page) => (
        <PrintPage key={page.id} page={page} />
      ))}
    </main>
  );
}
