import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import useTranslate from "../../hooks/useTranslate";
import useTheme from "../../hooks/useTheme";

import s from "../FormField/formField.module.scss";

function Dropdown({ list, listName, id, handleChange, value }) {
  const { lang, t } = useTranslate();
  const { theme } = useTheme();

  const options = list.map(({ key, name }) => ({
    value: String(key),
    label: name[lang],
  }));

  const inputStyle = classNames(
    s["input-text"],
    s.input,
    s[`input-text-${theme}`]
  );
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

Dropdown.defaultProps = {
  list: [],
  listName: [],
  handleChange: () => {},
};
Dropdown.propTypes = {
  list: PropTypes.array,
  listName: PropTypes.array,
  id: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.number,
};
