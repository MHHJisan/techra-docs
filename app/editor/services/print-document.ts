import PrintWindow from "../print/PrintWindow";
import { EditorDocument } from "../types/document";

export function printDocument(document: EditorDocument) {
  PrintWindow(document);
}
