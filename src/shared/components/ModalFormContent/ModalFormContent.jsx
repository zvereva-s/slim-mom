import classNames from "classnames";

import useCloseModal from "../../hooks/useCloseModal.js";
import useBreakpoints from "../../hooks/useBreakpoints";

import Modal from "../Modal";
import Container from "../Container";
import Button from "../Button";
import Header from "../../../modules/Header";

import s from "./modalFormContent.module.scss";

function ModalFormContent({ closeModal, children }) {
  const { bigger768px } = useBreakpoints();
  const icon = !bigger768px ? "arrowBack" : "close-menu";
  const { handleClose } = useCloseModal(closeModal);

  return (
    <Modal>
      <div className={s.overlay} onClick={handleClose}>
        {!bigger768px && <Header />}
        <div className={s.modal}>
          <div className={s["btn-wrapper"]}>
            <Button
              type="button"
              className={classNames("button")}
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
