import classNames from "classnames";

import useTheme from "../../hooks/useTheme";

import s from "./notification.module.scss";

function Notification({ text, onClick }) {
  const { theme } = useTheme();
  return (
    <div
      onClick={onClick}
      className={classNames(s.wrapper, s[`wrapper-${theme}`])}
    >
      <p className={classNames(s.text, s[`text-${theme}`])}>{text}</p>
    </div>
  );
}

export default Notification;
