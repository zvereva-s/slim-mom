import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Navigation from "../components/Navigation";
import ModalNavigation from "../components/ModalNavigation";
import LangSwitcher from "../components/LangSwitcher";
import UserInfo from "../components/UserInfo/UserInfo";

import Logo from "../../../shared/components/Logo";
import Button from "../../../shared/components/Button";

import s from "./authHeader.module.scss";

function AuthHeader() {
  const [openModal, setOpenModal] = useState(false);

  function showModal() {
    //
    console.log("open", openModal);
    //
    setOpenModal(true);
  }
  function closeModal() {
    //
    console.log("close", openModal);
    //
    setOpenModal(false);
  }
  const burger = (
    <div className={s["burger-icon-wrapper"]} onClick={showModal}>
      <Button
        type="button"
        icon="burger"
        className={classNames("button")}
        onClick={showModal}
      />
    </div>
  );

  return (
    <>
      <header className={s.header}>
        <LangSwitcher />
        <div className={s.container}>
          <div className={s["wrapper-logo-nav"]}>
            <Link to="/">
              <Logo />
            </Link>
            <Navigation />
          </div>
          <UserInfo />
          {!openModal && burger}
        </div>
      </header>
      {openModal && (
        <ModalNavigation closeModal={closeModal} isModalOpen={openModal} />
      )}
    </>
  );
}
export default AuthHeader;