import { EditorDocument } from "../types/document";
import { heading, paragraph } from "../factories/node";

export const comingSoon_shopRentalAgreementTemplate: EditorDocument = {
  id: "coming-soon-shop-rental-agreement",

  title: "Coming Soon Shop Rental Agreement",

  pages: [
    {
      id: "page-1",

      width: 794,

      height: 1123,

      background: "#ffffff",

      nodes: [
        heading("title", "দোকান ভাড়া চুক্তিপত্র"),

        paragraph(
          "description",
          `এই টেমপ্লেটটি বর্তমানে প্রস্তুত করা হচ্ছে।

খুব শীঘ্রই সম্পূর্ণ পেশাদার মানের দোকান ভাড়া চুক্তিপত্র এখানে যুক্ত করা হবে।

ততদিন পর্যন্ত অনুগ্রহ করে অন্যান্য উপলব্ধ টেমপ্লেট ব্যবহার করুন।

ধন্যবাদ।`,
        ),
      ],
    },
  ],
};
