import Navbar from "./Navbar";
import Toolbar from "./Toolbar";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import Canvas from "./Canvas";
import StatusBar from "./Statusbar";

export default function EditorLayout() {
  return (
    <div className="flex h-screen flex-col bg-zinc-100 color-slate-900">
      <Navbar />

      <Toolbar />

      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />

        <Canvas />

        <RightSidebar />
      </div>

      <StatusBar />
    </div>
  );
}
