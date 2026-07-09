import { EditorDocument } from "../types/document";
import { TextBlock } from "../types/block";

const text = (
  id: string,
  x: number,
  y: number,
  text: string,
  size = 16,
  bold = false,
): TextBlock => ({
  id,
  type: "text",

  x,
  y,

  width: 480,
  height: 28,

  rotation: 0,

  locked: false,

  visible: true,

  text,

  fontFamily: "Noto Sans Bengali",

  fontSize: size,

  color: "#111827",

  bold,

  italic: false,

  underline: false,

  align: "left",
});

export const houseOrFlatRentalAgreementTemplate: EditorDocument = {
  id: "house-flat-rental-agreement",

  title: "House / Flat Rental Agreement",

  pages: [
    {
      id: "page-1",

      width: 794,

      height: 1123,

      background: "#ffffff",

      blocks: [
        text("title", 220, 70, "বাড়ী/ফ্ল্যাট বাড়ায চুক্তিপত্র", 24, true),

        text("owner-heading", 70, 150, "প্রথম পক্ষ / মালিক", 18, true),

        text("owner-name", 70, 190, "নামঃ __________________________"),

        text("owner-father", 70, 225, "পিতার নামঃ _____________________"),

        text("owner-address", 70, 260, "ঠিকানাঃ ________________________"),

        text("owner-nid", 70, 295, "জাতীয় পরিচয়পত্র নংঃ ____________"),

        text("owner-mobile", 70, 330, "মোবাইলঃ ________________________"),

        text("owner-profession", 70, 365, "পেশাঃ __________________________"),

        text("tenant-heading", 70, 445, "দ্বিতীয় পক্ষ / বাড়াটিয়া", 18, true),

        text("tenant-name", 70, 485, "নামঃ __________________________"),

        text("tenant-father", 70, 520, "পিতার নামঃ _____________________"),

        text("tenant-address", 70, 555, "ঠিকানাঃ ________________________"),

        text("tenant-nid", 70, 590, "জাতীয় পরিচয়পত্র নংঃ ____________"),

        text("tenant-mobile", 70, 625, "মোবাইলঃ ________________________"),

        text("tenant-profession", 70, 660, "পেশাঃ __________________________"),

        text("agreement-start", 70, 760, "নিম্ন লিখিত শর্তে ..."),

        text("advance", 70, 820, "অগ্রিম টাকাঃ ____________________"),

        text("rent", 70, 855, "মাসিক ভাড়াঃ _____________________"),

        text("footer", 620, 1080, "পাতা ১"),
      ],
    },

    {
      id: "page-2",

      width: 794,

      height: 1123,

      background: "#ffffff",

      blocks: [
        text("id-1", 70, 70, "১।"),

        text(
          "id-2",
          110,
          70,
          "....................................................",
        ),

        text("id-3", 70, 140, "২।"),

        text(
          "id-4",
          110,
          140,
          "....................................................",
        ),

        text("id-5", 70, 420, "৩।"),

        text(
          "id-6",
          110,
          420,
          "....................................................",
        ),

        text("footer", 640, 1080, "পাতা ২"),
      ],
    },

    {
      id: "page-3",

      width: 794,

      height: 1123,

      background: "#ffffff",

      blocks: [
        text("4", 70, 70, "৪।"),
        text("4-body", 110, 70, "............................"),
        text("5", 70, 340, "৫।"),
        text("5-body", 110, 340, "............................"),
        text("6", 70, 560, "৬।"),
        text("6-body", 110, 560, "............................"),
        text("footer", 640, 1080, "পাতা ৩"),
      ],
    },

    {
      id: "page-4",

      width: 794,

      height: 1123,

      background: "#ffffff",

      blocks: [
        text("7", 70, 70, "৭।"),
        text("7-body", 110, 70, "............................"),
        text("8", 70, 340, "৮।"),
        text("8-body", 110, 340, "............................"),
        text("9", 70, 560, "৯।"),
        text("9-body", 110, 560, "............................"),
        text("footer", 640, 1080, "পাতা ৪"),
      ],
    },

    {
      id: "page-5",

      width: 794,

      height: 1123,

      background: "#ffffff",

      blocks: [
        text("10", 70, 70, "১০।"),
        text("10-body", 110, 70, "............................"),
        text("11", 70, 330, "১১।"),
        text("11-body", 110, 330, "............................"),
        text("12", 70, 600, "১২।"),
        text("12-body", 110, 600, "............................"),
        text("footer", 640, 1080, "পাতা ৫"),
      ],
    },

    {
      id: "page-6",

      width: 794,

      height: 1123,

      background: "#ffffff",

      blocks: [
        text("13", 70, 70, "১৩।"),
        text("13-body", 110, 70, "............................"),
        text("14", 70, 330, "১৪।"),
        text("14-body", 110, 330, "............................"),
        text("15", 70, 650, "১৫।"),
        text("15-body", 110, 650, "............................"),
        text("footer", 640, 1080, "পাতা ৬"),
      ],
    },

    {
      id: "page-7",

      width: 794,

      height: 1123,

      background: "#ffffff",

      blocks: [
        text("16", 70, 70, "১৬।"),
        text("16-body", 110, 70, "............................"),
        text("17", 70, 500, "১৭।"),
        text("17-body", 110, 500, "............................"),
        text("footer", 640, 1080, "পাতা ৭"),
      ],
    },

    {
      id: "page-8",

      width: 794,

      height: 1123,

      background: "#ffffff",

      blocks: [
        text("tenant-witness", 70, 80, "বাড়াটিয়া পক্ষের সাক্ষী", 18, true),

        text(
          "tenant-signatures",
          70,
          130,
          "....................................",
        ),

        text("owner-witness", 70, 500, "মালিক পক্ষের সাক্ষী", 18, true),

        text(
          "owner-signatures",
          70,
          560,
          "....................................",
        ),

        text("owner-sign", 80, 980, "প্রথম পক্ষের স্বাক্ষর", 16, true),

        text("tenant-sign", 470, 980, "দ্বিতীয় পক্ষের স্বাক্ষর", 16, true),
      ],
    },
  ],
};
