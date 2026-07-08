"use client";

import Sidebar from "../components/Sidebar";
import Properties from "../components/Properties";

export default function SettingsView() {
  return (
    <>
      <Sidebar />

      <div className="flex flex-1 items-center justify-center bg-zinc-100">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Settings</h1>

          <p className="mt-2 text-slate-500">
            Configure your editor preferences.
          </p>
        </div>
      </div>

      <Properties />
    </>
  );
}
