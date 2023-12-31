import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../node_modules/flag-icons/css/flag-icons.min.css';
import { BsChevronDown } from 'react-icons/bs';

// Declare static data outside of the component
const languages = ['en', 'pl', 'uk', 'ru'];

export default function ToggleLang() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Initialize language-specific data inside the component, but without re-initializing on each render
  const languageNames = {
    en: t('select_language.english'),
    pl: t('select_language.poland'),
    uk: t('select_language.ukraine'),
    ru: t('select_language.russian'),
  };
  const languageAbbreviated = {
    en: t('select_language_abbreviated.english'),
    pl: t('select_language_abbreviated.poland'),
    uk: t('select_language_abbreviated.ukraine'),
    ru: t('select_language_abbreviated.russian'),
  };

  const languageFlags = {
    en: 'fi fi-us',
    pl: 'fi fi-pl',
    uk: 'fi fi-ua',
    ru: 'fi fi-ru',
  };

  const changeLanguage = useCallback(
    language => {
      i18n.changeLanguage(language);
      setIsOpen(false);
    },
    [i18n]
  );

  const handleClickOutside = useCallback(event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }, []);

  const currentLanguage = languages.includes(i18n.language)
    ? i18n.language
    : 'en';

  useEffect(() => {
    if (!languages.includes(i18n.language)) {
      i18n.changeLanguage('en');
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [i18n, handleClickOutside]);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div
        className="flex items-center gap-1 group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2 cursor-pointer text-black dark:text-white">
          <span className={languageFlags[currentLanguage]}></span>
          <p className="hidden md:block">{languageNames[currentLanguage]}</p>
          <p className=" md:hidden">{languageAbbreviated[currentLanguage]}</p>
        </div>
        <BsChevronDown className="w-4 h-4 cursor-pointer duration-200 group-hover:mt-1" />
      </div>
      {isOpen && (
        <ul className="flex flex-col items-start absolute top-10 right-0 shadow-md dark:shadow-white bg-white dark:bg-black text-black dark:text-white">
          {languages
            .filter(l => l !== i18n.language)
            .map(l => (
              <li
                key={l}
                className="flex items-center gap-4 cursor-pointer border-b dark:border-b-gray-900 w-full px-8 py-2 bg-white hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-900 text-black dark:text-white"
                onClick={() => changeLanguage(l)}
              >
                <span className={languageFlags[l]}></span>
                <p>{languageNames[l]}</p>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
