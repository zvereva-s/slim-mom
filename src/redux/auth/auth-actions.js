import { createAction } from "@reduxjs/toolkit";

export const addGoogleAuth = createAction("auth/addGoogleAuth", (user) => {
  return {
    payload: user,
  };
});
