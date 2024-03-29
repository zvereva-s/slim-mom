import PropTypes from "prop-types";

import useTheme from "../../../shared/hooks/useTheme";
import useForm from "../../../shared/hooks/useForm";
import useTranslate from "../../../shared/hooks/useTranslate";

import classNames from "classnames";

import RadioFields from "./RadioFields";
import TextFields from "./TextFields";

import Button from "../../../shared/components/Button";

import { initialState } from "./initialState";

import s from "./calculatorCalorieFrom.module.scss";

function CalculatorСalorieForm({ onSubmit }) {
  const { theme } = useTheme();
  const { t, lang } = useTranslate();
  const { state, handleChange, handleSubmit, handleAdvice, advice } = useForm({
    onSubmit,
    initialState,
  });

  return (
    <form
      className={classNames(s.form, s[`form-${theme}`])}
      onSubmit={handleSubmit}
    >
      <div className={s.textFields}>
        <TextFields handleChange={handleChange} state={state} />
      </div>

      <div
        className={classNames(
          s["wrapper__bloodtype"],
          s[`wrapper__bloodtype-${theme}`]
        )}
      >
        <label className={classNames(s.bloodType, s[`bloodType-${theme}`])}>
          {t.bloodType}
        </label>
        <div className={classNames(s.wrapper, s[`wrapper-${theme}`])}>
          <RadioFields handleChange={handleChange} type="blood" />
        </div>
      </div>
      <div
        className={classNames(
          s["wrapper__gender"],
          s[`wrapper__gender-${theme}`]
        )}
      >
        <label className={classNames(s.gender, s[`gender-${theme}`])}>
          {t.gender}
        </label>
        <div className={classNames(s.wrapper, s[`wrapper-${theme}`])}>
          <RadioFields handleChange={handleChange} type="gender" />
        </div>
      </div>
      <div
        className={classNames(
          s["wrapper__activity"],
          s[`wrapper__activity-${theme}`]
        )}
      >
        <label className={classNames(s.activity, s[`activity-${theme}`])}>
          {t.physicalActivity}
        </label>
        <div
          className={classNames(
            s["wrapper_activity--fields"],
            s[`wrapper_activity--fields-${theme}`]
          )}
        >
          <RadioFields
            handleChange={handleChange}
            type="physicalActivity"
            handleAdvice={(e) => handleAdvice(e, lang)}
            advice={advice}
          />
        </div>
      </div>
      <div
        className={classNames(s["wrapper__btn"], s[`wrapper__btn-${theme}`])}
      >
        <Button
          className={classNames(
            "button",
            "text",
            "focus",
            `button-${theme}`,
            `text-${theme}`,
            `focus-${theme}`
          )}
          type="submit"
          text={t.calculatorBtn}
        />
      </div>
    </form>
  );
}
export default CalculatorСalorieForm;

CalculatorСalorieForm.defaultProps = {
  onSubmit: () => {},
};
CalculatorСalorieForm.propTypes = {
  onSubmit: PropTypes.func,
};
