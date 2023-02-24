import PropTypes from "prop-types";
import classNames from "classnames";
import { useMediaPredicate } from "react-media-hook";

import useAuthState from "../../hooks/useAuthState";
import useTheme from "../../hooks/useTheme";

import s from "./section.module.scss";

function Section({ children, className }) {
  const { isLogin } = useAuthState();
  const { theme } = useTheme();

  const biggerThan1280 = useMediaPredicate("(min-width: 1279px)");
  const style =
    isLogin && biggerThan1280
      ? classNames(
          s[`${className}`],
          s[`${className}-${theme}`],
          s["section-auth"]
        )
      : classNames(s[`${className}`], s[`${className}-${theme}`], s.section);

  return <section className={style}>{children}</section>;
}
export default Section;

Section.defaultProps = {
  className: "",
};
Section.propTypes = {
  className: PropTypes.string,
};
