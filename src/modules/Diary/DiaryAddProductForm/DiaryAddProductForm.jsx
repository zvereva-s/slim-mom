import { useMediaPredicate } from "react-media-hook";
import classNames from "classnames";

import FormField from "../../../shared/components/FormField";
import Button from "../../../shared/components/Button";

import s from "./diaryAddProductForm.module.scss";

function DiaryAddProductForm() {
  const less768 = useMediaPredicate("(max-width: 767px)");
  const styleBtn = less768
    ? classNames("focus", "button", "text")
    : classNames("plus", "focus", "button");

  const textBtn = less768 && "Add product";
  return (
    <div className={s["form-wrapper"]}>
      <form className={s.form}>
        <FormField
          type="text"
          name="product"
          placeholder="Type product name"
          pattern="[A-Za-zА-Яа-яЁё]"
        />
        <FormField
          className={s["input-gram"]}
          type="number"
          name="grams"
          placeholder="Grams"
          min="50"
        />
        <div className={s.wrapper}>
          <Button
            type="button"
            text={textBtn}
            className={styleBtn}
            icon={!less768 && "plus"}
          />
        </div>
      </form>
    </div>
  );
}
export default DiaryAddProductForm;
