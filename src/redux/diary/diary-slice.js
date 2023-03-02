import { createSlice } from "@reduxjs/toolkit";
import {
  addProductRequest,
  deleteProductRequest,
  getProductListRequest,
} from "./diary-operations";

import { rejected } from "../../shared/services/utils/utils";

const initialState = {
  date: new Date(),
  productList: [],

  loading: {
    productLoading: false,
    diaryLoading: false,
    addProductLoading: false,
    deleteProductLoading: false,
  },

  error: null,
};

const fulfilled = (store, { payload }) => ({
  ...store,
  loading: {
    productLoading: false,
    diaryLoading: false,
    addProductLoading: false,
    deleteProductLoading: false,
  },
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
      store.loading = {
        productLoading: false,
        diaryLoading: false,
        addProductLoading: false,
        deleteProductLoading: false,
      };
      store.error = null;
      store.date = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductListRequest.pending, (store, _) => ({
        ...store,
        error: null,
        loading: {
          productLoading: true,
          diaryLoading: false,
          addProductLoading: false,
          deleteProductLoading: false,
        },
      }))
      .addCase(getProductListRequest.fulfilled, fulfilled)

      .addCase(addProductRequest.pending, (store, _) => ({
        ...store,
        error: null,
        loading: {
          diaryLoading: false,
          addProductLoading: true,
          deleteProductLoading: false,
        },
      }))
      .addCase(addProductRequest.fulfilled, (store, { payload }) => ({
        ...store,
        loading: {
          diaryLoading: false,
          addProductLoading: false,
          deleteProductLoading: false,
        },
        error: false,
        productList: [...store.productList, { ...payload }],
      }))

      .addCase(deleteProductRequest.pending, (store, _) => ({
        ...store,
        error: null,
        loading: {
          diaryLoading: false,
          addProductLoading: false,
          deleteProductLoading: true,
        },
      }))
      .addCase(deleteProductRequest.fulfilled, (store, { payload }) => ({
        ...store,
        loading: {
          diaryLoading: false,
          addProductLoading: false,
          deleteProductLoading: false,
        },
        error: false,
        productList: store.productList.filter(
          (product) => product._id !== payload.id
        ),
      }))

      .addMatcher(isRejectedAction, rejected);
  },
});

export default diarySlice.reducer;
