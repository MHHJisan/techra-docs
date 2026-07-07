import { create } from "zustand";
import { EditorDocument } from "../types/document";
// import { TextBlock } from "../types/block";
import { createTextBlock } from "../factories/text-block";

interface EditorState {
  document: EditorDocument | null;

  setDocument: (document: EditorDocument) => void;

  addTextBlock: () => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  document: null,

  setDocument: (document) => set({ document }),

  addTextBlock: () =>
    set((state) => {
      if (!state.document) return state;

      const block = createTextBlock();

      return {
        document: {
          ...state.document,
          pages: [
            {
              ...state.document.pages[0],
              blocks: [...state.document.pages[0].blocks, block],
            },
          ],
        },
      };
    }),
}));
