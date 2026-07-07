"use client";

import Card from "./Card";

export default function BorderCard() {
  return (
    <Card title="Border">
      <input
        type="number"
        placeholder="Border Width"
        className="w-full rounded-lg border p-2"
      />
    </Card>
  );
}
