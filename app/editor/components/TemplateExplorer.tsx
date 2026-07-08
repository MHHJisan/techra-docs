"use client";

import ExplorerGrid from "../template-explorer/ExploreGrid";
import ExplorerHeader from "../template-explorer/ExploreHeader";

export default function TemplateExplorer() {
  return (
    <section className="flex-1 overflow-auto bg-gray-50 p-8">
      <ExplorerHeader />

      <ExplorerGrid />
    </section>
  );
}
