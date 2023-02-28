import PropTypes from "prop-types";
import useTheme from "../../../shared/hooks/useTheme";

import s from "./title.module.scss";

function Title({ text, className }) {
  const { theme } = useTheme();

  return (
    <h1 className={`${s} ${s.title} ${className} ${s[`title-${theme}`]}`}>
      {text}
    </h1>
  );
}

export default Title;

Title.defaultProps = {
  text: "",
  className: "",
};
Title.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};