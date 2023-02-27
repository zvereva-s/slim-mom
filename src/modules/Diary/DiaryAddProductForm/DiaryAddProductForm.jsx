import PropTypes from "prop-types";
import { useMediaPredicate } from "react-media-hook";
import classNames from "classnames";

import useForm from "./../../../shared/hooks/useForm";
import useTheme from "../../../shared/hooks/useTheme";
import useTranslate from "../../../shared/hooks/useTranslate";

import FormField from "../../../shared/components/FormField";
import Button from "../../../shared/components/Button";
import Dropdown from "../../../shared/components/Dropdown/Dropdown";

import s from "./diaryAddProductForm.module.scss";
const initialState = { name: "", weight: "" };

function DiaryAddProductForm({ dropdownList, onSubmit }) {
  const { theme } = useTheme();
  const { t } = useTranslate();

  const less768 = useMediaPredicate("(max-width: 767px)");
  const styleBtn = less768
    ? classNames(
        "focus",
        "button",
        "text",
        `focus-${theme}`,
        `button-${theme}`,
        `text-${theme}`
      )
    : classNames(
        "plus",
        "focus",
        "button",
        `focus-${theme}`,
        `button-${theme}`,
        `plus-${theme}`
      );

  const textBtn = less768 ? "Add product" : "";

  const { state, handleSubmit, handleChange } = useForm({
    onSubmit,
    initialState,
  });

  return (
    <div className={classNames(s["form-wrapper"], s[`form-wrapper-${theme}`])}>
      <form
        className={classNames(s.form, s[`form-${theme}`])}
        onSubmit={handleSubmit}
      >
        <Dropdown
          list={dropdownList}
          listName="food"
          id="product"
          handleChange={handleChange}
          value={state.name}
        />
        <FormField
          className={classNames(s["input-gram"], s[`input-gram-${theme}`])}
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

DiaryAddProductForm.defaultProps = {
  dropdownList: [],
  onSubmit: () => {},
};
DiaryAddProductForm.propTypes = {
  dropdownList: PropTypes.array,
  onSubmit: PropTypes.func,
};
