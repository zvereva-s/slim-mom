import { createAsyncThunk } from "@reduxjs/toolkit";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  if (error.data) {
    const {
      response: {
        data: { message },
      },
    } = error;
    return message;
  }
  return error;
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

export const adviceActivity = (field) => {
  const { value } = field;

  let result = {
    message: "",
    value: "",
  };
  switch (value) {
    case "1.2":
      result = {
        message: "minimal (sedentary work, lack of physical activity)",
        value: "1.2",
      };
      break;
    case "1.375":
      result = {
        message: "low (training for at least 20 minutes 1-3 times a week)",
        value: "1.375",
      };
      break;
    case "1.55":
      result = {
        message: "moderate (training 30-60 minutes 3-4 times a week)",
        value: "1.55",
      };
      break;
    case "1.7":
      result = {
        message:
          "high (training 30-60 min 5-7 times a week; hard physical work)",
        value: "1.7",
      };
      break;
    case "1.9":
      result = {
        message:
          "extreme (several intense workouts a day 6-7 times a week; very laborious work)",
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
