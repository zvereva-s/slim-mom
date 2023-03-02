import classNames from "classnames";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import useTheme from "../../shared/hooks/useTheme";
import useBreakpoints from "../../shared/hooks/useBreakpoints";
import useTranslate from "../../shared/hooks/useTranslate";

import {
  getProductListRequest,
  addProductRequest,
} from "../../redux/diary/diary-operations";
import { summaryOfDayRequest } from "../../redux/healthyData/healthyData-operations";

import {
  productListData,
  diaryDate,
  diaryState,
} from "../../redux/diary/diary-selector";

import { getFoodList } from "../../shared/services/apis/diary";
import {
  converToDate,
  notify,
  getErrorMessage,
} from "../../shared/services/utils/utils";

import DiaryAddProductForm from "./DiaryAddProductForm";
import DiaryAddProductFormMobile from "./DiaryAddProductForm/DiaryAddProductFormMobile/DiaryAddProductFormMobile";
import DiaryDateCalendar from "./DiaryDateСalendar";
import DiaryProductList from "./DiaryProductsList";

import Button from "../../shared/components/Button";
import Loader from "../../shared/components/Loader";

import s from "./diary.module.scss";

function Diary() {
  const { lang, t } = useTranslate();
  const { theme } = useTheme();

  const { error, loading } = useSelector(diaryState);

  const [foodListForChoose, setFoodListForChoose] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [openCalendar, setOpenCalendar] = useState(false);

  const { less768px, bigger768px } = useBreakpoints();

  const dateValue = useSelector(diaryDate);
  const { year, month, day } = converToDate(dateValue);
  const date = `${day}.${month}.${year}`;

  const productList = useSelector(productListData);
  const products = productList
    ?.map((product) => ({
      ...product,
      name: foodListForChoose?.find((item) => String(item.key) === product.key)
        ?.name[lang],
    }))
    .filter((product) => product.date === date);

  const dispatch = useDispatch();

  useEffect(() => {
    async function func() {
      try {
        const { fullDataFood } = await getFoodList();
        setFoodListForChoose(
          fullDataFood.map((el) => ({ name: el.Name, key: el.key }))
        );
      } catch (e) {
        throw e;
      }
    }
    func();
    dispatch(getProductListRequest());
    dispatch(summaryOfDayRequest(date));
  }, [products.length]);

  function showModal() {
    setOpenModal(true);
  }
  function closeModal() {
    setOpenModal(false);
  }
  function toggleCalendar() {
    setOpenCalendar(!openCalendar);
  }

  function onSubmit(data) {
    const { weight, name } = data;
    const key = String(
      foodListForChoose.find((el) => el.name[lang] === name)?.key
    );

    dispatch(addProductRequest({ key, weight, date }));
  }

  const markupLessThan768 = (
    <>
      {products.length > 0 && <DiaryProductList products={products} t={t} />}
      <div className={classNames(s["wrapper-btn"], s[`wrapper-btn-${theme}`])}>
        <Button
          type="button"
          icon="plus"
          className={classNames(
            "plus",
            "focus",
            "button",
            `button-${theme}`,
            `plus-${theme}`,
            `focus-${theme}`
          )}
          onClick={showModal}
        />
        {openModal && (
          <DiaryAddProductFormMobile
            closeModal={closeModal}
            dropdownList={foodListForChoose}
            onSubmit={onSubmit}
          />
        )}
      </div>
    </>
  );
  const markupBiggerThan768 = (
    <>
      <DiaryAddProductForm
        dropdownList={foodListForChoose}
        onSubmit={onSubmit}
      />
      {products.length > 0 && <DiaryProductList products={products} t={t} />}
    </>
  );

  return (
    <>
      {loading && <Loader typeClass="diary" />}
      {error && notify(getErrorMessage(error), "error")}
      {!loading && (
        <div className={s.wrapper}>
          <DiaryDateCalendar
            onClick={toggleCalendar}
            openCalendar={openCalendar}
          />
          {less768px && markupLessThan768}
          {bigger768px && markupBiggerThan768}
        </div>
      )}
    </>
  );
}
export default Diary;
