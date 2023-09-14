import dbBrands from '../db/brands.json';
import { useState, useEffect } from 'react';
import CardsListItem from './CardsListItem';
import { useTranslation } from 'react-i18next';

export default function CardsList({ country, region }) {
  // добавьте region в качестве пропа
  const [data, setData] = useState([]);
  const { t } = useTranslation();
  useEffect(() => {
    let filteredData = dbBrands;

    if (country) {
      filteredData = filteredData.filter(brand => brand.country === country);
    }

    if (region) {
      filteredData = filteredData.filter(brand => brand.region === region);
    }

    setData(filteredData);
  }, [country, region]); // обновите useEffect, чтобы он отслеживал изменения region

  if (data.length === 0) {
    // если данные не найдены, отобразите сообщение об ошибке
    return (
      <p className="text-[2rem] text-black dark:text-white text-center">
        {t('nothing-found')}
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6">
      {data.map(({ image, title, text, link }, index) => (
        <CardsListItem
          key={index}
          image={image}
          title={title}
          text={text}
          link={link}
        />
      ))}
    </ul>
  );
}
