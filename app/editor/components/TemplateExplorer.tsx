"use client";

import ExplorerGrid from "../templates/ExploreGrid";
import ExplorerHeader from "../templates/ExploreHeader";

export default function TemplateExplorer() {
  return (
    <section className="flex-1 overflow-auto bg-gray-50 p-8">
      <ExplorerHeader />

      <ExplorerGrid />
    </section>
  );
}
