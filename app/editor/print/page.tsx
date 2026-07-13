"use client";

import { useEffect } from "react";

import PrintView from "./PrintView";
import { getPrintDocument } from "../services/print-storage";

export default function PrintPage() {
  const editorDocument = getPrintDocument();

  useEffect(() => {
    if (!editorDocument) return;

    setTimeout(() => {
      window.print();
    }, 300);
  }, [editorDocument]);

  if (!editorDocument) {
    return <p>No document found.</p>;
  }

  return <PrintView document={editorDocument} />;
}
