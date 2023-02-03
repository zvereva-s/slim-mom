import classNames from "classnames";

import Button from "../../../../shared/components/Button";

import s from "./diaryProductsListItem.module.scss";

function DiaryProductsListItem() {
  return (
    <li className={s.item}>
      <p className={classNames(s.product, s.text)}>Name</p>
      <p className={classNames(s.weight, s.text)}>100 g</p>
      <p className={classNames(s.kcal, s.text)}>
        100 <span className={s["kcal-text"]}>kcal</span>
      </p>
      <Button type="button" className={classNames("button")} icon="close" />
    </li>
  );
}
export default DiaryProductsListItem;
