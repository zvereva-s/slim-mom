import { Link } from "react-router-dom";

import LangSwitcher from "../components/LangSwitcher";
import Navigation from "../components/Navigation";

import Logo from "../../../shared/components/Logo";

import s from "./notAuthHeader.module.scss";

function NotAuthHeader() {
  return (
    <header className={s.header}>
      <LangSwitcher />
      <div className={s.container}>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
export default NotAuthHeader;
