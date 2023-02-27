import { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import useTheme from "../../../shared/hooks/useTheme";

import Navigation from "../components/Navigation";
import ModalNavigation from "../components/ModalNavigation";
import AdditionalMenu from "../components/AdditionalMenu/AdditionalMenu";
import UserInfo from "../components/UserInfo/UserInfo";

import Logo from "../../../shared/components/Logo";
import Button from "../../../shared/components/Button";

import s from "./authHeader.module.scss";

function AuthHeader() {
  const { theme } = useTheme();
  const [openModal, setOpenModal] = useState(false);

  function showModal() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }
  const burger = (
    <div
      className={classNames(
        s["burger-icon-wrapper"],
        s[`burger-icon-wrapper-${theme}`]
      )}
      onClick={showModal}
    >
      <Button
        type="button"
        icon="burger"
        className={classNames("button", `button-${theme}`)}
        onClick={showModal}
      />
    </div>
  );

  return (
    <>
      <header className={classNames(s.header, s[`header-${theme}`])}>
        <AdditionalMenu />
        <div className={classNames(s.container, s[`container-${theme}`])}>
          <div
            className={classNames(
              s["wrapper-logo-nav"],
              s[`wrapper-logo-nav-${theme}`]
            )}
          >
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
