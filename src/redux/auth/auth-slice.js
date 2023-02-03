import { createSlice } from "@reduxjs/toolkit";
import {
  signupRequest,
  signinRequest,
  logoutRequest,
  getCurrentRequest,
  authUserHealthyData,
} from "../auth/auth-operations";

import { pending, rejected } from "../../shared/services/utils/utils";

const initialState = {
  user: {},
  token: "",
  isLogin: false,

  loading: false,
  error: null,
};

const fulfilled = (store, { payload }) => {
  store.loading = false;
  store.error = null;
  store.user = payload.user;
  store.token = payload.token;
  store.isLogin = true;
  store.verify = payload.verify;
};

const isRejectedAction = (action) => {
  return action.type.endsWith("rejected");
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addGoogleAuth(store, { payload }) {
      store.loading = false;
      store.error = null;
      store.user = {
        id: payload._id,
        email: payload.email,
        name: payload.name,
      };
      store.token = payload.token;
      store.isLogin = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupRequest.pending, pending)
      .addCase(signupRequest.fulfilled, fulfilled)

      .addCase(signinRequest.pending, pending)
      .addCase(signinRequest.fulfilled, fulfilled)

      .addCase(logoutRequest.pending, pending)
      .addCase(logoutRequest.fulfilled, () => ({ ...initialState }))

      .addCase(getCurrentRequest.pending, pending)
      .addCase(getCurrentRequest.fulfilled, fulfilled)

      .addCase(authUserHealthyData.pending, pending)
      .addCase(authUserHealthyData.fulfilled, fulfilled)

      .addMatcher(isRejectedAction, rejected);
  },
});
export default authSlice.reducer;

/*

extraReducers: {
    [signupRequest.pending]: pending,
    [signupRequest.rejected]: rejected,
    [signupRequest.fulfilled]: fulfilled,

    [signinRequest.pending]: pending,
    [signinRequest.rejected]: rejected,
    [signinRequest.fulfilled]: fulfilled,

    [logoutRequest.pending]: pending,
    [logoutRequest.rejected]: rejected,
    [logoutRequest.fulfilled]: () => ({ ...initialState }),

    [getCurrentRequest.pending]: pending,
    [getCurrentRequest.rejected]: rejected,
    [getCurrentRequest.fulfilled]: (store, { payload }) => ({
      ...store,
      loading: false,
      error: null,
      user: { ...payload },
      isLogin: true,
    }),
  },

  */
