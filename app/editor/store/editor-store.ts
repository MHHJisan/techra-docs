import { create } from "zustand";
import { EditorDocument } from "../types/document";
import { TextBlock } from "../types/block";

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

      const block: TextBlock = {
        id: crypto.randomUUID(),

        type: "text",

        x: 200,

        y: 120,

        width: 300,

        height: 40,

        rotation: 0,

        locked: false,

        visible: true,

        text: "Double click to edit",

        fontFamily: "Arial",

        fontSize: 18,

        color: "#000000",

        bold: false,

        italic: false,

        underline: false,

        align: "left",
      };

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
