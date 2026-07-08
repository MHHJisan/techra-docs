import { EditorDocument } from "../types/document";

export const powerOfAttorneyTemplate: EditorDocument = {
  id: "power-of-attorney",

  title: "Power Of Attorney",

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
          y: 70,

          width: 450,
          height: 40,

          rotation: 0,

          locked: false,

          visible: true,

          text: "POWER OF ATTORNEY",

          fontFamily: "Times New Roman",

          fontSize: 26,

          color: "#111827",

          bold: true,

          italic: false,

          underline: true,

          align: "center",
        },

        {
          id: "body",

          type: "text",

          x: 70,
          y: 150,

          width: 650,
          height: 400,

          rotation: 0,

          locked: false,

          visible: true,

          text: "I hereby appoint __________________ as my lawful attorney to act on my behalf in all matters specified in this document.",

          fontFamily: "Times New Roman",

          fontSize: 16,

          color: "#333333",

          bold: false,

          italic: false,

          underline: false,

          align: "left",
        },
      ],
    },
  ],
};
