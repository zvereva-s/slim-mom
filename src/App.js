import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

import useAuthState from "./shared/hooks/useAuthState";
import useCloseModal from "./shared/hooks/useCloseModal";

import { getCurrentRequest } from "./redux/auth/auth-operations";
import { addGoogleAuth } from "./redux/auth/auth-actions";

import UserRoutes from "./UserRoutes";
import Background from "./shared/components/Background/Background";
import Modal from "./shared/components/Modal";
import Notification from "./shared/components/Notification";

import Header from "./modules/Header/Header";

function App() {
  const [notifyToast, setNotifyToast] = useState(false);
  const { handleClose } = useCloseModal(() => setNotifyToast(false));

  const [searchParams, setSearchParams] = useSearchParams();
  const [userGoogleAuth, setUserGoogleAuth] = useState({
    name: searchParams.get("name"),
    email: searchParams.get("email"),
    token: searchParams.get("token"),
    id: searchParams.get("_id"),
  });

  const dispatch = useDispatch();
  const { isLogin, user } = useAuthState();

  useEffect(() => {
    if (isLogin && user?.healthyData?.dailyRate === "0") {
      setNotifyToast(true);
    }
    if (userGoogleAuth.token) {
      dispatch(addGoogleAuth(userGoogleAuth));
    }
    dispatch(getCurrentRequest());
  }, [dispatch, user?.healthyData?.dailyRate]);

  return (
    <>
      {notifyToast && (
        <Modal handleClose={handleClose}>
          <Notification
            onClick={() => setNotifyToast(false)}
            text="❗️❗️❗️
          Please, type your body calculating data into the Calculator, before you'll start to use this app"
          />
        </Modal>
      )}
      <Background>
        <Header />
        <UserRoutes />
      </Background>
    </>
  );
}

export default App;
