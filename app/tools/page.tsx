export default function ToolsPage() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-8 py-10">
        <h1 className="text-3xl font-bold">Tools</h1>

        <p className="mt-2 text-gray-600">
          Convert, compress and manage your documents.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">PDF Tools</h2>

            <p className="mt-2 text-sm text-gray-500">
              Word ↔ PDF, Merge, Split, Compress and more.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">Image Tools</h2>

            <p className="mt-2 text-sm text-gray-500">
              Image ↔ PDF, Resize, Compress, Crop.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">AI Tools</h2>

            <p className="mt-2 text-sm text-gray-500">
              OCR, Translate, Summarize, Rewrite.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
