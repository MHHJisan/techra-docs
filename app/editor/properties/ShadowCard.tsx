"use client";

import Card from "./Card";

export default function ShadowCard() {
  return (
    <Card title="Shadow">
      <label className="flex items-center gap-3">
        <input type="checkbox" />
        Enable Shadow
      </label>
    </Card>
  );
}
