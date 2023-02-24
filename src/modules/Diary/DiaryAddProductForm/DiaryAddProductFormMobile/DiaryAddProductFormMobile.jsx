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
