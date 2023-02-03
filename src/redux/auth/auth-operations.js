import { createAsyncThunk } from "@reduxjs/toolkit";

import { createOperation } from "../../shared/services/utils/utils";
import {
  signin,
  signup,
  logout,
  getCurrent,
} from "../../shared/services/apis/auth";
import { patchDailyRateByUserId } from "../../shared/services/apis/daily-rate";

export const signupRequest = createOperation("auth/signup", signup);
export const signinRequest = createOperation("auth/signin", signin);
export const logoutRequest = createOperation("auth/logout", logout);
export const authUserHealthyData = createOperation(
  "auth/userHealthyData",
  patchDailyRateByUserId
);

export const getCurrentRequest = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const response = await getCurrent(auth.token);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);
