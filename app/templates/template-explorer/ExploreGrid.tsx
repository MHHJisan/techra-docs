"use client";

import { DOCUMENT_TEMPLATES } from "../../editor/constants/templates";
import TemplateCard from "./TemplateCard";

export default function ExplorerGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {DOCUMENT_TEMPLATES.map((template) => (
        <TemplateCard
          key={template.id}
          name={template.name}
          category={template.category}
          premium={template.premium}
        />
      ))}
    </div>
  );
}
