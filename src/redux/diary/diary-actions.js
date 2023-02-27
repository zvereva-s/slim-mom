import { createAction } from "@reduxjs/toolkit";

export const addDateDiary = createAction("diary/addDateDiary", (date) => {
  return {
    payload: date,
  };
});
