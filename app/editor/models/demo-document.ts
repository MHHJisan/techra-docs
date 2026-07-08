import { DocumentModel } from "./document";

export const demoDocument: DocumentModel = {
  id: "doc-1",

  name: "Rental Agreement",

  pages: [
    {
      id: "page-1",

      width: 794,
      height: 1123,

      background: "#ffffff",

      elements: [
        {
          id: "title",

          type: "text",

          x: 80,
          y: 70,

          width: 400,
          height: 40,

          rotation: 0,
          opacity: 1,

          locked: false,
          visible: true,

          text: "Rental Agreement",

          fontFamily: "Times New Roman",
          fontSize: 26,
          fontWeight: 700,

          color: "#111111",

          align: "center",
        },
      ],
    },
  ],
};
