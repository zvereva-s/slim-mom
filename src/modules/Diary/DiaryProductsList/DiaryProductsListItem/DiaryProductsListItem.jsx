import classNames from "classnames";

import useTheme from "../../../../shared/hooks/useTheme";

import Button from "../../../../shared/components/Button";

import s from "./diaryProductsListItem.module.scss";

function DiaryProductsListItem({
  name,
  weight,
  sumCaloriesOfProduct,
  onClick,
  t,
}) {
  const { theme } = useTheme();
  return (
    <li className={classNames(s.item, s[`item-${theme}`])}>
      <p
        className={classNames(
          s.product,
          s.text,
          s[`product-${theme}`],
          s[`text-${theme}`]
        )}
      >
        {name}
      </p>
      <p
        className={classNames(
          s.weight,
          s.text,
          s[`weight-${theme}`],
          s[`text-${theme}`]
        )}
      >
        {weight}
        {t.g}
      </p>
      <p
        className={classNames(
          s.kcal,
          s.text,
          s[`kcal-${theme}`],
          s[`text-${theme}`]
        )}
      >
        {sumCaloriesOfProduct}{" "}
        <span className={classNames(s["kcal-text"], s[`kcal-text-${theme}`])}>
          {t.kcal}
        </span>
      </p>
      <Button
        type="button"
        className={classNames("button", `button-${theme}`)}
        icon="close"
        onClick={onClick}
      />
    </li>
  );
}
export default DiaryProductsListItem;
