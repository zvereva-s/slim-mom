import { en } from "../../../assets/languages/en";
import { ua } from "../../../assets/languages/ua";
import { ru } from "../../../assets/languages/ru";

export const fields = [
  {
    id: 1,
    name: "name",
    placeholder: { en: en.name, ua: ua.name, ru: ru.name },
    type: "text",
    min: "2",
    required: true,
  },
  {
    id: 2,
    name: "email",
    placeholder: { en: en.email, ua: ua.email, ru: ru.email },
    type: "email",
    required: true,
  },
  {
    id: 3,
    name: "password",
    placeholder: { en: en.password, ua: ua.password, ru: ru.password },
    type: "password",
    min: "6",
    required: true,
  },
];
