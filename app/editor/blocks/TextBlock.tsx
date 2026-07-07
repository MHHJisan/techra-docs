"use client";

import { TextBlock as TextBlockType } from "../types/block";

interface Props {
  block: TextBlockType;
}

export default function TextBlock({ block }: Props) {
  return (
    <div
      className="absolute select-none"
      style={{
        left: block.x,
        top: block.y,

        width: block.width,

        minHeight: block.height,

        fontSize: block.fontSize,

        fontFamily: block.fontFamily,

        color: block.color,

        fontWeight: block.bold ? "bold" : "normal",

        fontStyle: block.italic ? "italic" : "normal",

        textDecoration: block.underline ? "underline" : "none",

        textAlign: block.align,
      }}
    >
      {block.text}
    </div>
  );
}
