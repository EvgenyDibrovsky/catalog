// Header.tsx
import { NavMenu } from "./NavMenu";
import { Logo } from "./Logo";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  return (
    <header className="bg-white dark:bg-black z-50 w-full fixed top-0 left-0 h-20 flex items-center justify-between">
      <div className="container flex justify-between items-center">
        <Logo />
        <NavMenu />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export { Header };
