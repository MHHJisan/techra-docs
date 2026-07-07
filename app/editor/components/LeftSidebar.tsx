export default function LeftSidebar() {
  return (
    <aside className="w-64 border-r bg-white p-4">
      <h2 className="mb-4 font-semibold">Blocks</h2>

      <div className="space-y-2">
        <button className="w-full rounded border p-2 text-left">Text</button>

        <button className="w-full rounded border p-2 text-left">Image</button>

        <button className="w-full rounded border p-2 text-left">Table</button>

        <button className="w-full rounded border p-2 text-left">
          Signature
        </button>
      </div>
    </aside>
  );
}
