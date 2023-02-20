import { useDispatch } from "react-redux";
import { deleteProductRequest } from "../../../redux/diary/diary-operations";

import DiaryProductsListItem from "./DiaryProductsListItem/DiaryProductsListItem";

import s from "./diaryProductsList.module.scss";

// виводить по условию на последнем элементе див с тенью /

function DiaryProductsList({ products, t }) {
  const dispatch = useDispatch();

  function deleteProduct(id) {
    dispatch(deleteProductRequest(id));
  }
  return (
    <>
      <div className={s.wrapper}>
        <ul className={s.list}>
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
      {/* <div className={s.shadow}></div> */}
    </>
  );
}
export default DiaryProductsList;
