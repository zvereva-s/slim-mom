import { Navigate, Outlet } from "react-router-dom";

import useAuthState from "../../hooks/useAuthState";

import { notify } from "../../services/utils/utils.js";

function PrivateRoute() {
  const { isLogin, verify } = useAuthState();

  if (!verify) {
    notify("Please verify your email", "info");
  }
  if (!isLogin) {
    return <Navigate to="/signin" />;
  }
  return <Outlet />;
}

export default PrivateRoute;
