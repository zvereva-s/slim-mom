import classNames from "classnames";

import useTheme from "../../hooks/useTheme";

import s from "./link.module.scss";

function Link({ text }) {
  const { theme } = useTheme();
  return <p className={classNames(s.link, s[`link-${theme}`])}>{text}</p>;
}

export default Link;
