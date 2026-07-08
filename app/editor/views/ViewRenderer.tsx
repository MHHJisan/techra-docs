"use client";

import { useEditorStore } from "../store/editor-store";

import HomeView from "./HomeView";
import TemplatesView from "./TemplatesView";
import FavoritesView from "./FavouritesView";
import DocumentsView from "./DocumentsView";
import SettingsView from "./SettingsView";

export default function ViewRenderer() {
  const currentView = useEditorStore((state) => state.currentView);

  switch (currentView) {
    case "home":
      return <HomeView />;

    case "templates":
      return <TemplatesView />;

    case "favorites":
      return <FavoritesView />;

    case "documents":
      return <DocumentsView />;

    case "settings":
      return <SettingsView />;

    default:
      return <HomeView />;
  }
}
