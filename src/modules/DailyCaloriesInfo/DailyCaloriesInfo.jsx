import classNames from "classnames";

import useTranslate from "../../shared/hooks/useTranslate";

import Button from "../../shared/components/Button";
import ModalFormContent from "../../shared/components/ModalFormContent";
import NotRecommendedProductList from "../../shared/components/NotRecommendedProductList";
import Title from "../../shared/components/Title";

import s from "./dailyCaloriesInfo.module.scss";

function DailyCaloriesInfo({ closeModal, dailyRate, handleClick, list }) {
  const { t } = useTranslate();
  return (
    <ModalFormContent closeModal={closeModal}>
      <div className={s.wrapper}>
        <div className={s["wrapper-kcal"]}>
          <Title text={t.recomendedDaily} className={s.title} />
          <p className={s.calories}>
            {dailyRate} <span className={s.kcal}>{t.kcal}</span>
          </p>
        </div>
        <NotRecommendedProductList className={s.notRecommend} list={list} />
      </div>
      <div className={s["btn-wrapper"]}>
        <Button
          type="submit"
          text={t.calculatorBtn}
          className={classNames("button", "text-modal", "focus")}
          onClick={handleClick}
        />
      </div>
    </ModalFormContent>
  );
}
export default DailyCaloriesInfo;
