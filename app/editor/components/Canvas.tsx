"use client";

import { useEditorStore } from "../store/editor-store";
import PageRenderer from "../renderer/PageRenderer";

export default function Canvas() {
  const document = useEditorStore((state) => state.document);

  if (!document) return null;

  return (
    <main className="flex flex-1 justify-center overflow-auto bg-zinc-300 p-10">
      <div
        className="relative bg-white shadow-2xl"
        style={{
          width: 794,
          height: 1123,
        }}
      >
        <PageRenderer page={document.pages[0]} />
      </div>
    </main>
  );
}
