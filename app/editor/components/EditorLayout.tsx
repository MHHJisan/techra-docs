"use client";

import { useEffect } from "react";

import Navbar from "./Navbar";
import Toolbar from "./Toolbar";
import StatusBar from "./Statusbar";

import ViewRenderer from "../views/ViewRenderer";

import { useEditorStore } from "../store/editor-store";
import { houseOrFlatRentalAgreementTemplate } from "../templates";

export default function EditorLayout() {
  const setDocument = useEditorStore((state) => state.setDocument);

  useEffect(() => {
    setDocument(houseOrFlatRentalAgreementTemplate);
  }, [setDocument]);

  return (
    <div className="flex h-screen flex-col bg-zinc-100 text-slate-900">
      <Navbar />

      <Toolbar />

      <div className="flex flex-1 overflow-hidden">
        <ViewRenderer />
      </div>

      <StatusBar />
    </div>
  );
}
