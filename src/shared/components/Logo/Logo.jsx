import { HandySvg } from "handy-svg";

import icon from "../../../assets/images/Logo/Logo.svg";
import text from "../../../assets/images/Logo/Text.svg";
import s from "./logo.module.scss";

const isLogin = false;
const style = isLogin ? s["text-auth"] : s["text"];

function Logo({ isModalOpen }) {
  return (
    <div className={s.wrapper}>
      <HandySvg className={s.icon} src={icon} />
      <HandySvg className={style} src={text} />
      {isModalOpen && <HandySvg className={s["text-logo-modal"]} src={text} />}
    </div>
  );
}
export default Logo;
