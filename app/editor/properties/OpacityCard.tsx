"use client";

import Card from "./Card";

export default function OpacityCard() {
  return (
    <Card title="Opacity">
      <input
        type="range"
        min={0}
        max={100}
        defaultValue={100}
        className="w-full"
      />

      <p className="text-sm text-gray-500">100%</p>
    </Card>
  );
}
