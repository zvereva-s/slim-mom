import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import useAuthState from "../../shared/hooks/useAuthState";
import useTranslate from "../../shared/hooks/useTranslate";

import { summaryOfDayRequest } from "../../redux/healthyData/healthyData-operations";
import {
  healthyDataObj,
  summaryObj,
} from "../../redux/healthyData/healthyData-selectors";
import { diaryDate } from "../../redux/diary/diary-selector";

import {
  converToDate,
  notify,
  getErrorMessage,
} from "../../shared/services/utils/utils";

import RightSideListSummary from "./RightSideListSummary";
import NotRecommendedProductList from "../../shared/components/NotRecommendedProductList";
import Loader from "../../shared/components/Loader";

import s from "./rightSideBar.module.scss";

function RightSideBar() {
  const { lang, t } = useTranslate();
  const dispatch = useDispatch();

  const dateValue = useSelector(diaryDate);
  const { year, month, day } = converToDate(dateValue);

  const date = `${year}/${month}/${day}`;

  const { token } = useAuthState();

  const { healthyData, error, loading } = useSelector(healthyDataObj);
  const { notAllowedProducts, dailyRate } = healthyData;

  const { left, consumed, procentOfDayNorm } = useSelector(summaryObj);

  useEffect(() => {
    if (token) {
      dispatch(summaryOfDayRequest(`${day}.${month}.${year}`));
    }
  }, [token]);

  return (
    <div className={s.wrapper}>
      {loading && <Loader />}
      {error && notify(getErrorMessage(error), "error")}
      {!loading && (
        <>
          <RightSideListSummary
            dailyRate={dailyRate}
            date={date}
            left={left}
            consumed={consumed}
            procentOfDayNorm={procentOfDayNorm}
            t={t}
          />
          <NotRecommendedProductList
            className={s.notRecommend}
            list={notAllowedProducts?.[lang]}
          />
        </>
      )}
    </div>
  );
}
export default RightSideBar;
