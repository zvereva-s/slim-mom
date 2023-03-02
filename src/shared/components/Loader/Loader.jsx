import { RotatingLines } from "react-loader-spinner";
import classNames from "classnames";

import useBreakpoints from "../../hooks/useBreakpoints";

import s from "./loader.module.scss";

function Loader({ typeClass, size }) {
  const { less768px } = useBreakpoints();

  return (
    <div className={classNames(s.wrapper, s[`wrapper-${typeClass}`])}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width={less768px ? "60" : size || "100"}
        visible={true}
      />
    </div>
  );
}
export default Loader;
