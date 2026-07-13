"use client";

import { EditorDocument } from "../types/document";
import PrintPage from "./PrintPage";

interface Props {
  document: EditorDocument;
}

export default function PrintView({ document }: Props) {
  return (
    <main
      style={{
        background: "#d1d5db",
        minHeight: "100vh",
        padding: "40px 0",
      }}
    >
      {document.pages.map((page) => (
        <PrintPage key={page.id} page={page} />
      ))}
    </main>
  );
}
