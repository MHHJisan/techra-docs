import { useEditorStore } from "@./editor/store/editor-store";
import PageRenderer from "@/editor/renderer/PageRenderer";

export default function Canvas() {
  const document = useEditorStore((state: any) => state.document);

  return (
    <main className="flex flex-1 justify-center overflow-auto bg-gray-300 p-10">
      <div
        className="relative bg-white shadow-2xl"
        style={{
          width: 794,
          height: 1123,
        }}
      >
        {document && <PageRenderer page={document.pages[0]} />}
      </div>
    </main>
  );
}
