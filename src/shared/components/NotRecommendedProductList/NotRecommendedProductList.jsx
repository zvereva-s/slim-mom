import s from "./notRecommendedProductList.module.scss";

function NotRecommendedProductList({ className, list }) {
  let contentList = [];
  let counter = 0;

  while (counter < 5) {
    contentList.push(list[Math.floor(Math.random() * 47)]);
    counter += 1;
  }
  
  return (
    <div className={`${s} ${s.wrapper} ${className}`}>
      <h3 className={s.title}>Food not recommended</h3>
      <ol className={s.list}>   
        {contentList.map((item, idx) => <li key={idx+1} className={s.item}> {item}</li>)}  
      </ol>
    </div>
  );
}
export default NotRecommendedProductList;
