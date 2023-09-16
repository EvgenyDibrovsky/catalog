import NavMenu from './NavMenu';
import ToggleTheme from './ToggleTheme';
import ToggleLang from './ToggleLang';
import AuthHeader from '../AuthForms/AuthHeader';
import Logo from './Logo';

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="bg-white dark:bg-darkBgHeader z-50 w-full fixed top-0 left-0 h-20 flex items-center justify-between">
      <div className="container flex justify-between items-center">
        <Logo />
        <div className="flex justify-between items-center ">
          <div className="hidden md:block ml-auto">
            <NavMenu />
          </div>
          <div className=" flex items-center gap-8">
            <AuthHeader />
            <ToggleLang />
            <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
            <div className="block md:hidden ml-auto">
              <NavMenu />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
