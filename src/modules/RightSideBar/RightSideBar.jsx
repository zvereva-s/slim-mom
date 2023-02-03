import { useSelector } from "react-redux";

import { healthyData } from '../../redux/auth/auth-selectors';

import RightSideListSummary from "./RightSideListSummary";
import NotRecommendedProductList from "../../shared/components/NotRecommendedProductList";

import s from "./rightSideBar.module.scss";

function RightSideBar() {
   //! lang
  const lang = 'en';
  const { notAllowedProducts } = useSelector(healthyData);


  return (
    <div className={s.wrapper}>
      <RightSideListSummary />
     <NotRecommendedProductList className={s.notRecommend} list={notAllowedProducts?.default?.[lang] || notAllowedProducts[lang]} />
    </div>
  );
}
export default RightSideBar;
