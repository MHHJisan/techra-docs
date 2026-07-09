"use client";

import ExplorerGrid from "../templates/ExplorerGrid";
import ExplorerHeader from "../templates/ExplorerHeader";

export default function TemplateExplorer() {
  return (
    <section className="flex-1 overflow-auto bg-gray-50 p-8">
      <ExplorerHeader />

      <ExplorerGrid />
    </section>
  );
}
