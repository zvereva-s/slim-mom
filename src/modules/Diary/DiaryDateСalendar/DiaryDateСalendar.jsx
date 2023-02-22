import { useSelector } from "react-redux";
import { HandySvg } from "handy-svg";
import classNames from "classnames";

import { diaryDate } from "../../../redux/diary/diary-selector";

import useTheme from "../../../shared/hooks/useTheme";

import Calendar from "../../../shared/components/Calendar/Calendar";

import { converToDate } from "../../../shared/services/utils/utils";

import s from "./diaryDateСalendar.module.scss";
import icon from "../../../assets/images/Calendar/icon.svg";

function DiaryDateСalendar({ onClick, openCalendar }) {
  const dateValue = useSelector(diaryDate);
  const { year, month, day } = converToDate(dateValue);
  const date = `${day}.${month}.${year}`;

  const { theme } = useTheme();

  return (
    <div className={classNames(s["main-wrapper"], s[`main-wrapper-${theme}`])}>
      <h1 className={classNames(s.title, s[`title-${theme}`])}>{date}</h1>
      <div
        className={classNames(s["icon-wrapper"], s[`icon-wrapper-${theme}`])}
        onClick={onClick}
      >
        <HandySvg
          className={classNames(s.icon, s[`icon-${theme}`])}
          src={icon}
        />
      </div>
      {openCalendar && <Calendar dateValue={dateValue} />}
    </div>
  );
}
export default DiaryDateСalendar;
