import classNames from "classnames";

import Button from "../../../../shared/components/Button";

import s from "./diaryProductsListItem.module.scss";

function DiaryProductsListItem({
  name,
  weight,
  sumCaloriesOfProduct,
  onClick,
  t,
}) {
  return (
    <li className={s.item}>
      <p className={classNames(s.product, s.text)}>{name}</p>
      <p className={classNames(s.weight, s.text)}>
        {weight}
        {t.g}
      </p>
      <p className={classNames(s.kcal, s.text)}>
        {sumCaloriesOfProduct} <span className={s["kcal-text"]}>{t.kcal}</span>
      </p>
      <Button
        type="button"
        className={classNames("button")}
        icon="close"
        onClick={onClick}
      />
    </li>
  );
}
export default DiaryProductsListItem;
