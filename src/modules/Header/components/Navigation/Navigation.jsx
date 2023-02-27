import PropTypes from "prop-types";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import useAuthState from "../../../../shared/hooks/useAuthState";
import useTranslate from "../../../../shared/hooks/useTranslate";
import useTheme from "../../../../shared/hooks/useTheme";

import s from "./navigation.module.scss";
import { items } from "./items";

function Navigation({ isModalOpen, closeModal, children }) {
  const { theme } = useTheme();
  const { lang } = useTranslate();
  const { isLogin } = useAuthState();

  function getClassName({ isActive }) {
    const style = isActive
      ? classNames(s.isActive, s[`isActive-${theme}`])
      : classNames(s.link, s[`link-${theme}`]);
    return style;
  }

  const styleNav = isLogin
    ? classNames(s["nav-isLogin"], s[`nav-isLogin-${theme}`])
    : classNames(s.nav, s[`nav-${theme}`]);
  const menu = isLogin
    ? items.filter((el) => el.private === true)
    : items.filter((el) => el.private === false);

  const elements = menu.map(({ id, link, title }) => (
    <li key={id} className={classNames(s.item, s[`item-${theme}`])}>
      <NavLink className={getClassName} to={link} onClick={closeModal}>
        {title[lang]}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav className={styleNav}>
        <ul className={classNames(s.list, s[`list-${theme}`])}>{elements}</ul>
        {children}
      </nav>
      {isModalOpen && (
        <nav className={classNames(s["nav-modal"], s[`nav-modal-${theme}`])}>
          <ul className={classNames(s.list, s[`list-${theme}`])}>{elements}</ul>
          {children}
        </nav>
      )}
    </>
  );
}
export default Navigation;

Navigation.defaultProps = {
  closeModal: () => {},
};
Navigation.propTypes = {
  isModalOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};
