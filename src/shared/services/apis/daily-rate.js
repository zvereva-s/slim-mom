import { instanceClear } from "./api";

export async function postDailyRate(obj) {
  const { data } = await instanceClear.post("daily/daily-rate", obj);
  return data;
}
export async function patchDailyRateByUserId({ userID, obj }) {
  const { data } = await instanceClear.patch(`daily/daily-rate/${userID}`, obj);
  return data;
}
