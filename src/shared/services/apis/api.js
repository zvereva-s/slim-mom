import axios from "axios";

export const instanceClear = axios.create({
  baseURL: "http://localhost:3003/api/",
});
