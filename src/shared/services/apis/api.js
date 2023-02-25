import axios from "axios";
import { API_URL } from "@env";

export const instanceClear = axios.create({
  baseURL: API_URL,
});
