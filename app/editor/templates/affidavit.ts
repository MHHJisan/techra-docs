import { EditorDocument } from "../types/document";

export const affidavitTemplate: EditorDocument = {
  id: "affidavit",

  title: "Affidavit",

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

          x: 270,
          y: 70,

          width: 250,
          height: 40,

          rotation: 0,

          locked: false,

          visible: true,

          text: "AFFIDAVIT",

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
          y: 160,

          width: 650,
          height: 400,

          rotation: 0,

          locked: false,

          visible: true,

          text: "I solemnly affirm that the statements contained in this affidavit are true and correct to the best of my knowledge and belief.",

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
