import { EditorDocument } from "../types/document";
import { heading, paragraph } from "../factories/node";

export const affidavitTemplate: EditorDocument = {
  id: "affidavit",

  title: "Affidavit",

  pages: [
    {
      id: "page-1",

      width: 794,

      height: 1123,

      background: "#ffffff",

      nodes: [
        heading("title", "AFFIDAVIT"),

        paragraph(
          "body",
          `I solemnly affirm that the statements contained in this affidavit are true and correct to the best of my knowledge and belief.

1. ___________________________________________

2. ___________________________________________

3. ___________________________________________

4. ___________________________________________

5. ___________________________________________

Signature of the Deponent

_______________________________`,
        ),
      ],
    },
  ],
};
