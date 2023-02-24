import PropTypes from "prop-types";
import classNames from "classnames";

import useTheme from "../../hooks/useTheme";
import useCloseModal from "../../hooks/useCloseModal.js";
import useBreakpoints from "../../hooks/useBreakpoints";

import Modal from "../Modal";
import Container from "../Container";
import Button from "../Button";
import Header from "../../../modules/Header";

import s from "./modalFormContent.module.scss";

function ModalFormContent({ closeModal, children }) {
  const { theme } = useTheme();

  const { bigger768px } = useBreakpoints();
  const icon = !bigger768px ? "arrowBack" : "close-menu";
  const { handleClose } = useCloseModal(closeModal);

  return (
    <Modal>
      <div
        className={classNames(s.overlay, s[`overlay-${theme}`])}
        onClick={handleClose}
      >
        {!bigger768px && <Header />}
        <div className={classNames(s.modal, s[`modal-${theme}`])}>
          <div
            className={classNames(s["btn-wrapper"], s[`btn-wrapper-${theme}`])}
          >
            <Button
              type="button"
              className={classNames("button", `button-${theme}`)}
              onClick={closeModal}
              icon={icon}
            />
          </div>
          <Container>{children}</Container>
        </div>
      </div>
    </Modal>
  );
}
export default ModalFormContent;

ModalFormContent.defaultProps = {
  closeModal: () => {},
};
ModalFormContent.propTypes = {
  closeModal: PropTypes.func,
};
