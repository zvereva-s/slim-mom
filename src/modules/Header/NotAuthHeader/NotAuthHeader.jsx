import { Link } from "react-router-dom";
import classNames from "classnames";

import useTheme from "../../../shared/hooks/useTheme";

import Navigation from "../components/Navigation";
import AdditionalMenu from "../components/AdditionalMenu/AdditionalMenu";

import Logo from "../../../shared/components/Logo";

import s from "./notAuthHeader.module.scss";

function NotAuthHeader() {
  const { theme } = useTheme();

  return (
    <header className={s.header}>
      <AdditionalMenu />
      <div className={classNames(s.container, s[`container-${theme}`])}>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
export default NotAuthHeader;
