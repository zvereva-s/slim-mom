import { useMediaPredicate } from "react-media-hook";
import useAuthState from "../../hooks/useAuthState";
import s from "./main.module.scss";

function Main({ children }) {
  const { isLogin } = useAuthState();

  const biggerThan1280 = useMediaPredicate("(min-width: 1279px)");
  const style = isLogin && biggerThan1280 ? s["wrapper-flex"] : "";
  return (
    <main>
      <section className={s.container}>
        <div className={style}>{children}</div>
      </section>
    </main>
  );
}
export default Main;
