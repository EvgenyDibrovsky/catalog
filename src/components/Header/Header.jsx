import { Link } from 'react-router-dom';
import NavHeader from './NavHeader';
import { SiHomebridge } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

export default function Header({ theme, toggleTheme }) {
  const { t } = useTranslation();

  return (
    <header className="bg-bgHeader dark:bg-darkBgHeader z-50 w-full fixed top-0 left-0 h-20 flex items-center justify-between">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex gap-4 items-center">
            <SiHomebridge className="text-colorLogo dark:text-yellow-500 transition-all duration-500 text-[3rem] z-50" />
            <div SiHomebridge="hidden sm:flex flex-col z-50">
              <p className="text-[0.6rem] font-semibold text-black dark:text-white transition-all duration-200">
                {t('logo-text-1')}
              </p>
              <p className="text-[0.6rem] font-semibold text-black dark:text-white transition-all duration-200">
                {t('logo-text-2')}
              </p>
            </div>
          </div>
        </Link>
        <NavHeader theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
}
