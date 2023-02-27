import { createSlice } from "@reduxjs/toolkit";
import {
  addProductRequest,
  deleteProductRequest,
  getProductListRequest,
} from "./diary-operations";

import { pending, rejected } from "../../shared/services/utils/utils";

const initialState = {
  date: new Date(),
  productList: [],

  loading: false,
  error: null,
};

const fulfilled = (store, { payload }) => ({
  ...store,
  loading: false,
  error: false,
  productList: payload,
});

const isRejectedAction = (action) => {
  return action.type.endsWith("rejected");
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    addDateDiary(store, { payload }) {
      store.loading = false;
      store.error = null;
      store.date = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductListRequest.pending, pending)
      .addCase(getProductListRequest.fulfilled, fulfilled)

      .addCase(addProductRequest.pending, pending)
      .addCase(addProductRequest.fulfilled, (store, { payload }) => ({
        ...store,
        loading: false,
        error: false,
        productList: [...store.productList, { ...payload }],
      }))

      .addCase(deleteProductRequest.pending, pending)
      .addCase(deleteProductRequest.fulfilled, (store, { payload }) => ({
        ...store,
        loading: false,
        error: false,
        productList: store.productList.filter(
          (product) => product._id !== payload.id
        ),
      }))

      .addMatcher(isRejectedAction, rejected);
  },
});

export default diarySlice.reducer;
