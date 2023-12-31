import { NavLink } from 'react-router-dom';
import { BsList, BsXLg } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function NavHeader() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className="flex items-center">
      <ul
        className={`transition duration-500 ease-in-out transform fixed md:relative top-0 left-0 w-full h-[100vh] md:h-0 flex items-center flex-col sm:flex-row justify-center gap-4 bg-white dark:bg-black ${
          isOpen ? 'flex' : 'hidden'
        } md:flex`}
      >
        <li>
          <NavLink
            to="/"
            className="font-semibold text-black dark:text-white duration-200 hover:text-hoverMenuHeaader hover:dark:text-yellow-500 [&.active]:text-hoverMenuHeaader dark:[&.active]:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            {t('nav_menu.nav_item_1')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalog"
            className="font-semibold  text-black dark:text-white  duration-200 hover:text-hoverMenuHeaader hover:dark:text-yellow-500 [&.active]:text-hoverMenuHeaader dark:[&.active]:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            {t('nav_menu.nav_item_2')}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="font-semibold  text-black dark:text-white  duration-200 hover:text-hoverMenuHeaader hover:dark:text-yellow-500 [&.active]:text-hoverMenuHeaader dark:[&.active]:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            {t('nav_menu.nav_item_3')}
          </NavLink>
        </li>
      </ul>
      <div className="flex md:flex-row-reverse items-center md:gap-8 md:ml-10 z-50">
        <button className="md:hidden block text-2xl font-normal text-colorMobileMenuIcon dark:text-white duration-200 " onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <BsXLg className="h-6 w-auto" /> : <BsList className="h-8 w-auto" />}
        </button>
      </div>
    </nav>
  );
}
