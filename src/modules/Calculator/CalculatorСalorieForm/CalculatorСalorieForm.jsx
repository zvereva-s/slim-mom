import useForm from "../../../shared/hooks/useForm";
import useTranslate from "../../../shared/hooks/useTranslate";

import classNames from "classnames";

import RadioFields from "./RadioFields";
import TextFields from "./TextFields";

import Button from "../../../shared/components/Button";

import { initialState } from "./initialState";

import s from "./calculatorCalorieFrom.module.scss";

function CalculatorСalorieForm({ onSubmit }) {
  const { t } = useTranslate();
  const { state, handleChange, handleSubmit, handleAdvice, advice } = useForm({
    onSubmit,
    initialState,
  });

  return (
    <div className={s.box}>
      <form className={s.form} onSubmit={handleSubmit}>
        <TextFields handleChange={handleChange} state={state} />
        <div className={s["wrapper__bloodtype"]}>
          <label className={s.bloodType}>{t.bloodType}</label>
          <div className={s.wrapper}>
            <RadioFields handleChange={handleChange} type="blood" />
          </div>
        </div>
        <div className={s["wrapper__gender"]}>
          <label className={s.gender}>{t.gender}</label>
          <div className={s.wrapper}>
            <RadioFields handleChange={handleChange} type="gender" />
          </div>
        </div>
        <div className={s["wrapper__activity"]}>
          <label className={s.activity}>{t.physicalActivity}</label>
          <div className={s["wrapper_activity--fields"]}>
            <RadioFields
              handleChange={handleChange}
              type="physicalActivity"
              handleAdvice={handleAdvice}
              advice={advice}
            />
          </div>
        </div>
        <div className={s["wrapper__btn"]}>
          <Button
            className={classNames("button", "text", "focus")}
            type="submit"
            text={t.calculatorBtn}
          />
        </div>
      </form>
    </div>
  );
}
export default CalculatorСalorieForm;
