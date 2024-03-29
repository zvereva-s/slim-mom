import PropTypes from "prop-types";
import classNames from "classnames";
import { ProgressBar } from "react-loader-spinner";

import useTheme from "../../../../shared/hooks/useTheme";

import Button from "../../../../shared/components/Button";

import s from "./diaryProductsListItem.module.scss";

function DiaryProductsListItem({
  id,
  name,
  weight,
  sumCaloriesOfProduct,
  onClick,
  t,
  loading,
  choosedId,
}) {
  const { theme } = useTheme();
  const loader = (
    <ProgressBar
      height="30"
      width="30"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#FC842D"
      barColor="#FC842D"
    />
  );

  console.log({ choosedId });
  console.log({ id });

  return (
    <li className={classNames(s.item, s[`item-${theme}`])}>
      <p
        className={classNames(
          s.product,
          s.text,
          s[`product-${theme}`],
          s[`text-${theme}`]
        )}
      >
        {name}
      </p>
      <p
        className={classNames(
          s.weight,
          s.text,
          s[`weight-${theme}`],
          s[`text-${theme}`]
        )}
      >
        {weight}
        {t.g}
      </p>
      <p
        className={classNames(
          s.kcal,
          s.text,
          s[`kcal-${theme}`],
          s[`text-${theme}`]
        )}
      >
        {sumCaloriesOfProduct}{" "}
        <span className={classNames(s["kcal-text"], s[`kcal-text-${theme}`])}>
          {t.kcal}
        </span>
      </p>
      {loading && id === choosedId && loader}
      {!loading && (
        <Button
          type="button"
          className={classNames("button", `button-${theme}`)}
          icon="close"
          onClick={onClick}
        />
      )}
    </li>
  );
}
export default DiaryProductsListItem;

DiaryProductsListItem.defaultProps = {
  onClick: () => {},
  t: () => {},
};
DiaryProductsListItem.propTypes = {
  name: PropTypes.string,
  weight: PropTypes.string,
  sumCaloriesOfProduct: PropTypes.string,
  onClick: PropTypes.func,
  t: PropTypes.func,
};
