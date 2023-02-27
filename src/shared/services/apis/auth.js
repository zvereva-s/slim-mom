import { instanceClear } from "./api";

const setToken = (token = "") => {
  if (token) {
    return (instanceClear.defaults.headers.authorization = `Bearer ${token}`);
  }
  instanceClear.defaults.headers.authorization = "";
};

export async function signup(data) {
  const { data: result } = await instanceClear.post("/auth/signup", data);
  setToken(result.token);
  return result;
}

export async function signin(data) {
  const { data: result } = await instanceClear.post("/auth/signin", data);
  setToken(result.token);
  return result;
}

export async function logout() {
  const { data: result } = await instanceClear.post("/auth/logout");
  setToken("");
  return result;
}

export async function getCurrent(token) {
  try {
    setToken(token);
    const { data: result } = await instanceClear.get("/auth/current");
    return result;
  } catch (error) {
    setToken("");
    throw error;
  }
}

export default instanceClear;
