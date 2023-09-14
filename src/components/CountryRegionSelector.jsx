import React, { useState } from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { useTranslation } from 'react-i18next';

export default function CountryRegionSelector({
  onCountryChange,
  onRegionChange,
}) {
  const { t } = useTranslation();
  const [country, setCountry] = useState('');
  const [region, setRegion] = useState('');

  const handleCountryChange = val => {
    setCountry(val);
    onCountryChange(val);
  };

  const handleRegionChange = val => {
    setRegion(val);
    onRegionChange(val);
  };

  const handleReset = () => {
    setCountry('');
    setRegion('');
    onCountryChange('');
    onRegionChange('');
  };

  return (
    <div className="mb-20 flex flex-col md:flex-row items-center justify-center gap-5">
      <CountryDropdown
        value={country}
        onChange={handleCountryChange}
        showDefaultOption={true}
        defaultOptionLabel={t('select-country')}
        className="focus:outline-none w-full md:w-4/12 transition-all duration-200 rounded-md bg-white h-10 border border-black text-black px-2 dark:bg-black dark:text-white dark:border-white"
      />
      <RegionDropdown
        country={country}
        value={region}
        onChange={handleRegionChange}
        showDefaultOption={true}
        defaultOptionLabel={t('select-region')}
        className="focus:outline-none w-full md:w-4/12 transition-all duration-200 rounded-md bg-white h-10 border border-black text-black px-2 dark:bg-black dark:text-white dark:border-white"
      />
      <button onClick={handleReset} className="btn-country-filter">
        {t('reset')}
      </button>
    </div>
  );
}
