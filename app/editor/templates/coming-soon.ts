import { EditorDocument } from "../types/document";

export const comingSoonTemplate: EditorDocument = {
  id: "coming-soon",

  title: "Coming Soon",

  pages: [
    {
      id: "page-1",

      width: 794,

      height: 1123,

      background: "#ffffff",

      blocks: [
        {
          id: "title",

          type: "text",

          x: 180,
          y: 160,

          width: 430,
          height: 40,

          rotation: 0,

          locked: false,

          visible: true,

          text: "This template is coming soon",

          fontFamily: "Arial",

          fontSize: 28,

          color: "#2563eb",

          bold: true,

          italic: false,

          underline: false,

          align: "center",
        },

        {
          id: "description",

          type: "text",

          x: 120,
          y: 240,

          width: 560,
          height: 80,

          rotation: 0,

          locked: false,

          visible: true,

          text: "The template structure is already connected to the editor. The final professionally designed document will be added later.",

          fontFamily: "Arial",

          fontSize: 16,

          color: "#4b5563",

          bold: false,

          italic: false,

          underline: false,

          align: "center",
        },
      ],
    },
  ],
};
