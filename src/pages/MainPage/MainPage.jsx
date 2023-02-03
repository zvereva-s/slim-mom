import useAuthState from "../../shared/hooks/useAuthState";

import CalculatorPage from "../../pages/CalculatorPage";
import DiaryPage from "../DiaryPage";

function MainPage() {
  const { isLogin } = useAuthState();
  return <>{isLogin ? <DiaryPage /> : <CalculatorPage />}</>;
}
export default MainPage;
