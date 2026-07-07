export interface TemplateCategory {
  id: string;
  title: string;
  items: string[];
}

export const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  {
    id: "rental",
    title: "Rental & Property",
    items: ["Rental Agreement", "Money Receipt", "House Rent Receipt"],
  },
  {
    id: "legal",
    title: "Legal",
    items: ["Affidavit", "Power of Attorney", "Legal Notice", "Agreement"],
  },
  {
    id: "land",
    title: "Land Documents",
    items: [
      "Sale Deed",
      "Mutation Application",
      "CS / RS Record",
      "RS / SA Record",
    ],
  },
  {
    id: "government",
    title: "Government",
    items: ["NID Form", "Passport Form"],
  },
  {
    id: "employment",
    title: "Employment",
    items: ["Job Application", "Joining Letter"],
  },
];
