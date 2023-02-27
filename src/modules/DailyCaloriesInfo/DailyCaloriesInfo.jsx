import PropTypes from "prop-types";
import classNames from "classnames";

import useTranslate from "../../shared/hooks/useTranslate";
import useTheme from "../../shared/hooks/useTheme";

import Button from "../../shared/components/Button";
import ModalFormContent from "../../shared/components/ModalFormContent";
import NotRecommendedProductList from "../../shared/components/NotRecommendedProductList";
import Title from "../../shared/components/Title";

import s from "./dailyCaloriesInfo.module.scss";

function DailyCaloriesInfo({ closeModal, dailyRate, handleClick, list }) {
  const { t } = useTranslate();
  const { theme } = useTheme();

  return (
    <ModalFormContent closeModal={closeModal}>
      <div className={classNames(s.wrapper, s[`wrapper-${theme}`])}>
        <div
          className={classNames(s["wrapper-kcal"], s[`wrapper-kcal-${theme}`])}
        >
          <Title
            text={t.recomendedDaily}
            className={classNames(s.title, s[`title-${theme}`])}
          />
          <p className={classNames(s.calories, s[`calories-${theme}`])}>
            {dailyRate}{" "}
            <span className={classNames(s.kcal, s[`kcal-${theme}`])}>
              {t.kcal}
            </span>
          </p>
        </div>
        <NotRecommendedProductList
          className={classNames(s.notRecommend, s[`notRecommend-${theme}`])}
          list={list}
        />
      </div>
      <div className={classNames(s["btn-wrapper"], s[`btn-wrapper-${theme}`])}>
        <Button
          type="submit"
          text={t.calculatorBtn}
          className={classNames(
            "button",
            "text-modal",
            "focus",
            `button-${theme}`,
            `text-${theme}`,
            `focus-${theme}`
          )}
          onClick={handleClick}
        />
      </div>
    </ModalFormContent>
  );
}
export default DailyCaloriesInfo;

DailyCaloriesInfo.defaultProps = {
  dailyRate: "",
  list: [],
  handleClick: () => {},
  closeModal: () => {},
};
DailyCaloriesInfo.propTypes = {
  dailyRate: PropTypes.string,
  list: PropTypes.array.isRequired,
  handleClick: PropTypes.func,
  closeModal: PropTypes.func,
};
