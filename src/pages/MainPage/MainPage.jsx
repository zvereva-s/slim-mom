import useAuthState from "../../shared/hooks/useAuthState";

import CalculatorPage from "../../pages/CalculatorPage";
import DiaryPage from "../DiaryPage";

function MainPage() {
  const { isLogin, token } = useAuthState();
  return <>{isLogin && token ? <DiaryPage /> : <CalculatorPage />}</>;
}
export default MainPage;
