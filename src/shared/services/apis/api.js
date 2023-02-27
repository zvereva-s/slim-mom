import axios from "axios";

export const instanceClear = axios.create({
  baseURL: "https://slim-mom-backend.onrender.com/api",
});
