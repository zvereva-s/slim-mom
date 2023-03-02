import PropTypes from "prop-types";
import classNames from "classnames";

import { useState } from "react";
import { useDispatch } from "react-redux";

import useTheme from "../../../shared/hooks/useTheme";

import { deleteProductRequest } from "../../../redux/diary/diary-operations";

import DiaryProductsListItem from "./DiaryProductsListItem/DiaryProductsListItem";
import Loader from "../../../shared/components/Loader/Loader";

import s from "./diaryProductsList.module.scss";

function DiaryProductsList({ products, t, loading }) {
  const dispatch = useDispatch();
  const { theme } = useTheme();
  const { productLoading, deleteProductLoading } = loading;

  const [choosedId, setChoosedId] = useState();

  function deleteProduct(id) {
    setChoosedId(id);
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
        {productLoading && <Loader typeClass="product" size="40" />}
        {!productLoading && (
          <ul className={classNames(s.list, s[`list-${theme}`])}>
            {products.map((product) => (
              <DiaryProductsListItem
                key={product._id}
                id={product._id}
                name={product.name}
                weight={product.weight}
                sumCaloriesOfProduct={Math.round(product.sumCaloriesOfProduct)}
                onClick={() => deleteProduct(product._id)}
                t={t}
                loading={deleteProductLoading}
                choosedId={choosedId}
              />
            ))}
          </ul>
        )}
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
