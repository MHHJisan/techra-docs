"use client";

import PropertiesHeader from "../properties/PropertiesHeader";
import PositionCard from "../properties/PositionCard";
import SizeCard from "../properties/SizeCard";
import TypographyCard from "../properties/TypographyCard";
import FillCard from "../properties/FillCard";
import BorderCard from "../properties/BorderCard";
import ShadowCard from "../properties/ShadowCard";
import OpacityCard from "../properties/OpacityCard";

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
