import { inputItem } from "./FormContext";

export type itemType = {
  id: number;
  type: string;
};

export const mainFormItems: itemType[] = [
  {
    id: 13,
    type: "description",
  },
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
    type: "password",
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
];

export const userItems: inputItem[] = [];
