import { createAsyncThunk } from "@reduxjs/toolkit";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { en } from "../../../assets/languages/en";
import { ua } from "../../../assets/languages/ua";
import { ru } from "../../../assets/languages/ru";

export const createOperation = (name, request, condition) => {
  return createAsyncThunk(
    name,
    async (data, { rejectWithValue }) => {
      try {
        const response = await request(data);
        return response;
      } catch (error) {
        return rejectWithValue(error);
      }
    },
    { condition }
  );
};

export const pending = (store) => ({ ...store, loading: true, error: null });

export const rejected = (store, { payload }) => ({
  ...store,
  loading: false,
  error: payload,
});

export const getErrorMessage = (error) => {
  let text = null;
  let errorMessage = null;

  if (error?.message) {
    errorMessage = error.message;
  } else {
    errorMessage = error;
  }

  switch (errorMessage.split(" ")[5]) {
    case "401":
      text = {
        en: "Not Authorized",
        ru: "Отсутствует авторизация",
        ua: "Відсутня авторизація",
      };
      break;
    case "409":
      text = {
        en: "Email in use",
        ru: "Email используется",
        ua: "Email використовується",
      };
      break;
    default:
      text = "Something goes wrong";
  }
  return text;
};

export const notify = (message, type) => {
  switch (type) {
    case "error":
      toast.error(message);
      break;
    case "info":
      toast.info(message);
      break;
    case "success":
      toast.success(message);
      break;
    default:
      toast.info(message);
  }

  return <ToastContainer />;
};

export const adviceActivity = ({ value }, lang) => {
  let result = {
    message: "",
    value: "",
  };

  let text = null;
  switch (lang) {
    case "en": {
      text = en;
      break;
    }
    case "ru": {
      text = ru;
      break;
    }
    case "ua": {
      text = ua;
      break;
    }
  }

  switch (value) {
    case "1.2":
      result = {
        message: text.minimalAdv,
        value: "1.2",
      };
      break;
    case "1.375":
      result = {
        message: text.lowAdv,
        value: "1.375",
      };
      break;
    case "1.55":
      result = {
        message: text.moderateAdv,
        value: "1.55",
      };
      break;
    case "1.7":
      result = {
        message: text.highAdv,
        value: "1.7",
      };
      break;
    case "1.9":
      result = {
        message: text.extremeAdv,
        value: "1.9",
      };
      break;
    default:
      result = {};
  }

  return result;
};

export const validateField = (type, value, name) => {
  let res = {};

  switch (type) {
    case "text":
      if (value.length < 2) {
        res = {
          message: "Min length must be more 2",
          type: "text",
          name: "name",
        };
      }
      break;
    case "email":
      const validEmail = value.match(
        /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
      );
      if (!validEmail) {
        res = {
          message: "Email doesn't match of example like mail@mail.com",
          type: "email",
          name: "email",
        };
      }
      break;
    case "password":
      // const validPassword = value.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/);
      // if (!validPassword) {
      //   setError({
      //     message:
      //       "Password have to include special symbols and to be min 6 and max 16",
      //     type: "password",
      //   });
      // }
      break;
    case "number":
      // eslint-disable-next-line default-case
      switch (name) {
        case "height":
          //
          console.log({ value });

          //
          if (value.Number() < 120) {
            res = {
              message: "Height must be more 120 cm",
              type: "text",
              name: "height",
            };
          }
          break;
        case "weight":
          if (value.Number() < 30) {
            res = {
              message: "Weight must be more 30 kg",
              type: "text",
              name: "weight",
            };
          }
          break;
        case "age":
          if (value.Number() < 18) {
            res = {
              message: "Age must be more 18 y",
              type: "text",
              name: "age",
            };
          }
          break;
      }
    // eslint-disable-next-line no-fallthrough
    default:
      res = {
        message: "",
        type: "",
        name: "",
      };
  }
  return res;
};

export const converToDate = (dateValue) => {
  const year = dateValue.getFullYear();
  const month =
    String(dateValue.getMonth() + 1).length === 1
      ? 0 + String(dateValue.getMonth() + 1)
      : String(dateValue.getMonth() + 1);

  const day =
    String(dateValue.getDate()).length === 1
      ? 0 + String(dateValue.getDate())
      : String(dateValue.getDate());

  return { year, month, day };
};

export function makeUniqueRandomNotRecommendedProductList(list) {
  let resultList = [];
  let counter = 0;

  const randomArr = [];
  const uniqueArr = [];

  // choosing random products
  (function () {
    if (list) {
      while (counter < 5) {
        randomArr.push(list[Math.floor(Math.random() * 48)]);
        counter += 1;
      }
    }
  })();

  (function () {
    for (let item of randomArr) {
      if (!uniqueArr.includes(item)) {
        uniqueArr.push(item);
      }
    }
  })();
  if (uniqueArr.length === 5) {
    resultList = uniqueArr;
  } else {
    resultList.push(list[Math.floor(Math.random() * 48)]);
  }

  return resultList;
}
