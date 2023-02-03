import s from "./rightSideListSummary.module.scss";

const date = "2022/09/29";
function RightSideListSummary() {
  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Summary for {date}</h3>
      <ul className={s.list}>
        <li className={s.item}>
          <p className={s["item-title"]}>Left</p>
          <p className={s.kcal}>000 kcal</p>
        </li>
        <li className={s.item}>
          <p className={s["item-title"]}>Consumed</p>
          <p className={s.kcal}>000 kcal</p>
        </li>
        <li className={s.item}>
          <p className={s["item-title"]}>Daily rate</p>
          <p className={s.kcal}>000 kcal</p>
        </li>
        <li className={s.item}>
          <p className={s["item-title"]}>n% of normal</p>
          <p className={s.kcal}>000 kcal</p>
        </li>
      </ul>
    </div>
  );
}
export default RightSideListSummary;
