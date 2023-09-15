import NavMenu from './NavMenu';
import ToggleTheme from './ToggleTheme';
import ToggleLang from './ToggleLang';
import AuthHeader from '../AuthForms/AuthHeader';
import Logo from './Logo';

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="bg-bgHeader dark:bg-darkBgHeader z-50 w-full fixed top-0 left-0 h-20 flex items-center justify-between">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <div className="ml-auto">
          <NavMenu />
        </div>

        <div className=" flex items-center gap-8">
          <AuthHeader />
          <ToggleLang />
          <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
}
