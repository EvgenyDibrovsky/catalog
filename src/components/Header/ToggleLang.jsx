import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../node_modules/flag-icons/css/flag-icons.min.css';

export default function ToggleLang() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const languages = ['en', 'pl', 'uk', 'ru'];
  const languageNames = {
    en: t('select_language.english'),
    pl: t('select_language.poland'),
    uk: t('select_language.ukraine'),
    ru: t('select_language.russian'),
  };

  const languageFlags = {
    en: 'fi fi-us',
    pl: 'fi fi-pl',
    uk: 'fi fi-ua',
    ru: 'fi fi-ru',
  };

  const changeLanguage = language => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full">
      <div
        className="flex items-center gap-2 cursor-pointer text-black dark:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={languageFlags[i18n.language]}></span>
        <p>{languageNames[i18n.language]}</p>
      </div>

      {isOpen && (
        <ul className="flex flex-col items-start gap-4 absolute top-10 right-0 shadow-md  dark:shadow-white px-8 py-2 bg-white dark:bg-black  text-black dark:text-white">
          {languages
            .filter(l => l !== i18n.language)
            .map(l => (
              <li
                key={l}
                className="flex items-center gap-4 cursor-pointer  bg-white dark:bg-black text-black dark:text-white"
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
