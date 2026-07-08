"use client";

import { useEditorStore } from "../store/editor-store";
import Page from "./Page";

export default function Canvas() {
  const document = useEditorStore((state) => state.document);

  const zoom = useEditorStore((state) => state.zoom);

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
        {document.pages.map((page) => (
          <Page key={page.id} page={page} />
        ))}
      </div>
    </main>
  );
}
