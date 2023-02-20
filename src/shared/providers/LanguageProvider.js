import React, { useState } from "react";
import { en } from "../../assets/languages/en";
import { ua } from "../../assets/languages/ua";
import { ru } from "../../assets/languages/ru";

export const LanguageContext = React.createContext({
  language: "ua",
  t: ua,
  setLangSchema: () => {},
  selected: "ua",
});

export const LanguageProvider = ({ children }) => {
  let t = null;

  const [language, setLanguage] = useState("ua");

  switch (language) {
    case "ua":
      t = ua;
      break;
    case "en":
      t = en;
      break;
    case "ru":
      t = ru;
      break;
  }

  const defaultLang = {
    language,
    t,
    setLangSchema: (e) => {
      const chooseLang = e.target.textContent.toLowerCase();
      setLanguage(chooseLang);
    },
  };

  return (
    <LanguageContext.Provider value={defaultLang}>
      {children}
    </LanguageContext.Provider>
  );
};
