"use client"
import React, { useState } from 'react';

const locales = [
  { code: 'en', label: 'English' },
  { code: 'pl', label: 'Polski' },
  { code: 'uk', label: 'Українська' },
  { code: 'ru', label: 'Русский' }
];

const LanguageSwitcher: React.FC = () => {
  const [selectedLang, setSelectedLang] = useState<string>('en');

  const handleLangChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLang(event.target.value);
    // TODO: здесь вы можете добавить логику для смены языка в вашем приложении
  };

  return (
    <div className="relative inline-block text-left">
      <select
        value={selectedLang}
        onChange={handleLangChange}
        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
      >
        {locales.map(locale => (
          <option key={locale.code} value={locale.code}>
            {locale.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;

