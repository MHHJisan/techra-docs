"use client";

import { Search } from "lucide-react";

export default function SidebarSearch() {
  return (
    <div className="border-b border-gray-100 p-4">
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
          placeholder="Search categories..."
          className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-10 pr-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
        />
      </div>
    </div>
  );
}
