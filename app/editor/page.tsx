"use client";

import Sidebar from "../components/Sidebar";
import Canvas from "./canvas/Canvas";

export default function HomeView() {
  return (
    <>
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <Canvas />
        {/* <Properties /> */}
      </div>
    </>
  );
}
