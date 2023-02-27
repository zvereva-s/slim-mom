import { createSlice } from "@reduxjs/toolkit";
import {
  signupRequest,
  signinRequest,
  logoutRequest,
  getCurrentRequest,
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
        id: payload.id,
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
      .addCase(getCurrentRequest.fulfilled, (store, { payload }) => ({
        ...store,
        loading: false,
        error: null,
      }))

      .addMatcher(isRejectedAction, rejected);
  },
});
export default authSlice.reducer;
