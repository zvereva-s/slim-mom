import { useMediaPredicate } from "react-media-hook";
import useAuthState from "../../hooks/useAuthState";
import s from "./main.module.scss";

function Main({ children }) {
  const { isLogin } = useAuthState();

  const biggerThan1280 = useMediaPredicate("(min-width: 1280px)");
  const style = isLogin && biggerThan1280 ? s["main-flex"] : "";
  return <main className={style}>{children}</main>;
}
export default Main;
