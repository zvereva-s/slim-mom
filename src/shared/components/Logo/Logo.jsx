import { HandySvg } from "handy-svg";
import classNames from "classnames";

import useAuthState from "../../hooks/useAuthState";
import useTheme from "../../hooks/useTheme";

import icon from "../../../assets/images/Logo/Logo.svg";
import text from "../../../assets/images/Logo/Text.svg";

import s from "./logo.module.scss";

function Logo({ isModalOpen }) {
  const { theme } = useTheme();
  const { isLogin } = useAuthState();

  const style = isLogin
    ? s[`text-${theme}-auth`]
    : classNames(s["text"], s[`text-${theme}`]);

  return (
    <div className={classNames(s.wrapper, s[`wrapper-${theme}`])}>
      <HandySvg className={classNames(s.icon, s[`icon-${theme}`])} src={icon} />
      <HandySvg className={style} src={text} />
      {isModalOpen && <HandySvg className={s["text-logo-modal"]} src={text} />}
    </div>
  );
}
export default Logo;
