import { create } from "zustand";
import { EditorDocument } from "../types/document";
// import { TextBlock } from "../types/block";
import { createTextBlock } from "../factories/text-block";

type Language = "en" | "bn";

interface EditorState {
  document: EditorDocument | null;
  language: Language;

  setDocument: (document: EditorDocument) => void;
  setLanguage: (language: Language) => void;

  addTextBlock: () => void;
}

export const useEditorStore = create<EditorState>((set) => ({
  document: null,
  language: "en",

  setDocument: (document) => set({ document }),
  setLanguage: (language) => set({ language }),

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
