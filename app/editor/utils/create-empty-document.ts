import { create } from "zustand";
import { EditorDocument } from "../types/document";

interface EditorState {
  document: EditorDocument | null;

  setDocument: (document: EditorDocument) => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  document: null,

  setDocument: (document) => set({ document }),
}));
