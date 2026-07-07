"use client";

import Card from "./Card";

export default function SizeCard() {
  return (
    <Card title="Size">
      <div className="grid grid-cols-2 gap-3">
        <input placeholder="Width" className="rounded-lg border p-2" />

        <input placeholder="Height" className="rounded-lg border p-2" />
      </div>
    </Card>
  );
}
