"use client";

// import SidebarHeader from "../sidebar/SidebarHeader";
import SidebarSearch from "../editor/sidebar/SidebarSearch";
import SidebarCategories from "../editor/sidebar/SidebarCategories";
import SidebarFooter from "../editor/sidebar/SidebarFooter";

export default function Sidebar() {
  return (
    <aside className="flex h-full w-75 flex-col border-r border-slate-200 bg-white">
      {" "}
      <SidebarSearch />
      <SidebarCategories />
      <SidebarFooter />
    </aside>
  );
}
