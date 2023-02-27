import { useEffect } from "react";
import PropTypes from "prop-types";

function useCloseModal({ closeModal }) {
  function handleClose({ target, currentTarget, code }) {
    if (target === currentTarget || code === "Escape") {
      closeModal(false);
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      document.addEventListener("keydown", handleClose);
      return () => document.removeEventListener("keydown", handleClose);
    });
  }
  return { handleClose };
}
export default useCloseModal;

useCloseModal.defaultProps = {
  closeModal: () => {},
};
useCloseModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
