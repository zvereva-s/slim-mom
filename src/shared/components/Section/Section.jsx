import classNames from "classnames";
import { useMediaPredicate } from "react-media-hook";
import s from "./section.module.scss";

const isAuth = false;

function Section({ children, className }) {
  const biggerThan1280 = useMediaPredicate("(min-width: 1280px)");
  const style =
    isAuth && biggerThan1280
      ? classNames(s[`${className}`], s["section-auth"])
      : classNames(s[`${className}`], s.section);

  return <section className={style}>{children}</section>;
}
export default Section;
