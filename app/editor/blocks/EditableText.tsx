"use client";

import { useRef } from "react";

import { TextBlock } from "../types/block";

interface Props {
  block: TextBlock;
}

export default function EditableText({ block }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      style={{
        position: "absolute",

        left: block.x,

        top: block.y,

        width: block.width,

        minHeight: block.height,

        fontFamily: block.fontFamily,

        fontSize: block.fontSize,

        fontWeight: block.bold ? 700 : 400,

        fontStyle: block.italic ? "italic" : "normal",

        textDecoration: block.underline ? "underline" : "none",

        color: block.color,

        textAlign: block.align,

        outline: "none",

        whiteSpace: "pre-wrap",

        cursor: "text",

        userSelect: "text",
      }}
    >
      {block.text}
    </div>
  );
}
