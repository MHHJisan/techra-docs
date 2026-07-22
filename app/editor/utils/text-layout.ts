function measureTextWidth(text: string, fontSize: number): number {
  if (typeof window === "undefined") {
    // Fallback for server-side rendering
    return text.length * fontSize * 0.5;
  }

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  if (!context) {
    return text.length * fontSize * 0.5;
  }

  context.font = `${fontSize}px sans-serif`;
  return context.measureText(text).width;
}

export function wrapText(
  text: string,
  maxWidth: number,
  fontSize: number,
): string[] {
  const words = text.split(" ");

  const lines: string[] = [];

  let current = "";

  for (const word of words) {
    const testLine = current ? `${current} ${word}` : word;
    const testWidth = measureTextWidth(testLine, fontSize);

    if (testWidth <= maxWidth) {
      current = testLine;
    } else {
      if (current) {
        lines.push(current);
      }
      current = word;
    }
  }

  if (current) lines.push(current);

  return lines;
}
