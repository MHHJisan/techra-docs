import { heading, paragraph } from "../factories/node";
import { EditorDocument } from "../types/document";

export const moneyReceiptTemplate: EditorDocument = {
  id: "money-receipt",

  title: "Money Receipt",

  blocks: [
    heading("page-title", " MONEY RECEIPT"),

    paragraph(
      "boyd",
      "Received with thanks from __________________ an amount of __________________ only.",
    ),
  ],
};
