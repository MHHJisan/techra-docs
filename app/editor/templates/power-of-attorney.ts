import { EditorDocument } from "../types/document";
import { heading, paragraph } from "../factories/node";

export const powerOfAttorneyTemplate: EditorDocument = {
  id: "power-of-attorney",

  title: "Power Of Attorney",

  pages: [
    {
      id: "page-1",

      width: 794,

      height: 1123,

      background: "#ffffff",

      nodes: [
        heading("title", "POWER OF ATTORNEY"),

        paragraph(
          "body",
          `I hereby appoint __________________________ as my lawful attorney to act on my behalf in all matters specified in this document.

The appointed attorney shall have full authority to perform the duties and responsibilities described herein until this authorization is revoked.

Name of Principal:
_____________________________________

Name of Attorney:
_____________________________________

Address:
_____________________________________

National ID / Passport No.:
_____________________________________

Date:
_____________________________________

Signature of Principal

_____________________________________`,
        ),
      ],
    },
  ],
};
