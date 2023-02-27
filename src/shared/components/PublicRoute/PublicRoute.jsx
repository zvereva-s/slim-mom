import { Navigate, Outlet } from "react-router-dom";
import useAuthState from "../../hooks/useAuthState";

function PublicRoute() {
  const { isLogin } = useAuthState();

  if (isLogin) {
    return <Navigate to="/calculator" />;
  }
  return <Outlet />;
}

export default PublicRoute;
