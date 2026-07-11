"use client";

interface Props {
  block: any;
}

export default function Heading({ block }: Props) {
  return (
    <h1
      contentEditable
      suppressContentEditableWarning
      className="mb-6 text-center text-2xl font-bold outline-none"
    >
      {block.text}
    </h1>
  );
}
