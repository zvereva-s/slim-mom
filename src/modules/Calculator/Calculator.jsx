import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import useAuthState from "../../shared/hooks/useAuthState";

import { authUserHealthyData } from '../../redux/auth/auth-operations';

import { postDailyRate } from "../../shared/services/apis/daily-rate";

import CalculatorСalorieForm from "./CalculatorСalorieForm/CalculatorСalorieForm";
import DailyCaloriesInfo from "../DailyCaloriesInfo";

function Calculator() {
  //! lang
  const lang = 'en';
  //!
  const [state, setState] = useState({
    dailyRate: "",
    notAllowedProducts: [],
    modal: false,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { isLogin, user } = useAuthState();

  

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function onSubmit(data) {
    if (!isLogin) {
      setLoading(true);
      setError(false);
      try {
        const { dailyRate, notAllowedProducts } = await postDailyRate(data);
        setState({
          dailyRate,
          notAllowedProducts: notAllowedProducts[lang],
          modal: true,
        });
      }
      catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
     else {
        dispatch(authUserHealthyData({
        obj:data,
        userID: user.id,
      }));
        setState({
        dailyRate: user.healthyData.dailyRate,
        notAllowedProducts: user.healthyData.notAllowedProducts[lang],
        modal: true,
        })
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


  return (
    <>
      <CalculatorСalorieForm onSubmit={onSubmit} />
      {loading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {state.modal && (
        <DailyCaloriesInfo
          closeModal={closeModal}
          dailyRate={state.dailyRate}
          handleClick={handleClick}
          list={state.notAllowedProducts}
        />
      )}
    </>
  );
}
export default Calculator;
