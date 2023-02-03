import DiaryProductsListItem from "./DiaryProductsListItem/DiaryProductsListItem";

import s from "./diaryProductsList.module.scss";

// виводить по условию на последнем элементе див с тенью /

function DiaryProductsList() {
  return (
    <>
      <div className={s.wrapper}>
        <ul className={s.list}>
          <DiaryProductsListItem />
          <DiaryProductsListItem />
          <DiaryProductsListItem />
          <DiaryProductsListItem />
          <DiaryProductsListItem />
          <DiaryProductsListItem />
          <DiaryProductsListItem />
          <DiaryProductsListItem />
        </ul>
      </div>
      <div className={s.shadow}></div>
    </>
  );
}
export default DiaryProductsList;
