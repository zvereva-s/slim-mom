import LangSwitcher from "../../../../shared/components/LangSwitcher/LangSwitcher";
import ThemeSwitcher from "../../../../shared/components/ThemeSwitcher";

import s from "./additionalMenu.module.scss";

function AdditionalMenu() {
  return (
    <div className={s.wrapper}>
      <LangSwitcher />
      <ThemeSwitcher />
    </div>
  );
}

export default AdditionalMenu;
