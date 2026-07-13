"use client";

import { create } from "zustand";

import { EditorDocument } from "../types/document";

import { paragraph } from "../factories/node";
import { paginate } from "../utils/paginate";

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

  selectedNodeId: string | null;
  // ==========================================
  // Actions
  // ==========================================

  setDocument: (document: EditorDocument) => void;

  setLanguage: (language: Language) => void;

  setCurrentView: (view: EditorView) => void;

  setZoom: (zoom: number) => void;

  setActiveTool: (tool: ActiveTool) => void;

  selectPage: (pageId: string | null) => void;

  selectNode: (nodeId: string | null) => void;
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

  selectedNodeId: null,

  // ==========================================
  // Document
  // ==========================================

  setDocument: (document) => {
    const paginated = paginate(document);

    set({
      document: paginated,
      selectedPageId: paginated.pages[0]?.id ?? null,
    });
  },

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
      selectedNodeId: null,
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

  selectNode: (nodeId) =>
    set({
      selectedNodeId: nodeId,
    }),
  // ==========================================
  // Blocks
  // ==========================================

  addTextBlock: () =>
    set((state) => {
      if (!state.document) return state;

      const node = paragraph(crypto.randomUUID(), "নতুন লেখা...");

      const pages = [...state.document.pages];

      pages[0] = {
        ...pages[0],
        nodes: [...pages[0].nodes, node],
      };

      return {
        document: {
          ...state.document,
          pages,
        },

        selectedNodeId: node.id,
        propertiesPanel: "text",
      };
    }),
}));
