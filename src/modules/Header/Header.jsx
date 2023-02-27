import useAuthState from "../../shared/hooks/useAuthState";

import NotAuthHeader from "./NotAuthHeader";
import AuthHeader from "./AuthHeader";

function Header() {
  const { isLogin } = useAuthState();

  return <>{isLogin ? <AuthHeader /> : <NotAuthHeader />}</>;
}
export default Header;
