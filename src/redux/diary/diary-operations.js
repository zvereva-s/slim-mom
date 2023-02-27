import { createOperation } from "../../shared/services/utils/utils";
import {
  addProduct,
  deleteProduct,
  getProductList,
} from "../../shared/services/apis/diary";

export const getProductListRequest = createOperation(
  "diary/getProductList",
  getProductList
);
export const deleteProductRequest = createOperation(
  "diary/deleteProduct",
  deleteProduct
);
export const addProductRequest = createOperation(
  "diary/addProduct",
  addProduct
);
