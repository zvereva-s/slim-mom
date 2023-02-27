import { createOperation } from "../../shared/services/utils/utils";
import { patchDailyRateByUserId } from "../../shared/services/apis/daily-rate";
import { getSummaryOfDay } from "../../shared/services/apis/summary";

export const dailyRateUserRequest = createOperation(
  "healthyDate/dailyRateUser",
  patchDailyRateByUserId
);
export const summaryOfDayRequest = createOperation(
  "healthyDate/summaryOfDay",
  getSummaryOfDay
);
