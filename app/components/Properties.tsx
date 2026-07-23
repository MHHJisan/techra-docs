"use client";

import PropertiesHeader from "../editor/properties/PropertiesHeader";
import PositionCard from "../editor/properties/PositionCard";
import SizeCard from "../editor/properties/SizeCard";
import TypographyCard from "../editor/properties/TypographyCard";
import FillCard from "../editor/properties/FillCard";
import BorderCard from "../editor/properties/BorderCard";
import ShadowCard from "../editor/properties/ShadowCard";
import OpacityCard from "../editor/properties/OpacityCard";

export default function Properties() {
  return (
    <aside className="flex h-full w-[320px] flex-col border-l border-gray-200 bg-white">
      <PropertiesHeader />

      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        <PositionCard />

        <SizeCard />

        <TypographyCard />

        <FillCard />

        <BorderCard />

        <ShadowCard />

        <OpacityCard />
      </div>
    </aside>
  );
}
