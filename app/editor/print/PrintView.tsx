"use client";

import { EditorDocument } from "../types/document";
import PrintPage from "./PrintPage";

interface Props {
  document: EditorDocument;
}

export default function PrintView({ document }: Props) {
  return (
    <>
      {document.pages.map((page) => (
        <PrintPage key={page.id} page={page} />
      ))}
    </>
  );
}
