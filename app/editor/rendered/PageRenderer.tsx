import { DocumentPage } from "../types/page";
import BlockRenderer from "./BlockRenderer";

interface Props {
  page: DocumentPage;
}

export default function PageRenderer({ page }: Props) {
  return (
    <>
      {page.blocks.map((block) => (
        <BlockRenderer key={block.id} block={block} />
      ))}
    </>
  );
}
