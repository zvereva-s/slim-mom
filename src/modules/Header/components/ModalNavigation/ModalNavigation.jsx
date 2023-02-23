import { Link } from "react-router-dom";
import classNames from "classnames";

import useTheme from "../../../../shared/hooks/useTheme";
import useCloseModal from "../../../../shared/hooks/useCloseModal.js";

import Navigation from "../Navigation/Navigation.jsx";
import UserInfo from "../../components/UserInfo";

import Modal from "../../../../shared/components/Modal";
import Container from "../../../../shared/components/Container";
import Logo from "../../../../shared/components/Logo";
import Button from "../../../../shared/components/Button";

import s from "./modalNavigation.module.scss";

function ModalNavigation({ closeModal, isModalOpen }) {
  const { theme } = useTheme();
  const { handleClose } = useCloseModal(closeModal);

  return (
    <Modal>
      <div
        className={classNames(s.overlay, s[`overlay-${theme}`])}
        onClick={handleClose}
      >
        <div className={s["wrapper-logo-nav"]}>
          <Link to="/">
            <Logo isModalOpen={isModalOpen} />
          </Link>
          <UserInfo />
          <div className={s["btn-wrapper"]}>
            <Button
              type="button"
              className={classNames("button", `icon-${theme}`)}
              onClick={closeModal}
              icon="close-menu"
            />
          </div>
        </div>
        <div className={classNames(s.modal, s[`modal-${theme}`])}>
          <Container>
            <Navigation isModalOpen={isModalOpen} closeModal={closeModal} />
          </Container>
        </div>
      </div>
    </Modal>
  );
}
export default ModalNavigation;
