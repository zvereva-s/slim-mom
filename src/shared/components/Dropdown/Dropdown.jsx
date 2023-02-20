import React from "react";

import classNames from "classnames";
import useTranslate from "../../hooks/useTranslate";

import s from "../FormField/formField.module.scss";

function Dropdown({ list, listName, id, handleChange, value }) {
  const { lang, t } = useTranslate();

  const options = list.map(({ key, name }) => ({
    value: String(key),
    label: name[lang],
  }));

  const inputStyle = classNames(s["input-text"], s.input);
  return (
    <>
      <input
        list={listName}
        id={id}
        name="name"
        className={inputStyle}
        placeholder={t.addFormInput}
        onChange={handleChange}
        value={value}
      />
      <datalist id={listName}>
        {options.map(({ value, label }) => (
          <option key={value} value={label} />
        ))}
      </datalist>
    </>
  );
}
export default Dropdown;
