import { en } from "../../../assets/languages/en";
import { ua } from "../../../assets/languages/ua";
import { ru } from "../../../assets/languages/ru";

export const fields = [
  {
    label: { en: en.height, ua: ua.height, ru: ru.height },
    name: "height",
    placeholder: { en: en.height, ua: ua.height, ru: ru.height },
    type: "number",
    minLength: "3",
    maxLength: "3",
    min: "100",
    max: "250",
    required: true,
  },
  {
    label: { en: en.age, ua: ua.age, ru: ru.age },
    name: "age",
    placeholder: { en: en.age, ua: ua.age, ru: ru.age },
    type: "number",
    minLength: "2",
    maxLength: "2",
    min: "16",
    max: "100",
    required: true,
  },
  {
    label: { en: en.weight, ua: ua.weight, ru: ru.weight },
    name: "weight",
    placeholder: { en: en.weight, ua: ua.weight, ru: ru.weight },
    type: "number",
    minLength: "2",
    maxLength: "3",
    min: "25",
    required: true,
  },
  {
    label: { en: en.desiredWeight, ua: ua.desiredWeight, ru: ru.desiredWeight },
    name: "desiredWeight",
    placeholder: {
      en: en.desiredWeight,
      ua: ua.desiredWeight,
      ru: ru.desiredWeight,
    },
    type: "number",
    minLength: "2",
    maxLength: "3",
    min: "45",
    required: true,
  },
];

export const blood = [
  {
    label: "1",
    name: "bloodType",
    type: "radio",
    value: 1,
  },
  {
    label: "2",
    name: "bloodType",
    type: "radio",
    value: 2,
  },
  {
    label: "3",
    name: "bloodType",
    type: "radio",
    value: 3,
  },
  {
    label: "4",
    name: "bloodType",
    type: "radio",
    value: 4,
  },
];

export const gender = [
  {
    label: { en: en.male, ua: ua.male, ru: ru.male },
    name: "gender",
    type: "radio",
    value: "male",
  },
  {
    label: { en: en.female, ua: ua.female, ru: ru.female },
    name: "gender",
    type: "radio",
    value: "female",
  },
];

export const physicalActivity = [
  {
    label: { en: en.minimal, ua: ua.minimal, ru: ru.minimal },
    name: "physicalActivity",
    type: "radio",
    value: "1.2",
  },
  {
    label: { en: en.low, ua: ua.low, ru: ru.low },
    name: "physicalActivity",
    type: "radio",
    value: "1.375",
  },
  {
    label: { en: en.medium, ua: ua.medium, ru: ru.medium },
    name: "physicalActivity",
    type: "radio",
    value: "1.55",
  },
  {
    label: { en: en.high, ua: ua.high, ru: ru.high },
    name: "physicalActivity",
    type: "radio",
    value: "1.7",
  },
  {
    label: { en: en.extreme, ua: ua.extreme, ru: ru.extreme },
    name: "physicalActivity",
    type: "radio",
    value: "1.9",
  },
];
