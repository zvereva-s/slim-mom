import { instanceClear } from "./api";

export async function getFoodList() {
  const { data } = await instanceClear.get("/diary/food-list");
  return data;
}

export async function getProductList() {
  const { data } = await instanceClear.get("/diary");
  return data;
}

export async function addProduct(obj) {
  const { data } = await instanceClear.post("/diary/add", obj);
  return data;
}

export async function deleteProduct(id) {
  const { data } = await instanceClear.delete(`/diary/delete/${id}`);
  return data;
}
