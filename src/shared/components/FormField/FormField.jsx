import PropTypes from "prop-types";
import classNames from "classnames";

import { useMemo, useState } from "react";
import { nanoid } from "@reduxjs/toolkit";

import useTranslate from "../../hooks/useTranslate";
import useTheme from "../../../shared/hooks/useTheme";

import Link from "../Link";

import s from "./formField.module.scss";

function FormField(props) {
  const {
    className,
    label,
    name,
    value,
    handleChange,
    handleBlur,
    handleAdvice,
    advice,
    placeholder,
    required,
    type,
    pattern,
    title,
    checked,
    maxLenght,
    min,
    max,
    error,
    link,
    children,
  } = props;

  const { t } = useTranslate();
  const { theme } = useTheme();

  const [showLink, setShowLink] = useState(false);
  const [typeInput, setTypeInput] = useState(type);

  const id = useMemo(() => nanoid(), []);

  const isRadio = type === "radio" ? true : false;

  const labelStyle = isRadio
    ? classNames(s["label-radio"], s[`label-radio-${theme}`])
    : classNames(s["label-text"], s[`label-text-${theme}`]);

  const inputStyle = isRadio
    ? classNames(s["input-radio"], s[`input-radio-${theme}`])
    : classNames(
        s["input-text"],
        s[`input-text-${theme}`],
        s.input,
        `${s} ${className}`
      );

  const handleLink = () => {
    setShowLink(!showLink);
    setTypeInput(showLink ? "password" : "text");
  };

  const textField = (
    <>
      <div className={s.wrapper}>
        {label && (
          <label className={labelStyle} htmlFor={id}>
            {label}
          </label>
        )}
        <input
          className={inputStyle}
          id={id}
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          type={type === "password" ? typeInput : type}
          required={required}
          pattern={pattern}
          title={title}
          maxLength={maxLenght}
          min={min}
          max={max}
        />
        {link && (
          <div className={s["link-wrapper"]} onClick={handleLink}>
            <Link text={!showLink ? t.show : t.close} />
          </div>
        )}
        {error?.message && error.type === type && (
          <p
            className={classNames(
              s[`invalid__message--wrapper`],
              s[`invalid__message--wrapper-${theme}`]
            )}
          >
            {error?.message}
          </p>
        )}
      </div>
    </>
  );

  const radioField = (
    <>
      <div
        className={classNames(s["radio-wrapper"], s[`radio-wrapper-${theme}`])}
      >
        <input
          className={inputStyle}
          id={id}
          type={type}
          checked={checked}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={handleAdvice}
        />
        <label className={labelStyle} htmlFor={id}>
          {label}
        </label>
      </div>
      {advice?.message && advice.value === value && (
        <p className={s.advice}>{advice?.message}</p>
      )}
    </>
  );

  return (
    <>
      {isRadio && radioField}
      {!isRadio && textField}
    </>
  );
}
export default FormField;

FormField.defaultProps = {
  required: false,
  type: "text",
  handleChange: () => {},
};
FormField.propTypes = {
  advice: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  pattern: PropTypes.string,
  title: PropTypes.string,
  maxLenght: PropTypes.string,
  min: PropTypes.string,
  max: PropTypes.string,
};
