import { createSlice } from "@reduxjs/toolkit";
import {
  signupRequest,
  signinRequest,
  logoutRequest,
  getCurrentRequest,
} from "../auth/auth-operations";
import {
  dailyRateUserRequest,
  summaryOfDayRequest,
} from "../healthyData/healthyData-operations";

import { pending, rejected } from "../../shared/services/utils/utils";

const initialState = {
  healthyData: {},
  summary: {},

  loading: false,
  error: null,
};

const fulfilled = (store, { payload }) => ({
  ...store,
  loading: false,
  error: false,
  healthyData: payload.healthyData,
});

const isRejectedAction = (action) => {
  return action.type.endsWith("rejected");
};

const healthyDataSlice = createSlice({
  name: "healthyData",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signupRequest.pending, pending)
      .addCase(signupRequest.fulfilled, fulfilled)

      .addCase(signinRequest.pending, pending)
      .addCase(signinRequest.fulfilled, fulfilled)

      .addCase(getCurrentRequest.pending, pending)
      .addCase(getCurrentRequest.fulfilled, fulfilled)

      .addCase(logoutRequest.pending, pending)
      .addCase(logoutRequest.fulfilled, (store, { payload }) => ({
        ...initialState,
      }))

      .addCase(dailyRateUserRequest.pending, pending)
      .addCase(dailyRateUserRequest.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.error = null;
        store.healthyData = {
          ...store.healthyData,
          dailyRate: payload.dailyRate,
          bodyCalculating: payload.bodyCalculating,
        };
      })

      .addCase(summaryOfDayRequest.pending, pending)
      .addCase(summaryOfDayRequest.fulfilled, (store, { payload }) => ({
        ...store,
        loading: false,
        error: false,
        summary: payload,
        healthyData: { ...store.healthyData, dailyRate: payload.dailyRate },
      }))

      .addMatcher(isRejectedAction, rejected);
  },
});
export default healthyDataSlice.reducer;
