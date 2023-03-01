import PropTypes from "prop-types";
import classNames from "classnames";

import useTranslate from "../../hooks/useTranslate";
import useTheme from "../../hooks/useTheme";

import { makeUniqueRandomNotRecommendedProductList } from "../../../shared/services/utils/utils";

import s from "./notRecommendedProductList.module.scss";

function NotRecommendedProductList({ className, list }) {
  const { theme } = useTheme();
  const { t } = useTranslate();

  const contentList = makeUniqueRandomNotRecommendedProductList(list);

  return (
    <div className={`${s} ${s.wrapper} ${className}`}>
      <h3 className={classNames(s.title, s[`title-${theme}`])}>
        {t.titleNotRecom}
      </h3>
      <ol className={classNames(s.list, s[`list-${theme}`])}>
        {contentList.map((item, idx) => (
          <li key={idx + 1} className={s.item}>
            {" "}
            {item}
          </li>
        ))}
      </ol>
    </div>
  );
}
export default NotRecommendedProductList;

NotRecommendedProductList.defaultProps = {
  className: "",
  list: [],
};
NotRecommendedProductList.propTypes = {
  className: PropTypes.string,
  list: PropTypes.array,
};
