import { useSelector } from "react-redux";
import { HandySvg } from "handy-svg";

import { diaryDate } from "../../../redux/diary/diary-selector";
import Calendar from "../../../shared/components/Calendar/Calendar";

import { converToDate } from "../../../shared/services/utils/utils";

import s from "./diaryDateСalendar.module.scss";
import icon from "../../../assets/images/Calendar/icon.svg";

function DiaryDateСalendar({ onClick, openCalendar }) {
  const dateValue = useSelector(diaryDate);
  const { year, month, day } = converToDate(dateValue);
  const date = `${day}.${month}.${year}`;

  return (
    <div className={s["main-wrapper"]}>
      <h1 className={s.title}>{date}</h1>
      <div className={s["icon-wrapper"]} onClick={onClick}>
        <HandySvg className={s.icon} src={icon} />
      </div>
      {openCalendar && <Calendar dateValue={dateValue} />}
    </div>
  );
}
export default DiaryDateСalendar;
