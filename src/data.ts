import { inputItem } from "./FormContext";

export type itemType = {
  id: number;
  type: string;
};

export const mainFormItems: itemType[] = [
  {
    id: 1,
    type: "text",
  },
  {
    id: 2,
    type: "email",
  },
  {
    id: 3,
    type: "passowrd",
  },
  {
    id: 5,
    type: "checkbox",
  },
  {
    id: 6,
    type: "radio",
  },
  {
    id: 7,
    type: "button",
  },
  {
    id: 8,
    type: "number",
  },
  {
    id: 4,
    type: "date",
  },
  {
    id: 9,
    type: "time",
  },
  {
    id: 10,
    type: "datetime-local",
  },
  {
    id: 11,
    type: "color",
  },
  {
    id: 12,
    type: "file",
  },
  {
    id: 13,
    type: "image",
  },
];

export const userItems: inputItem[] = [];
