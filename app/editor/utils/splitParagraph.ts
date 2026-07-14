import { measureParagraphHeight } from "./measureParagraph";

export function splitParagraph(
  text: string,
  availableHeight: number,
  width: number,
  fontSize: number,
  lineHeight: number,
) {
  const words = text.split(" ");

  let first = "";

  let second = "";

  for (let i = 0; i < words.length; i++) {
    const test = first ? `${first} ${words[i]}` : words[i];

    const h = measureParagraphHeight(test, width, fontSize, lineHeight);

    if (h <= availableHeight) {
      first = test;
    } else {
      second = words.slice(i).join(" ");

      break;
    }
  }

  return {
    first,
    second,
  };
}
