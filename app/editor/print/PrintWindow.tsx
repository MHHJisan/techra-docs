"use client";

import { createRoot } from "react-dom/client";
import PrintView from "./PrintView";
import { EditorDocument } from "../types/document";

export default function PrintWindow(document: EditorDocument) {
  const printWindow = window.open("", "_blank", "width=900,height=900");

  if (!printWindow) return;

  printWindow.document.write(`
<html>
<head>
<title>${document.title}</title>

<style>

body{
margin:0;
padding:0;
background:white;
}

.print-page{
page-break-after:always;
}

</style>

</head>

<body>

<div id="root"></div>

</body>

</html>
`);

  printWindow.document.close();

  const container = printWindow.document.getElementById("root");

  if (!container) return;

  const root = createRoot(container);

  root.render(<PrintView document={document} />);

  setTimeout(() => {
    printWindow.focus();

    printWindow.print();

    printWindow.close();
  }, 500);
}
