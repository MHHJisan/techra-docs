"use client";

import { EditorDocument } from "../types/document";
import { paginate } from "../utils/paginate";
import PrintPage from "./PrintPage";

interface Props {
  document: EditorDocument;
}

export default function PrintView({ document: editorDocument }: Props) {
  const pages = paginate(editorDocument);

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
