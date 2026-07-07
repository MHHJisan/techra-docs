"use client";

import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function Card({ title, children }: Props) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <h3 className="font-medium">{title}</h3>

        <ChevronDown size={18} />
      </div>

      <div className="space-y-4 p-4">{children}</div>
    </div>
  );
}
