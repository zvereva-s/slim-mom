import { useMediaPredicate } from "react-media-hook";
import classNames from "classnames";

import useForm from "./../../../shared/hooks/useForm";

import FormField from "../../../shared/components/FormField";
import Button from "../../../shared/components/Button";
import Dropdown from "../../../shared/components/Dropdown/Dropdown";

import s from "./diaryAddProductForm.module.scss";
const initialState = { name: "", weight: "" };

function DiaryAddProductForm({ dropdownList, onSubmit, t }) {
  const less768 = useMediaPredicate("(max-width: 767px)");
  const styleBtn = less768
    ? classNames("focus", "button", "text")
    : classNames("plus", "focus", "button");

  const textBtn = less768 && "Add product";

  const { state, handleSubmit, handleChange } = useForm({
    onSubmit,
    initialState,
  });

  return (
    <div className={s["form-wrapper"]}>
      <form className={s.form} onSubmit={handleSubmit}>
        <Dropdown
          list={dropdownList}
          listName="food"
          id="product"
          handleChange={handleChange}
          value={state.name}
        />
        <FormField
          className={s["input-gram"]}
          type="number"
          name="weight"
          placeholder={t.inputWeight}
          min="5"
          handleChange={handleChange}
          value={state.weight}
        />
        <div className={s.wrapper}>
          <Button
            type="submit"
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
