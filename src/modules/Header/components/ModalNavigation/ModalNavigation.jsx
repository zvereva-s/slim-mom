import { Link } from "react-router-dom";
import classNames from "classnames";
import useCloseModal from "../../../../shared/hooks/useCloseModal.js";

import Navigation from "../Navigation/Navigation.jsx";
import UserInfo from "../../components/UserInfo";

import Modal from "../../../../shared/components/Modal";
import Container from "../../../../shared/components/Container";
import Logo from "../../../../shared/components/Logo";
import Button from "../../../../shared/components/Button";

import s from "./modalNavigation.module.scss";

function ModalNavigation({ closeModal, isModalOpen }) {
  const { handleClose } = useCloseModal(closeModal);

  return (
    <Modal>
      <div className={s.overlay} onClick={handleClose}>
        <div className={s["wrapper-logo-nav"]}>
          <Link to="/">
            <Logo isModalOpen={isModalOpen} />
          </Link>
          <UserInfo />
          <div className={s["btn-wrapper"]}>
            <Button
              type="button"
              className={classNames("button")}
              onClick={closeModal}
              icon="close-menu"
            />
          </div>
        </div>
        <div className={s.modal}>
          <Container>
            <Navigation isModalOpen={isModalOpen} closeModal={closeModal} />
          </Container>
        </div>
      </div>
    </Modal>
  );
}
export default ModalNavigation;
