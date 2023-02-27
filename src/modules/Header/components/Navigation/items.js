import { en } from "../../../../assets/languages/en";
import { ua } from "../../../../assets/languages/ua";
import { ru } from "../../../../assets/languages/ru";

export const items = [
  {
    id: 1,
    title: { en: en.signInTitle, ua: ua.signInTitle, ru: ru.signInTitle },
    link: "/signin",
    private: false,
  },
  {
    id: 2,
    title: { en: en.signUpTitle, ua: ua.signUpTitle, ru: ru.signUpTitle },
    link: "/signup",
    private: false,
  },
  {
    id: 3,
    title: { en: en.diary, ua: ua.diary, ru: ru.diary },
    link: "/diary",
    private: true,
  },
  {
    id: 4,
    title: { en: en.calculator, ua: ua.calculator, ru: ru.calculator },
    link: "/calculator",
    private: true,
  },
];
