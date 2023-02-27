import { createPortal } from "react-dom";

import PropTypes from "prop-types";

const modal = document.getElementById("modal-root");

function Modal({ children }) {
  return createPortal(<>{children}</>, modal);
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
