import { useDispatch } from "react-redux";
import { ProgressBar } from "react-loader-spinner";

import useAuthState from "../../shared/hooks/useAuthState";

import { signinRequest } from "../../redux/auth/auth-operations";
import { getErrorMessage, notify } from "../../shared/services/utils/utils";

import SignInForm from "./SignInForm";

function SignIn() {
  const dispatch = useDispatch();
  const { error, loading, verify } = useAuthState();
  let errMessage = error ? getErrorMessage(error) : "";
  

  function onSubmit(data) {
    dispatch(signinRequest(data));
  }

  const loader = (
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{}}
      wrapperClass="progress-bar-wrapper"
      borderColor="#FC842D"
      barColor="#FC842D"
    />
  );

  return (
    <>
      {loading && <div className="wrapper__sign">{loader}</div>}
      {!loading && <SignInForm onSubmit={onSubmit} />}
      {verify && notify("Succesfully have been verified", "success")}
      {error && notify(errMessage, "error")}
    </>
  );
}
export default SignIn;
