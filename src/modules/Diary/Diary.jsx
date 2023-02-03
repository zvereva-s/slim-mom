import { useState } from "react";
// import { useMediaPredicate } from "react-media-hook";
import classNames from "classnames";

import useBreakpoints from "../../shared/hooks/useBreakpoints";

import DiaryAddProductForm from "./DiaryAddProductForm";
import DiaryAddProductFormMobile from "./DiaryAddProductForm/DiaryAddProductFormMobile/DiaryAddProductFormMobile";
import DiaryDateCalendar from "./DiaryDateСalendar";
import DiaryProductList from "./DiaryProductsList";

import Button from "../../shared/components/Button";

import s from "./diary.module.scss";

function Diary() {
  const [openModal, setOpenModal] = useState(false);
  const { less768px, bigger768px } = useBreakpoints();

  // const lessThan768 = useMediaPredicate("(max-width: 767px)");
  // const biggerThan768 = useMediaPredicate("(min-width:768px");
  function showModal() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }

  const markupLessThan768 = (
    <>
      <DiaryProductList />
      <div className={s["wrapper-btn"]}>
        <Button
          type="button"
          icon="plus"
          className={classNames("plus", "focus", "button")}
          onClick={showModal}
        />
        {openModal && <DiaryAddProductFormMobile closeModal={closeModal} />}
      </div>
    </>
  );
  const markupBiggerThan768 = (
    <>
      <DiaryAddProductForm />
      <DiaryProductList />
    </>
  );
  return (
    <>
      <DiaryDateCalendar />
      {less768px && markupLessThan768}
      {bigger768px && markupBiggerThan768}
    </>
  );
}
export default Diary;
