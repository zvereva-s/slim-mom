import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import classnames from "classnames";

import useTranslate from "../../hooks/useTranslate";

import { addDateDiary } from "../../../redux/diary/diary-actions";

import * as calendar from "./calendarUtils";

import s from "./calendar.module.scss";

function Calendar({ dateValue }) {
  const { lang } = useTranslate();

  // STATE
  const [names, setNames] = useState({
    days: {
      en: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
      ua: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
      ru: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
    },
    monthes: {
      en: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      ua: [
        "Січень",
        "Лютий",
        "Березень",
        "Квітень",
        "Травень",
        "Червень",
        "Липень",
        "Серпень",
        "Вересень",
        "Жовтень",
        "Листопад",
        "Грудень",
      ],
      ru: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
    },
  });
  const weekDayNames = names.days[lang];
  const monthNames = names.monthes[lang];
  const years = [
    2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027,
    2028, 2029, 2030,
  ];

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
    <div className={s.calendar}>
      <header className={s.header}>
        <button
          className={s["header-button"]}
          onClick={handlePrevMonthButtonClick}
        >
          {"<"}
        </button>

        <select
          className={s["header-select"]}
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
          className={s["header-select"]}
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
          className={s["header-button"]}
          onClick={handleNextMonthButtonClick}
        >
          {">"}
        </button>
      </header>

      <table className={s.table}>
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
                      s[
                        {
                          today: calendar.areEqual(date, currentDate),
                          selected: calendar.areEqual(date, selectedDate),
                        }
                      ]
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
