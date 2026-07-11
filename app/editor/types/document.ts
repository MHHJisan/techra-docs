// Inlined DocumentNode to avoid missing-module errors for './document-node'
export interface DocumentNode {
  id: string;
  type?: string;
  // payload can hold any node-specific data
  payload?: Record<string, unknown>;
}

export interface DocumentPage {
  id: string;
  nodes: DocumentNode[];
}

export interface EditorDocument {
  id: string;
  title: string;
  pages: DocumentPage[];
}
