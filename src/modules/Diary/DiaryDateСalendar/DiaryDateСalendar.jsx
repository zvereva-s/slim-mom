import { HandySvg } from "handy-svg";

import s from "./diaryDateСalendar.module.scss";
import icon from "../../../assets/images/Calendar/icon.svg";

const data = "02.09.2022";
function DiaryDateСalendar() {
  return (
    <div className={s["main-wrapper"]}>
      <h1 className={s.title}>{data}</h1>
      <div className={s["icon-wrapper"]}>
        <HandySvg className={s.icon} src={icon} />
      </div>
    </div>
  );
}
export default DiaryDateСalendar;
