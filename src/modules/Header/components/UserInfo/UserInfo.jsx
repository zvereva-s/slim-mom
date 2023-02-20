import { useDispatch } from "react-redux";
import { logoutRequest } from "../../../../redux/auth/auth-operations";
import useAuthState from "../../../../shared/hooks/useAuthState";
import useTranslate from "../../../../shared/hooks/useTranslate";

import s from "./userInfo.module.scss";

function UserInfo() {
  const dispatch = useDispatch();
  const { user } = useAuthState();
  const { t } = useTranslate();

  const logout = () => {
    dispatch(logoutRequest());
  };

  return (
    <div className={s.wrapper}>
      <p className={s["item"]}>{user.name}</p>
      <p className={s["item"]} onClick={logout}>
        {t.logOut}
      </p>
    </div>
  );
}
export default UserInfo;
