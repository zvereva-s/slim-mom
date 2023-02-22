import classNames from "classnames";

import { useDispatch } from "react-redux";

import { logoutRequest } from "../../../../redux/auth/auth-operations";

import useAuthState from "../../../../shared/hooks/useAuthState";
import useTranslate from "../../../../shared/hooks/useTranslate";
import useTheme from "../../../../shared/hooks/useTheme";

import s from "./userInfo.module.scss";

function UserInfo() {
  const dispatch = useDispatch();
  const { user } = useAuthState();
  const { t } = useTranslate();
  const { theme } = useTheme();

  const logout = () => {
    dispatch(logoutRequest());
  };

  return (
    <div className={classNames(s.wrapper, s[`wrapper-${theme}`])}>
      <p className={classNames(s.item, s[`item-${theme}`])}>{user.name}</p>
      <p className={classNames(s.item, s[`item-${theme}`])} onClick={logout}>
        {t.logOut}
      </p>
    </div>
  );
}
export default UserInfo;
