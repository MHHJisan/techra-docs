import { TextBlock } from "../types/block";

export function createTextBlock(): TextBlock {
  return {
    id: crypto.randomUUID(),

    type: "text",

    x: 120,
    y: 120,

    width: 250,
    height: 40,

    rotation: 0,

    locked: false,

    visible: true,

    text: "Double click to edit",

    fontFamily: "Arial",

    fontSize: 18,

    color: "#000000",

    bold: false,

    italic: false,

    underline: false,

    align: "left",
  };
}
