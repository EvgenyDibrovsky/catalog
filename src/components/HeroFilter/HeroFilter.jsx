import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

export default function HeroFilter() {
  const { t, i18n } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [regions, setRegions] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  const countriesOptions = [
    { value: 'PL', label: t('Польша') },
    { value: 'UA', label: t('Украина') },
  ];

  useEffect(() => {
    const loadCountryData = async countryCode => {
      try {
        const data = await import(`../../db/country/${i18n.language}/${countryCode.toLowerCase()}.json`);
        return data.default; // Используем .default для импорта
      } catch (error) {
        console.error('Error loading country data:', error);
        return [];
      }
    };

    if (selectedCountry) {
      loadCountryData(selectedCountry.value).then(countryData => {
        const uniqueRegions = Array.from(new Set(countryData.map(item => item.admin_name)));
        setRegions(uniqueRegions.map(region => ({ label: region, value: region }))); // Убрали функцию t
        setAllCities(countryData);
        setSelectedRegion(null);
        setSelectedCity(null);
      });
    }
  }, [selectedCountry, i18n.language]);

  useEffect(() => {
    if (selectedRegion) {
      const citiesForRegion = allCities.filter(item => item.admin_name === selectedRegion.value);
      setFilteredCities(citiesForRegion.map(city => ({ label: city.city, value: city.city }))); // Убрали функцию t
      setSelectedCity(null);
    } else {
      setFilteredCities([]);
    }
  }, [allCities, selectedRegion]);

  return (
    <>
      <div className="relative py-20 h-auto bg-hero-filter bg-cover bg-bottom bg-no-repeat bg-fixed">
        <div className="absolute top-0 left-0 w-full h-full bg-bgDark"></div>
        <div className="relative container">
          <h1 className="text-white font-semibold text-center text-[2rem] mb-10">{t('hero_filter.title')}</h1>
          <form>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              <Select
                options={countriesOptions}
                value={selectedCountry}
                onChange={option => setSelectedCountry(option)}
                placeholder={t('hero_filter.select_country')}
                className="text-black shadow-md shadow-black dark:shadow-yellow-500"
                theme={theme => ({
                  ...theme,
                  borderRadius: 0,

                  colors: {
                    ...theme.colors,
                    neutral90: 'sky-900',
                    primary: '#0982c7',
                  },
                })}
              />

              <Select
                options={regions}
                value={selectedRegion}
                onChange={option => setSelectedRegion(option)}
                placeholder={t('hero_filter.select_region')}
                className="text-black shadow-md  shadow-black dark:shadow-yellow-500   "
              />
              <Select
                options={filteredCities}
                value={selectedCity}
                onChange={option => setSelectedCity(option)}
                placeholder={t('hero_filter.select_city')}
                className="text-black shadow-md shadow-black dark:shadow-yellow-500 "
              />
              <div>
                <button className="w-full h-full py-1 px-4 bg-sky-600 text-white shadow-md shadow-black dark:shadow-yellow-500">{t('hero_filter.btn_search')}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
