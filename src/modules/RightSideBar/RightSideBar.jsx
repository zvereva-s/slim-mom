import useAuthState from "../../shared/hooks/useAuthState";

import RightSideListSummary from "./RightSideListSummary";
import NotRecommendedProductList from "../../shared/components/NotRecommendedProductList";

import s from "./rightSideBar.module.scss";

function RightSideBar() {
   //! lang
  const lang = 'en';
  //! 

  const { user } = useAuthState();
  const { healthyData } = user;
  const { notAllowedProducts } = healthyData;

  return (
    <div className={s.wrapper}>
      <RightSideListSummary />
     <NotRecommendedProductList className={s.notRecommend} list={notAllowedProducts[lang]} />
    </div>
  );
}
export default RightSideBar;
