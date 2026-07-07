"use client";

import { Bell, Search, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6">
      {/* Left */}
      <div className="flex items-center gap-8">
        <h1 className="text-2xl font-bold text-blue-600">Techra Docs</h1>

        {/* Search */}
        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search templates..."
            className="h-11 w-[420px] rounded-full border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm text-gray-700 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 transition hover:bg-gray-100">
          <Bell size={20} />
        </button>

        <button className="rounded-full p-2 transition hover:bg-gray-100">
          <Settings size={20} />
        </button>

        {/* User */}
        <button className="flex items-center gap-3 rounded-full border border-gray-200 bg-white px-2 py-1 transition hover:bg-gray-50">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="hidden text-left lg:block">
            <p className="text-sm font-semibold text-gray-800">Jisan</p>

            <p className="text-xs text-gray-500">Software Engineer</p>
          </div>
        </button>
      </div>
    </header>
  );
}
