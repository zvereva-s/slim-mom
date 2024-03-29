import PropTypes from "prop-types";
import classNames from "classnames";

import useTranslate from "../../../shared/hooks/useTranslate";
import useForm from "../../../shared/hooks/useForm";
import useTheme from "../../../shared/hooks/useTheme";

import FormField from "../../../shared/components/FormField";
import Button from "../../../shared/components/Button";
import AuthSocial from "../../../shared/components/AuthSocial";

import { initialState } from "./initialState";

import s from "./signInForm.module.scss";

function SignInForm({ onSubmit }) {
  const { theme } = useTheme();
  const { t } = useTranslate();
  const { state, setState, handleChange, handleSubmit, error, validate } =
    useForm({
      onSubmit,
      initialState,
    });

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <FormField
        name="email"
        value={state.email}
        placeholder={t.login}
        type="email"
        handleChange={handleChange}
        handleBlur={validate}
        error={error}
        required
      />
      <FormField
        name="password"
        value={state.password}
        placeholder={t.password}
        type="password"
        minLength="6"
        handleChange={handleChange}
        handleBlur={validate}
        error={error}
        link={true}
        required
      />
      <AuthSocial />
      <div className={s[`wrapper-btn`]}>
        <Button
          text={t.signInBtn}
          type="submit"
          className={classNames("button", "text", `focus-${theme}`)}
        />
        <Button
          text={t.signUpBtn}
          type="submit"
          className={classNames(
            "button",
            "text",
            "disabled",
            `button-${theme}`,
            `disabled-${theme}`
          )}
          disabled={true}
        />
      </div>
    </form>
  );
}
export default SignInForm;

SignInForm.defaultProps = {
  onSubmit: () => {},
};
SignInForm.propTypes = {
  onSubmit: PropTypes.func,
};
