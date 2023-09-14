import { Link } from 'react-router-dom';
import { BsWindows, BsXLg } from 'react-icons/bs';
import { useState } from 'react';
import ToggleTheme from './ToggleTheme';
import ToggleLang from './ToggleLang';
import { useTranslation } from 'react-i18next';
import AuthHeader from './AuthHeader';

export default function NavHeader({ theme, toggleTheme }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex md:justify-between items-center">
      <ul
        className={`transition duration-500 ease-in-out transform fixed md:relative top-0 left-0 w-full h-[100vh] md:h-0 flex items-center flex-col sm:flex-row justify-center gap-4 bg-white dark:bg-black ${
          isOpen ? 'flex' : 'hidden'
        } md:flex`}
      >
        <li>
          <Link
            to="/about"
            className="font-semibold text-black dark:text-white duration-200 hover:text-hoverMenuHeaader hover:dark:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            {t('about-us')}
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="font-semibold  text-black dark:text-white  duration-200 hover:text-hoverMenuHeaader hover:dark:text-yellow-500 "
            onClick={() => setIsOpen(false)}
          >
            {t('contacts')}
          </Link>
        </li>
      </ul>
      <div className="flex md:flex-row-reverse items-center gap-8 ml-10 z-50">
        <ToggleLang />

        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        <AuthHeader />

        <button
          className="md:hidden block ml-8 text-2xl font-normal text-colorMobileMenuIcon dark:text-white duration-200 "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <BsXLg /> : <BsWindows />}
        </button>
      </div>
    </nav>
  );
}
