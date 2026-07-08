import { EditorDocument } from "../types/document";

export const rentalAgreementTemplate: EditorDocument = {
  id: "rental-agreement",

  title: "Rental Agreement",

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

          text: "RENTAL AGREEMENT",

          x: 180,

          y: 70,

          width: 430,

          height: 50,

          rotation: 0,

          locked: false,

          visible: true,

          fontFamily: "Arial",

          fontSize: 30,

          color: "#111827",

          bold: true,

          italic: false,

          underline: false,

          align: "center",
        },

        {
          id: "intro",

          type: "text",

          text: "This Rental Agreement is made between the Landlord and the Tenant on the following terms and conditions.",

          x: 70,

          y: 150,

          width: 650,

          height: 60,

          rotation: 0,

          locked: false,

          visible: true,

          fontFamily: "Arial",

          fontSize: 16,

          color: "#374151",

          bold: false,

          italic: false,

          underline: false,

          align: "left",
        },

        {
          id: "landlord",

          type: "text",

          text: "Landlord Name: ______________________________",

          x: 70,

          y: 250,

          width: 650,

          height: 30,

          rotation: 0,

          locked: false,

          visible: true,

          fontFamily: "Arial",

          fontSize: 16,

          color: "#111827",

          bold: false,

          italic: false,

          underline: false,

          align: "left",
        },

        {
          id: "tenant",

          type: "text",

          text: "Tenant Name: ______________________________",

          x: 70,

          y: 300,

          width: 650,

          height: 30,

          rotation: 0,

          locked: false,

          visible: true,

          fontFamily: "Arial",

          fontSize: 16,

          color: "#111827",

          bold: false,

          italic: false,

          underline: false,

          align: "left",
        },
      ],
    },
  ],
};
