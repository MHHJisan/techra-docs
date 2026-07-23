export default function MyDocumentsPage() {
  const documents = [
    {
      id: 1,
      title: "Rental Agreement",
      updatedAt: "2 hours ago",
      category: "Legal",
    },
    {
      id: 2,
      title: "Money Receipt",
      updatedAt: "Yesterday",
      category: "Finance",
    },
    {
      id: 3,
      title: "Job Application",
      updatedAt: "3 days ago",
      category: "Personal",
    },
    {
      id: 4,
      title: "Power of Attorney",
      updatedAt: "1 week ago",
      category: "Legal",
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-8 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">My Documents</h1>

            <p className="mt-2 text-gray-500">
              Manage, organize and edit your saved documents.
            </p>
          </div>

          <button className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700">
            + New Document
          </button>
        </div>

        <div className="overflow-hidden rounded-xl bg-white shadow">
          <table className="w-full">
            <thead className="bg-gray-50 text-left text-sm uppercase text-gray-500">
              <tr>
                <th className="px-6 py-4">Document</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Last Updated</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id} className="border-t hover:bg-gray-50">
                  <td className="px-6 py-5 font-medium text-gray-800">
                    {doc.title}
                  </td>

                  <td className="px-6 py-5 text-gray-600">{doc.category}</td>

                  <td className="px-6 py-5 text-gray-500">{doc.updatedAt}</td>

                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      <button className="rounded-md border px-3 py-2 text-sm hover:bg-gray-100">
                        Open
                      </button>

                      <button className="rounded-md border px-3 py-2 text-sm hover:bg-gray-100">
                        Rename
                      </button>

                      <button className="rounded-md border border-red-300 px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
