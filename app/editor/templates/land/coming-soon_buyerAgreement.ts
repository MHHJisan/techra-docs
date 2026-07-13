import { EditorDocument } from "../../types/document";
import { heading, paragraph } from "../../factories/node";

export const comingSoonTemplate_BuyerAgreement: EditorDocument = {
  id: "coming-soon-buyer-agreement",

  title: "Coming Soon Buyer Agreement",

  pages: [
    {
      id: "page-1",

      width: 794,

      height: 1123,

      background: "#ffffff",

      nodes: [
        heading(
          "title",
          "This template is coming soon for Land Buyer Agreement",
        ),

        paragraph(
          "description",
          `The template structure is already connected to the editor.

The final professionally designed document will be added later.`,
        ),
      ],
    },
  ],
};
