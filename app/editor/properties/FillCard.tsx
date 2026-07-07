"use client";

import Card from "./Card";

export default function FillCard() {
  return (
    <Card title="Fill">
      <input type="color" defaultValue="#000000" className="h-10 w-full" />
    </Card>
  );
}
