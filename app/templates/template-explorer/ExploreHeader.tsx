"use client";

import { Search } from "lucide-react";

export default function ExplorerHeader() {
  return (
    <div className="mb-8">
      <h1 className="mb-5 text-3xl font-bold">Browse Templates</h1>

      <div className="relative">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          className="h-12 w-full rounded-xl border pl-12"
          placeholder="Search documents..."
        />
      </div>
    </div>
  );
}
