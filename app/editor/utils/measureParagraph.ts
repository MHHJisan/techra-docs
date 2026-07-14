export function measureParagraphHeight(
  text: string,
  width: number,
  fontSize: number,
  lineHeight: number,
) {
  const div = document.createElement("div");

  div.style.position = "absolute";
  div.style.visibility = "hidden";
  div.style.pointerEvents = "none";

  div.style.width = `${width}px`;

  div.style.whiteSpace = "pre-wrap";

  div.style.wordBreak = "break-word";

  div.style.fontSize = `${fontSize}px`;

  div.style.lineHeight = `${lineHeight}`;

  div.textContent = text;

  document.body.appendChild(div);

  const height = div.scrollHeight;

  div.remove();

  return height;
}
