"use client";

import { Settings2 } from "lucide-react";

export default function PropertiesHeader() {
  return (
    <div className="flex items-center gap-3 border-b border-gray-200 p-5">
      <Settings2 size={20} className="text-blue-600" />

      <div>
        <h2 className="font-semibold text-gray-900">Properties</h2>

        <p className="text-sm text-gray-500">Edit selected object</p>
      </div>
    </div>
  );
}
