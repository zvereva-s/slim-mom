import DiaryAddProductForm from "../DiaryAddProductForm";

import ModalFormContent from "../../../../shared/components/ModalFormContent";

function DiaryAddProductFormMobile({ closeModal }) {
  return (
    <ModalFormContent closeModal={closeModal}>
      <DiaryAddProductForm />
    </ModalFormContent>
  );
}
export default DiaryAddProductFormMobile;
