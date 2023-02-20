import { NavLink } from "react-router-dom";

import useAuthState from "../../../../shared/hooks/useAuthState";
import useTranslate from "../../../../shared/hooks/useTranslate";

import s from "./navigation.module.scss";
import { items } from "./items";

function getClassName({ isActive }) {
  const style = isActive ? s.isActive : s.link;
  return style;
}

function Navigation({ isModalOpen, closeModal, children }) {
  const { lang } = useTranslate();
  const { isLogin } = useAuthState();

  const styleNav = isLogin ? s["nav-isLogin"] : s.nav;
  const menu = isLogin
    ? items.filter((el) => el.private === true)
    : items.filter((el) => el.private === false);

  const elements = menu.map(({ id, link, title }) => (
    <li key={id} className={s.item}>
      <NavLink className={getClassName} to={link} onClick={closeModal}>
        {title[lang]}
      </NavLink>
    </li>
  ));

  return (
    <>
      <nav className={styleNav}>
        <ul className={s.list}>{elements}</ul>
        {children}
      </nav>
      {isModalOpen && (
        <nav className={s["nav-modal"]}>
          <ul className={s.list}>{elements}</ul>
          {children}
        </nav>
      )}
    </>
  );
}
export default Navigation;
