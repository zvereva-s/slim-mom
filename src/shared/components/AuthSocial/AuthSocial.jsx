import classNames from "classnames";

import Button from "../Button";

import s from "./authSocial.module.scss";

function AuthSocial() {
  return (
    <div className={s.wrapper}>
      <Button
        type="button"
        icon="google"
        className={classNames("button")}
        onClick={() => {
          window.location.replace(
            "https://slim-mom-backend.onrender.com/api/auth/google/callback"
          );
        }}
      />
    </div>
  );
}
export default AuthSocial;
