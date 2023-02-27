import PropTypes from "prop-types";
import classNames from "classnames";

import useTheme from "../../hooks/useTheme";

import s from "./link.module.scss";

function Link({ text }) {
  const { theme } = useTheme();
  return <p className={classNames(s.link, s[`link-${theme}`])}>{text}</p>;
}

export default Link;

Link.defaultProps = {
  text: "",
};
Link.propTypes = {
  text: PropTypes.string,
};
