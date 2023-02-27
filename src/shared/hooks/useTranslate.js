import { useContext } from "react";

import { LanguageContext } from "../providers/LanguageProvider";

export default function useTranslate() {
  const { language, t, setLangSchema } = useContext(LanguageContext);

  return { lang: language, setLangSchema, t };
}
