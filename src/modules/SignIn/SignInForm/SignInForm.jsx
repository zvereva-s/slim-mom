import classNames from "classnames";
import useForm from "../../../shared/hooks/useForm";

import FormField from "../../../shared/components/FormField";
import Button from "../../../shared/components/Button";
import AuthSocial from '../../../shared/components/AuthSocial';

import { initialState } from "./initialState";

import s from "./signInForm.module.scss";

function SignInForm({ onSubmit }) {
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
        placeholder="Login *"
        type="email"
        handleChange={handleChange}
        handleBlur={validate}
        error={error}
        required
      />
      <FormField
        name="password"
        value={state.password}
        placeholder="Password *"
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
          text="Sign In"
          type="submit"
          className={classNames("button", "text", "focus")}
        />
        <Button
          text="Sign Up"
          type="submit"
          className={classNames("button", "text", "base", "disabled")}
          disabled
        />
      </div>
    </form>
  );
}
export default SignInForm;
