import { instanceClear } from "./api";

export async function getSummaryOfDay(date) {
  const { data } = await instanceClear.get(`/summary/${date}`);
  return data;
}
