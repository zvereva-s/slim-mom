import PropTypes from "prop-types";

function useCloseModal({ closeModal }) {
  function handleClose({ target, currentTarget, code }) {
    if (target === currentTarget || code === "Escape") {
      closeModal(false);
    }
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
