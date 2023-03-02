import { useState, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import useAuthState from "../../shared/hooks/useAuthState";
import useTranslate from "../../shared/hooks/useTranslate";

import { healthyDataObj } from "../../redux/healthyData/healthyData-selectors";
import { dailyRateUserRequest } from "../../redux/healthyData/healthyData-operations";

import { postDailyRate } from "../../shared/services/apis/daily-rate";

import { notify, getErrorMessage } from "../../shared/services/utils/utils";

import CalculatorСalorieForm from "./CalculatorСalorieForm/CalculatorСalorieForm";
import DailyCaloriesInfo from "../DailyCaloriesInfo";
import Loader from "../../shared/components/Loader";

function Calculator() {
  const { t, lang } = useTranslate();

  let notification = null;

  const { isLogin, user, token } = useAuthState();
  const { healthyData } = useSelector(healthyDataObj);
  const { dailyRate, notAllowedProducts } = healthyData;

  const [state, setState] = useState({
    dailyRate: isLogin ? dailyRate : "",
    notAllowedProducts: isLogin ? notAllowedProducts[lang] : [],
    modal: false,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    if (isLogin) {
      setState({
        ...state,
        dailyRate,
        notAllowedProducts: notAllowedProducts[lang],
      });
    }
  }, [healthyData]);

  async function onSubmit(data) {
    setLoading(true);
    setError(false);
    try {
      if (isLogin) {
        dispatch(dailyRateUserRequest({ userID: user.id, obj: data }));
        setState({ ...state, modal: true });
      } else {
        const { dailyRate, notAllowedProducts } = await postDailyRate(data);
        setState({
          dailyRate,
          notAllowedProducts: notAllowedProducts[lang],
          modal: true,
        });
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  function closeModal() {
    setState({
      modal: false,
    });
  }
  function handleClick() {
    return isLogin ? navigate("/diary") : navigate("/signup");
  }

  if ((isLogin && !token) || (dailyRate === "0" && token && isLogin)) {
    notification = notify(t.infoToocmpleteCalculator, "info");
  }

  return (
    <>
      {loading && <Loader />}
      <CalculatorСalorieForm onSubmit={onSubmit} />
      {error && notify(getErrorMessage(error), "error")}
      {notification}

      {state.modal && (
        <DailyCaloriesInfo
          closeModal={closeModal}
          dailyRate={state.dailyRate}
          handleClick={handleClick}
          list={state.notAllowedProducts}
          loading={loading}
        />
      )}
    </>
  );
}
export default Calculator;
