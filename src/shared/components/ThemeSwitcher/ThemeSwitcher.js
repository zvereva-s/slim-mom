import classNames from "classnames";
import { HandySvg } from "handy-svg";

import useTheme from "../../hooks/useTheme";

import sun from "../../../assets/images/Button/Sun.svg";
import moon from "../../../assets/images/Button/Moon.svg";

import s from "./themeSwitcher.module.scss";

function ThemeSwitcher() {
  const { theme, setThemeSchema } = useTheme();
  return (
    <div
      className={classNames(s[`wrapper-${theme}`], s.wrapper)}
      onClick={setThemeSchema}
    >
      <HandySvg src={sun} className={classNames(s["icon-sun"], s.icon)} />
      <HandySvg src={moon} className={classNames(s["icon-moon"], s.icon)} />
    </div>
  );
}
export default ThemeSwitcher;
