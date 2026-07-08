"use client";

import Sidebar from "../components/Sidebar";
import Properties from "../components/Properties";

export default function DocumentsView() {
  return (
    <>
      <Sidebar />

      <div className="flex flex-1 items-center justify-center bg-zinc-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold">My Documents</h1>

          <p className="mt-2 text-slate-500">
            Your saved documents will appear here.
          </p>
        </div>
      </div>

      <Properties />
    </>
  );
}
