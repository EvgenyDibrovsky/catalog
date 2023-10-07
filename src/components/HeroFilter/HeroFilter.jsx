import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import dbCategory from '../../db/catalog/filter.json';
import useCurrentLanguage from '../../Hooks/useCurrentLanguage';
import { BsSearch } from 'react-icons/bs';

const selectStyles = {
  control: base => ({
    ...base,
    height: '3rem',
    minHeight: '3rem',
    border: 0,
  }),
};

export default function HeroFilter() {
  const currentLanguage = useCurrentLanguage();
  const { t, i18n } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [regions, setRegions] = useState([]);
  const [allCities, setAllCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  // Изменили на selectedRadio
  const [selectedRadio, setSelectedRadio] = useState(null);
  const [currentCheckboxes, setCurrentCheckboxes] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [inputValues, setInputValues] = useState({});

  const toggleCheckbox = value => {
    setSelectedCheckboxes(prevState => (prevState.includes(value) ? prevState.filter(item => item !== value) : [...prevState, value]));
  };
  const toggleRadio = radioName => {
    setSelectedRadio(radioName);
    const currentCategory = radioboxData.find(item => item.title === radioName);
    setCurrentCheckboxes(currentCategory ? currentCategory.checkboxes : []);
  };
  const handleInputChange = (title, value) => {
    setInputValues({
      ...inputValues,
      [title]: value,
    });
  };

  const countriesOptions = [
    { value: 'PL', label: t('Польша') },
    { value: 'UA', label: t('Украина') },
  ];

  const radioboxData = dbCategory.map(item => {
    const languageSpecificData = item.category[currentLanguage] || {};
    if (!languageSpecificData.option) {
      languageSpecificData.option = []; // добавляем пустой массив, если опций нет
    }
    return {
      ...languageSpecificData,
      id: item.category.id,
      checkboxes: languageSpecificData.option,
    };
  });

  useEffect(() => {
    const loadCountryData = async countryCode => {
      try {
        const data = await import(`../../db/country/${i18n.language}/${countryCode.toLowerCase()}.json`);
        return data.default;
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
      <div className="relative pt-20 pb-28 h-auto bg-hero-filter bg-cover bg-bottom bg-no-repeat bg-fixed shadow-md">
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
                className="text-black shadow-md "
                theme={theme => ({
                  ...theme,
                  borderRadius: 0,
                  border: 0,
                  colors: {
                    ...theme.colors,
                    primary: '#0982c7',
                  },
                })}
                styles={selectStyles}
              />

              <Select
                options={regions}
                value={selectedRegion}
                onChange={option => setSelectedRegion(option)}
                placeholder={t('hero_filter.select_region')}
                className="text-black shadow-md"
                theme={theme => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary: '#0982c7',
                  },
                })}
                styles={selectStyles}
              />
              <Select
                options={filteredCities}
                value={selectedCity}
                onChange={option => setSelectedCity(option)}
                placeholder={t('hero_filter.select_city')}
                className="text-black shadow-md"
                theme={theme => ({
                  ...theme,
                  borderRadius: 0,
                  colors: {
                    ...theme.colors,
                    primary: '#0982c7',
                  },
                })}
                styles={selectStyles}
              />
              <div>
                <button className="w-full h-full flex items-center justify-center gap-4 py-1 px-4 bg-sky-600 dark:bg-yellow-500 text-white shadow-md duration-200 group">
                  <BsSearch className="duration-200 group-hover:scale-110" />
                  {t('hero_filter.btn_search')}
                </button>
              </div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-10">
              {radioboxData.map(item => (
                <li
                  key={item.id}
                  className={`text-black bg-white h-12 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-sky-500 dark:hover:shadow-yellow-500 ${
                    selectedRadio === item.title ? 'shadow-sky-500' : ''
                  } dark:${selectedRadio === item.title ? 'shadow-yellow-500' : ''}`}
                  onClick={() => toggleRadio(item.title)}
                >
                  {item.title}
                  <input type="radio" name="categoryRadio" className="hidden" checked={selectedRadio === item.title} onChange={() => {}} />
                </li>
              ))}
            </ul>

            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {currentCheckboxes.map((option, index) =>
                option.type === 'checkbox' ? (
                  <li
                    key={index}
                    className={`text-black bg-white h-12 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-sky-500 ${
                      selectedCheckboxes.includes(option.value) ? 'shadow-sky-500' : ''
                    }`}
                    onClick={() => toggleCheckbox(option.value)}
                  >
                    <label>{option.value}</label>
                    <input className="sr-only " type="checkbox" value={option.value} checked={selectedCheckboxes.includes(option.value)} onChange={() => toggleCheckbox(option.value)} />
                  </li>
                ) : (
                  <li key={index} className="filter-input-hover text-black bg-white h-12 flex items-center justify-center cursor-pointer shadow-lg hover:shadow-sky-500  dark:hover:shadow-yellow-500 ">
                    <label className="h-full w-full px-2 py-1">
                      <input
                        type="text"
                        value={inputValues[option.value] || ''}
                        onChange={e => handleInputChange(option.value, e.target.value)}
                        placeholder={option.value}
                        className="h-full w-full text-[1.2rem] outline-none text-center"
                      />
                    </label>
                  </li>
                )
              )}
            </ul>
          </form>
        </div>
      </div>
    </>
  );
}
