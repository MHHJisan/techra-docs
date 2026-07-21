"use client";

import { useMemo } from "react";

import { useEditorStore } from "../store/editor-store";
import { paginate } from "../utils/paginate";

import Page from "./Page";

export default function Canvas() {
  const document = useEditorStore((state) => state.document);
  const zoom = useEditorStore((state) => state.zoom);

  const pages = useMemo(() => {
    if (!document) return [];

    return paginate(document);
  }, [document]);

  console.log("Canvas pages:", pages.length);

  if (!document) {
    return (
      <main className="flex flex-1 items-center justify-center bg-gray-100">
        <p className="text-gray-500">No document loaded.</p>
      </main>
    );
  }

  return (
    <main className="flex flex-1 justify-center overflow-auto bg-gray-200 p-10">
      <div
        className="flex flex-col gap-10"
        style={{
          transform: `scale(${zoom / 100})`,
          transformOrigin: "top center",
        }}
      >
        {pages.map((page) => (
          <Page key={page.id} page={page} />
        ))}
      </div>
    </main>
  );
}
