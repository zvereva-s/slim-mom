import PropTypes from "prop-types";
import classNames from "classnames";

import { useDispatch } from "react-redux";
import { deleteProductRequest } from "../../../redux/diary/diary-operations";

import useTheme from "../../../shared/hooks/useTheme";

import DiaryProductsListItem from "./DiaryProductsListItem/DiaryProductsListItem";

import s from "./diaryProductsList.module.scss";

// виводить по условию на последнем элементе див с тенью /

function DiaryProductsList({ products, t }) {
  const dispatch = useDispatch();
  const { theme } = useTheme();

  function deleteProduct(id) {
    dispatch(deleteProductRequest(id));
  }

  const styleForWrapper = products.length < 5 ? "withoutScroll" : "";
  return (
    <>
      <div
        className={classNames(
          s.wrapper,
          s[`wrapper-${theme}`],
          s[`wrapper-${styleForWrapper}`]
        )}
      >
        <ul className={classNames(s.list, s[`list-${theme}`])}>
          {products.map((product) => (
            <DiaryProductsListItem
              key={product._id}
              name={product.name}
              weight={product.weight}
              sumCaloriesOfProduct={Math.round(product.sumCaloriesOfProduct)}
              onClick={() => deleteProduct(product._id)}
              t={t}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
export default DiaryProductsList;

DiaryProductsList.defaultProps = {
  products: [],
  t: () => {},
};
DiaryProductsList.propTypes = {
  products: PropTypes.array,
  t: PropTypes.func,
};
