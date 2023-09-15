import dbBrands from '../../db/brands.json';
import { useState, useEffect } from 'react';
import CardsListCompanyItem from './CardsListCompanyItem';
import { useTranslation } from 'react-i18next';

export default function CardsListCompany() {
  const [data, setData] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    setData(dbBrands);
  }, []); // No dependencies, so useEffect will run only once after the initial render

  if (data.length === 0) {
    return (
      <p className="text-[2rem] text-black dark:text-white text-center">
        {t('nothing-found')}
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-6 gap-6">
      {data.map(({ image, title, text, link }, index) => (
        <CardsListCompanyItem
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
