export function measureParagraph(text: string, width = 650, fontSize = 16) {
  const averageCharWidth = fontSize * 0.55;

  const charsPerLine = Math.floor(width / averageCharWidth);

  const logicalLines = text.split("\n");

  let totalLines = 0;

  logicalLines.forEach((line) => {
    totalLines += Math.max(1, Math.ceil(line.length / charsPerLine));
  });

  return totalLines * (fontSize * 1.7);
}
