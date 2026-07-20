import { EditorDocument } from "../types/document";
import { heading, paragraph } from "../factories/node";

export const comingSoonTemplate: EditorDocument = {
  id: "coming-soon",

  title: "Coming Soon",

  blocks: [
    heading("title", "Coming Soon"),

    paragraph(
      "description",
      `This template is currently under development.

The template structure has already been integrated with the editor.

A professionally designed and fully editable version will be available in a future update.

Thank you for your patience.`,
    ),
  ],
};
