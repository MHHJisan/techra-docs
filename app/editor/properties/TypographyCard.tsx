"use client";

import Card from "./Card";

export default function TypographyCard() {
  return (
    <Card title="Typography">
      <select className="w-full rounded-lg border p-2">
        <option>Inter</option>
        <option>Roboto</option>
        <option>Poppins</option>
        <option>Times New Roman</option>
        <option>Calibri</option>
      </select>

      <div className="grid grid-cols-2 gap-3">
        <input
          type="number"
          placeholder="16"
          className="rounded-lg border p-2"
        />

        <select className="rounded-lg border p-2">
          <option>Regular</option>
          <option>Medium</option>
          <option>Bold</option>
        </select>
      </div>
    </Card>
  );
}
