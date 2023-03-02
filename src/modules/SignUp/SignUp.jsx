import { useDispatch } from "react-redux";
import { ProgressBar } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

import useAuthState from "../../shared/hooks/useAuthState";
import useTranslate from "../../shared/hooks/useTranslate";

import { signupRequest } from "../../redux/auth/auth-operations";
import { getErrorMessage, notify } from "../../shared/services/utils/utils";

import SignUpForm from "./SignUpForm";

import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { error, loading } = useAuthState();
  const { lang } = useTranslate();

  let errMessage = error && getErrorMessage(error);

  function onSubmit(data) {
    dispatch(signupRequest(data));
    navigate("/calculator");
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
      {!loading && <SignUpForm onSubmit={onSubmit} />}
      {error && notify(errMessage[lang], "error")}
    </>
  );
}
export default SignUp;
