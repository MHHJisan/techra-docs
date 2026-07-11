"use client";

interface Props {
  block: any;
}

export default function Paragraph({ block }: Props) {
  return (
    <p
      contentEditable
      suppressContentEditableWarning
      className="mb-4 whitespace-pre-wrap leading-8 outline-none"
    >
      {block.text}
    </p>
  );
}
