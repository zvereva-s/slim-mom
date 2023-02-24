import PropTypes from "prop-types";
import DiaryAddProductForm from "../DiaryAddProductForm";

import ModalFormContent from "../../../../shared/components/ModalFormContent";

function DiaryAddProductFormMobile({ closeModal, dropdownList, onSubmit }) {
  return (
    <ModalFormContent closeModal={closeModal}>
      <DiaryAddProductForm dropdownList={dropdownList} onSubmit={onSubmit} />
    </ModalFormContent>
  );
}
export default DiaryAddProductFormMobile;

DiaryAddProductFormMobile.defaultProps = {
  closeModal: () => {},
  dropdownList: [],
  onSubmit: () => {},
};
DiaryAddProductFormMobile.propTypes = {
  closeModal: PropTypes.func,
  dropdownList: PropTypes.array,
  onSubmit: PropTypes.func,
};
