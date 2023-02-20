import classNames from "classnames";

import useTranslate from "../../../../shared/hooks/useTranslate";
import useTheme from "../../../../shared/hooks/useTheme";

import s from "./langSwitcher.module.scss";

function LangSwitcher() {
  const { lang, setLangSchema } = useTranslate();
  const { theme } = useTheme();

  return (
    <div className={classNames(s["lang-box"], s[`lang-box-${theme}`])}>
      <p
        className={classNames(
          s.lang,
          s[`lang-${theme}`],
          s[`en-${lang}-${theme}`]
        )}
        onClick={(e) => setLangSchema(e)}
      >
        EN
      </p>
      <p
        className={classNames(
          s.lang,
          s[`lang-${theme}`],
          s[`ua-${lang}-${theme}`]
        )}
        onClick={(e) => setLangSchema(e)}
      >
        UA
      </p>
      <p
        className={classNames(
          s.lang,
          s[`lang-${theme}`],
          s[`ru-${lang}-${theme}`]
        )}
        onClick={(e) => setLangSchema(e)}
      >
        RU
      </p>
    </div>
  );
}
export default LangSwitcher;
