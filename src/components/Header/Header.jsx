import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import { SiHomebridge } from 'react-icons/si';
import { useTranslation } from 'react-i18next';
import ToggleTheme from './ToggleTheme';
import ToggleLang from './ToggleLang';
import AuthHeader from '../AuthForms/AuthHeader';

export default function Header({ theme, toggleTheme }) {
  const { t } = useTranslation();

  return (
    <header className="bg-bgHeader dark:bg-darkBgHeader z-50 w-full fixed top-0 left-0 h-20 flex items-center justify-between">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex gap-4 items-center">
            <SiHomebridge className="text-colorLogo dark:text-yellow-500 transition-all duration-500 text-[3rem] z-50" />
            <div className="hidden sm:flex flex-col z-50">
              <p className="text-[0.6rem] font-semibold text-black dark:text-white transition-all duration-200">
                {t('header.logo.logo_text_1')}
              </p>
              <p className="text-[0.6rem] font-semibold text-black dark:text-white transition-all duration-200">
                {t('header.logo.logo_text_2')}
              </p>
            </div>
          </div>
        </Link>
        <NavMenu />
        <div className="flex items-center gap-8">
          <AuthHeader />
          <ToggleLang />
          <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
}
