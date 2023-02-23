import classNames from "classnames";

import useTranslate from "../../hooks/useTranslate";
import useTheme from "../../hooks/useTheme";

import s from "./notRecommendedProductList.module.scss";

function NotRecommendedProductList({ className, list }) {
  const { theme } = useTheme();
  const { t } = useTranslate();
  let contentList = [];
  let counter = 0;

  if (list) {
    while (counter < 5) {
      contentList.push(list[Math.floor(Math.random() * (47 - 1) + 1)]);
      counter += 1;
    }
  }

  return (
    <div className={`${s} ${s.wrapper} ${className}`}>
      <h3 className={classNames(s.title, s[`title-${theme}`])}>
        {t.titleNotRecom}
      </h3>
      <ol className={classNames(s.list, s[`list-${theme}`])}>
        {contentList.map((item, idx) => (
          <li key={idx + 1} className={s.item}>
            {" "}
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}
export default NotRecommendedProductList;
