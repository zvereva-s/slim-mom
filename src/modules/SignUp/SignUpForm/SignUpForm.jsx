import classNames from "classnames";
import useForm from "../../../shared/hooks/useForm";

import FormField from "../../../shared/components/FormField";
import Button from "../../../shared/components/Button";
import AuthSocial from "../../../shared/components/AuthSocial/AuthSocial";

import { initialState } from "./initialState.js";
import { fields } from "./fields";

import s from "./signUpForm.module.scss";

function SignUpForm({ onSubmit }) {
  const { state, handleChange, handleSubmit, error, validate } = useForm({
    onSubmit,
    initialState,
  });

  const textFields = fields.map((el) => (
      <FormField
        key={el.id}
        name={el.name}
        value={state[el.name]}
        placeholder={el.placeholder}
        type={el.type}
        handleChange={handleChange}
        handleBlur={validate}
        error={error}
        min={el.min}
        link={ el.type === 'password' && true}
        required
      />
  ));

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      {textFields}
      <AuthSocial />
      <div className={s[`wrapper-btn`]}>
        <Button
          text="Sign Up"
          type="submit"
          className={classNames("button", "text", "focus")}
        />
        <Button
          text="Sign In"
          type="submit"
          className={classNames("button", "text", "disabled")}
          disabled
        />
      </div>
    </form>
  );
}

export default SignUpForm;
