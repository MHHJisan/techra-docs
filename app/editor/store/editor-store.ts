"use client";

import { create } from "zustand";

import { EditorDocument } from "../types/document";
import { DocumentNode } from "../types/node";
import { paragraph } from "../factories/node";
import {
  normalizeEditorDocument,
  getDocumentBlocks,
} from "../utils/normalize-document";

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
  | "tools";

interface EditorState {
  document: EditorDocument | null;

  language: Language;

  currentView: EditorView;

  propertiesPanel: PropertiesPanel;

  zoom: number;

  activeTool: ActiveTool;

  selectedNodeId: string | null;

  setDocument: (document: EditorDocument) => void;

  setLanguage: (language: Language) => void;

  setCurrentView: (view: EditorView) => void;

  setZoom: (zoom: number) => void;

  setActiveTool: (tool: ActiveTool) => void;

  selectNode: (nodeId: string | null) => void;

  openProperties: (panel: PropertiesPanel) => void;

  closeProperties: () => void;

  addTextBlock: () => void;

  updateNode: (nodeId: string, updates: Partial<DocumentNode>) => void;
  updateNodeHeight: (nodeId: string, height: number) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  document: null,

  language: "bn",

  currentView: "home",

  propertiesPanel: "none",

  zoom: 100,

  activeTool: "select",

  selectedNodeId: null,

  setDocument: (document) =>
    set({
      document: normalizeEditorDocument(document),
    }),

  setLanguage: (language) =>
    set({
      language,
    }),

  setCurrentView: (view) =>
    set({
      currentView: view,
    }),

  setZoom: (zoom) =>
    set({
      zoom,
    }),

  setActiveTool: (tool) =>
    set({
      activeTool: tool,
    }),

  selectNode: (nodeId) =>
    set({
      selectedNodeId: nodeId,
    }),

  openProperties: (panel) =>
    set({
      propertiesPanel: panel,
    }),

  closeProperties: () =>
    set({
      propertiesPanel: "none",
      selectedNodeId: null,
    }),

  addTextBlock: () =>
    set((state) => {
      if (!state.document) return state;

      const node = paragraph(crypto.randomUUID(), "নতুন লেখা...");
      const blocks = getDocumentBlocks(state.document);

      return {
        document: {
          ...state.document,
          blocks: [...blocks, node],
        },

        selectedNodeId: node.id,

        propertiesPanel: "text",
      };
    }),

  updateNode: (nodeId, updates) =>
    set((state) => {
      if (!state.document) return state;

      console.log("TEXT UPDATE", nodeId);

      const blocks = getDocumentBlocks(state.document);

      return {
        document: {
          ...state.document,
          blocks: blocks.map((node) =>
            node.id === nodeId
              ? ({
                  ...node,
                  ...updates,
                } as DocumentNode)
              : node,
          ),
        },
      };
    }),
  updateNodeHeight: (nodeId, height) =>
    set((state) => {
      if (!state.document) return state;

      console.log("Updating", nodeId, "=>", height);

      const blocks = state.document.blocks.map((node) =>
        node.id === nodeId
          ? {
              ...node,
              height,
            }
          : node,
      );

      const updatedNode = blocks.find((n) => n.id === nodeId);

      console.log("Stored height:", updatedNode?.height);

      return {
        document: {
          ...state.document,
          blocks,
        },
      };
    }),
}));
