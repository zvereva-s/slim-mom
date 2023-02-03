import classNames from "classnames";
import { HandySvg } from "handy-svg";

import plus from "../../../assets/images/Button/Plus.svg";
import close from "../../../assets/images/Button/CloseButton.svg";
import arrowBack from "../../../assets/images/Button/ArrowMenu.svg";
import burger from "../../../assets/images/Button/Burger.svg";
import fb from '../../../assets/images/Button/Fb.svg';
import google from '../../../assets/images/Button/Google.svg';

import s from "./button.module.scss";

function Button({ type, text, className, disabled, icon, onClick }) {
  let svg;
  switch (icon) {
    case "plus":
      svg = plus;
      break;
    case "close":
      svg = close;
      break;
    case "close-menu":
      svg = close;
      break;
    case "arrowBack":
      svg = arrowBack;
      break;
    case "burger":
      svg = burger;
      break;
    case "fb":
      svg = fb;
      break;
    case "google":
      svg = google;
      break;
    default:
      svg = "";
  }
  const classes = className.split(" ").map((el) => classNames(s[el]));

  return (
    <button
      className={classNames(classes)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text} {svg && <HandySvg src={svg} className={s[`icon-${icon}`]} />}
    </button>
  );
}
export default Button;
