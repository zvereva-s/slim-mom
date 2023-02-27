import { RotatingLines } from "react-loader-spinner";

import s from "./loader.module.scss";

function Loader() {
  return (
    <div className={s.wrapper}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </div>
  );
}
export default Loader;
