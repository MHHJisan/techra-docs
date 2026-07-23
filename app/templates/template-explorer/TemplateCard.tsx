"use client";

import { Crown, Star } from "lucide-react";

interface Props {
  name: string;
  category: string;
  premium?: boolean;
}

export default function TemplateCard({ name, category, premium }: Props) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative flex h-56 items-center justify-center bg-gray-100">
        <div className="text-6xl">📄</div>

        {premium && (
          <div className="absolute right-3 top-3 rounded-full bg-yellow-400 p-2">
            <Crown size={16} />
          </div>
        )}
      </div>

      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold">{name}</h3>

          <Star
            size={18}
            className="text-gray-300 transition group-hover:text-yellow-500"
          />
        </div>

        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </div>
  );
}
