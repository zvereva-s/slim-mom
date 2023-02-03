import { useMediaPredicate } from "react-media-hook";
import s from "./main.module.scss";

const isAuth = false;

function Main({ children }) {
  const biggerThan1280 = useMediaPredicate("(min-width: 1280px)");
  const style = isAuth && biggerThan1280 ? s["main-flex"] : "";
  return <main className={style}>{children}</main>;
}
export default Main;
