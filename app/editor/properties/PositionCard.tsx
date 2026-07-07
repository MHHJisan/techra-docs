"use client";

import Card from "./Card";

export default function PositionCard() {
  return (
    <Card title="Position">
      <div className="grid grid-cols-2 gap-3">
        <input
          type="number"
          placeholder="X"
          className="rounded-lg border p-2"
        />

        <input
          type="number"
          placeholder="Y"
          className="rounded-lg border p-2"
        />
      </div>
    </Card>
  );
}
