import { NavMenu } from "./NavMenu";
import { Logo } from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";

const Header = ({ lng }) => {
  return (
    <header className="bg-white dark:bg-black shadow-md dark:shadow-sky-400 z-50 w-full fixed top-0 left-0 h-20 flex items-center justify-between">
      <div className="container flex justify-between items-center">
        <Logo lng={lng} />
        <NavMenu lng={lng} />
        <LanguageSwitcher lng={lng} />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export { Header };
