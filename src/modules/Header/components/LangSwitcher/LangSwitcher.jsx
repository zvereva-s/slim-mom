import s from "./langSwitcher.module.scss";

function LangSwitcher() {
  return (
    <div className={s["lang-box"]}>
      <p className={s.lang}>EN</p>
      <p className={s.lang}>|</p>
      <p className={s.lang}>UA</p>
    </div>
  );
}
export default LangSwitcher;
