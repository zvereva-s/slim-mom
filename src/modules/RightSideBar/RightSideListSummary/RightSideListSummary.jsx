import classNames from "classnames";

import useTheme from "../../../shared/hooks/useTheme";

import s from "./rightSideListSummary.module.scss";

function RightSideListSummary({
  dailyRate,
  date,
  left,
  consumed,
  procentOfDayNorm,
  t,
}) {
  const { theme } = useTheme();
  return (
    <div className={s.wrapper}>
      <h3 className={classNames(s.title, s[`title-${theme}`])}>
        {t.summaryTitle} {date}
      </h3>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s["item-title"]}>{t.left}</p>
          <p className={s.kcal}>
            {left} {t.kcal}
          </p>
        </li>
        <li className={s.item}>
          <p className={s["item-title"]}>{t.consumed}</p>
          <p className={s.kcal}>
            {consumed} {t.kcal}
          </p>
        </li>
        <li className={s.item}>
          <p className={s["item-title"]}>{t.dailyRate}</p>
          <p className={s.kcal}>
            {dailyRate} {t.kcal}
          </p>
        </li>
        <li className={s.item}>
          <p className={s["item-title"]}>{t.procentOfNorm}</p>
          <p className={s.kcal}>{procentOfDayNorm}%</p>
        </li>
      </ul>
    </div>
  );
}
export default RightSideListSummary;
