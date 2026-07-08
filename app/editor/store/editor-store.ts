"use client";

import { create } from "zustand";

import { EditorDocument } from "../types/document";
// import { createTextElement } from "../factories/text-element";

export type Language = "en" | "bn";

export type ActiveTool = "select" | "text" | "image" | "table" | "shape";

interface EditorState {
  // ==========================
  // Document
  // ==========================

  document: EditorDocument | null;

  // ==========================
  // Language
  // ==========================

  language: Language;

  // ==========================
  // Editor
  // ==========================

  zoom: number;

  activeTool: ActiveTool;

  // ==========================
  // Selection
  // ==========================

  selectedPageId: string | null;

  selectedElementId: string | null;

  // ==========================
  // Actions
  // ==========================

  setDocument: (document: EditorDocument) => void;

  setLanguage: (language: Language) => void;

  setZoom: (zoom: number) => void;

  setActiveTool: (tool: ActiveTool) => void;

  selectPage: (pageId: string | null) => void;

  selectElement: (elementId: string | null) => void;

  addTextElement: () => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  // ==========================
  // Initial State
  // ==========================

  document: null,

  language: "en",

  zoom: 100,

  activeTool: "select",

  selectedPageId: null,

  selectedElementId: null,

  // ==========================
  // Document
  // ==========================

  setDocument: (document) =>
    set({
      document,
      selectedPageId: document.pages[0]?.id ?? null,
    }),

  // ==========================
  // Language
  // ==========================

  setLanguage: (language) =>
    set({
      language,
    }),

  // ==========================
  // Zoom
  // ==========================

  setZoom: (zoom) =>
    set({
      zoom,
    }),

  // ==========================
  // Active Tool
  // ==========================

  setActiveTool: (tool) =>
    set({
      activeTool: tool,
    }),

  // ==========================
  // Selection
  // ==========================

  selectPage: (pageId) =>
    set({
      selectedPageId: pageId,
    }),

  selectElement: (elementId) =>
    set({
      selectedElementId: elementId,
    }),

  // ==========================
  // Elements
  // ==========================

  addTextElement: () =>
    set((state) => {
      if (!state.document) return state;

      const element = createTextElement();

      const pages = [...state.document.pages];

      pages[0] = {
        ...pages[0],
        elements: [...pages[0].elements, element],
      };

      return {
        document: {
          ...state.document,
          pages,
        },

        selectedElementId: element.id,
      };
    }),
}));
