import { useSelector, useDispatch } from "react-redux";

import { summaryOfDayRequest } from "../../redux/healthyData/healthyData-operations";

import {
  healthyDataObj,
  summaryObj,
} from "../../redux/healthyData/healthyData-selectors";
import { diaryDate } from "../../redux/diary/diary-selector";

import { converToDate } from "../../shared/services/utils/utils";

import RightSideListSummary from "./RightSideListSummary";
import NotRecommendedProductList from "../../shared/components/NotRecommendedProductList";

import useAuthState from "../../shared/hooks/useAuthState";
import useTranslate from "../../shared/hooks/useTranslate";

import s from "./rightSideBar.module.scss";
import { useEffect } from "react";

function RightSideBar() {
  const { lang, t } = useTranslate();
  const dispatch = useDispatch();

  const dateValue = useSelector(diaryDate);
  const { year, month, day } = converToDate(dateValue);

  const date = `${year}/${month}/${day}`;

  const { token } = useAuthState();

  const { healthyData } = useSelector(healthyDataObj);
  const { notAllowedProducts, dailyRate } = healthyData;

  const { left, consumed, procentOfDayNorm } = useSelector(summaryObj);

  useEffect(() => {
    if (token) {
      dispatch(summaryOfDayRequest(`${day}.${month}.${year}`));
    }
  }, [token]);

  return (
    <div className={s.wrapper}>
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
    </div>
  );
}
export default RightSideBar;
