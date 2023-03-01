import PropTypes from "prop-types";
import classNames from "classnames";
import useTheme from "../../../shared/hooks/useTheme";

import s from "./title.module.scss";

function Title({ text, nameClass }) {
  const { theme } = useTheme();

  return (
    <h1
      className={classNames(
        s.title,
        s[`title-${theme}`] && s[`title-${nameClass}`]
      )}
    >
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
