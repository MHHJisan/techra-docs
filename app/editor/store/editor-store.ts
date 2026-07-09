"use client";

import { create } from "zustand";

import { EditorDocument } from "../types/document";
import { createTextBlock } from "../factories/text-block";

export type Language = "bn" | "en";

export type ActiveTool = "select" | "text" | "image" | "table" | "shape";

export type PropertiesPanel =
  | "none"
  | "text"
  | "image"
  | "table"
  | "shape"
  | "page";

export type EditorView =
  | "home"
  | "templates"
  | "favorites"
  | "documents"
  | "settings";

interface EditorState {
  // ==========================================
  // Document
  // ==========================================

  document: EditorDocument | null;

  // ==========================================
  // Language
  // ==========================================

  language: Language;

  // ==========================================
  // Current Screen
  // ==========================================

  currentView: EditorView;

  // ==========================================
  // Properties Panel
  // ==========================================

  propertiesPanel: PropertiesPanel;

  // ==========================================
  // Editor
  // ==========================================

  zoom: number;

  activeTool: ActiveTool;

  // ==========================================
  // Selection
  // ==========================================

  selectedPageId: string | null;

  selectedBlockId: string | null;

  // ==========================================
  // Actions
  // ==========================================

  setDocument: (document: EditorDocument) => void;

  setLanguage: (language: Language) => void;

  setCurrentView: (view: EditorView) => void;

  setZoom: (zoom: number) => void;

  setActiveTool: (tool: ActiveTool) => void;

  selectPage: (pageId: string | null) => void;

  selectBlock: (blockId: string | null) => void;

  openProperties: (panel: PropertiesPanel) => void;

  closeProperties: () => void;

  addTextBlock: () => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  // ==========================================
  // Initial State
  // ==========================================

  document: null,

  language: "bn",

  currentView: "home",

  propertiesPanel: "none",

  zoom: 100,

  activeTool: "select",

  selectedPageId: null,

  selectedBlockId: null,

  // ==========================================
  // Document
  // ==========================================

  setDocument: (document) =>
    set({
      document,
      selectedPageId: document.pages[0]?.id ?? null,
    }),

  // ==========================================
  // Language
  // ==========================================

  setLanguage: (language) =>
    set({
      language,
    }),

  // ==========================================
  // Current View
  // ==========================================

  setCurrentView: (view) =>
    set({
      currentView: view,
    }),

  // ==========================================
  // Properties
  // ==========================================

  openProperties: (panel) =>
    set({
      propertiesPanel: panel,
    }),

  closeProperties: () =>
    set({
      propertiesPanel: "none",
      selectedBlockId: null,
    }),

  // ==========================================
  // Zoom
  // ==========================================

  setZoom: (zoom) =>
    set({
      zoom,
    }),

  // ==========================================
  // Active Tool
  // ==========================================

  setActiveTool: (tool) =>
    set({
      activeTool: tool,
    }),

  // ==========================================
  // Selection
  // ==========================================

  selectPage: (pageId) =>
    set({
      selectedPageId: pageId,
    }),

  selectBlock: (blockId) =>
    set({
      selectedBlockId: blockId,
    }),

  // ==========================================
  // Blocks
  // ==========================================

  addTextBlock: () =>
    set((state) => {
      if (!state.document) return state;

      const block = createTextBlock();

      const pages = [...state.document.pages];

      pages[0] = {
        ...pages[0],
        blocks: [...pages[0].blocks, block],
      };

      return {
        document: {
          ...state.document,
          pages,
        },

        selectedBlockId: block.id,
        propertiesPanel: "text",
      };
    }),
}));
