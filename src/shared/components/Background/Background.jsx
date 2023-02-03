import { useMediaPredicate } from "react-media-hook";
import s from "./background.module.scss";

const isAuth = false;

function Background({ children }) {
  const biggerThan768 = useMediaPredicate("(min-width: 768px)");
  const style = isAuth && biggerThan768 ? s["background-auth"] : s.background;
  return <div className={style}>{children}</div>;
}
export default Background;
