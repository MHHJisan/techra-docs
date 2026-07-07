"use client";

import SidebarHeader from "../sidebar/SidebarHeader";
import SidebarSearch from "../sidebar/SidebarSearch";
import SidebarCategories from "../sidebar/SidebarCategories";
import SidebarFooter from "../sidebar/SidebarFooter";

export default function Sidebar() {
  return (
    <aside className="flex h-full w-[290px] flex-col border-r border-gray-200 bg-white">
      <SidebarHeader />

      <SidebarSearch />

      <SidebarCategories />

      <SidebarFooter />
    </aside>
  );
}
