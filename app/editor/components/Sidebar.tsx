"use client";

// import SidebarHeader from "../sidebar/SidebarHeader";
import SidebarSearch from "../sidebar/SidebarSearch";
import SidebarCategories from "../sidebar/SidebarCategories";
import SidebarFooter from "../sidebar/SidebarFooter";

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
