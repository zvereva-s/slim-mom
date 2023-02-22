import classNames from "classnames";

import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import classnames from "classnames";

import useTheme from "../../hooks/useTheme";
import useTranslate from "../../hooks/useTranslate";

import { addDateDiary } from "../../../redux/diary/diary-actions";

import * as calendar from "./calendarUtils";
import { monthes, days, years } from "./data";

import s from "./calendar.module.scss";

function Calendar({ dateValue }) {
  const { lang } = useTranslate();
  const { theme } = useTheme();

  // STATE
  const [names, setNames] = useState({
    days,
    monthes,
  });
  const weekDayNames = names.days[lang];
  const monthNames = names.monthes[lang];

  const [date, setDate] = useState(dateValue);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const dispatch = useDispatch();
  const monthSelected = useRef(null);
  const yearSelected = useRef(null);
  //STATE

  const monthData = calendar.getMonthData(date.getFullYear(), date.getMonth());

  function handlePrevMonthButtonClick() {
    setDate(new Date(date.getFullYear(), date.getMonth() - 1));
  }
  function handleSelectChange(e) {
    const date = new Date(
      yearSelected.current.value,
      monthSelected.current.value
    );

    setDate(date);
  }
  function handleNextMonthButtonClick() {
    setDate(new Date(date.getFullYear(), date.getMonth() + 1));
  }
  function handleDayClick(date) {
    setSelectedDate(date);

    dispatch(addDateDiary(date));
  }

  return (
    <div className={classNames(s.calendar, s[`calendar-${theme}`])}>
      <header className={classNames(s.header, s[`header-${theme}`])}>
        <button
          className={classNames(
            s["header-button"],
            s[`header-button-${theme}`]
          )}
          onClick={handlePrevMonthButtonClick}
        >
          {"<"}
        </button>

        <select
          className={classNames(
            s["header-select"],
            s[`header-select-${theme}`]
          )}
          ref={monthSelected}
          value={date.getMonth()}
          onChange={handleSelectChange}
        >
          {monthNames.map((name, index) => (
            <option key={name} value={index}>
              {name}
            </option>
          ))}
        </select>

        <select
          className={classNames(
            s["header-select"],
            s[`header-select-${theme}`]
          )}
          ref={yearSelected}
          onChange={handleSelectChange}
          value={date.getFullYear()}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <button
          className={classNames(
            s["header-button"],
            s[`header-button-${theme}`]
          )}
          onClick={handleNextMonthButtonClick}
        >
          {">"}
        </button>
      </header>

      <table className={classNames(s.table, s[`table-${theme}`])}>
        <thead>
          <tr>
            {weekDayNames.map((name) => (
              <th className={s.th} key={name}>
                {name}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {monthData.map((week, index) => (
            <tr key={index} className={s.week}>
              {week.map((date, idx) =>
                date ? (
                  <td
                    className={classnames(
                      s.day,
                      s[`day-${theme}`],
                      s[
                        {
                          today: calendar.areEqual(date, currentDate),
                          selected: calendar.areEqual(date, selectedDate),
                        }
                      ]
                      // s[
                      //   {
                      //     [`${today}-${theme}`]: calendar.areEqual(date, currentDate),
                      //     selected: calendar.areEqual(date, selectedDate),
                      //   }
                      // ]
                    )}
                    key={idx}
                    onClick={() => handleDayClick(date)}
                  >
                    {date.getDate()}
                  </td>
                ) : (
                  <td key={idx} />
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
