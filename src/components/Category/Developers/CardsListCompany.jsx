import { useState, useEffect } from 'react';
import CardsListCompanyItem from './CardsListCompanyItem';
import { useTranslation } from 'react-i18next';
import useCurrentLanguage from '../../../Hooks/useCurrentLanguage';

export default function CardsListCompany() {
  const [data, setData] = useState([]);
  const { t } = useTranslation();
  const currentLanguage = useCurrentLanguage();

  useEffect(() => {
    // Создаем массив промисов для динамического импорта файлов JSON
    const importPromises = [
      import('../../../db/catalog/bd-developers/developer_1.json'),
      import('../../../db/catalog/bd-developers/developer_2.json'),
      import('../../../db/catalog/bd-developers/developer_3.json'),
      import('../../../db/catalog/bd-developers/developer_4.json'),
      // добавьте больше импортов по мере необходимости
    ];

    // Загружаем все файлы и устанавливаем данные
    Promise.all(importPromises).then(developers => {
      const newData = developers.map(({ default: developer }, index) => {
        const languageSpecificData = developer.developer_page_item[currentLanguage];
        const commonData = developer.developer_page_item;
        const description = languageSpecificData && languageSpecificData.company ? languageSpecificData.company.description : '';
        return {
          id: index + 1, // или другой способ получения id
          description,
          logo: commonData.logo,
          name_company: commonData.name_company,
          link_site: commonData.link_site,
        };
      });
      setData(newData);
    });
  }, [currentLanguage]);

  if (data.length === 0) {
    return <p className="text-[2rem] text-black dark:text-white text-center">{t('nothing-found')}</p>;
  }

  return (
    <ul className="grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-3 gap-6">
      {data.map(({ id, logo, name_company, description }, index) => (
        <CardsListCompanyItem key={index} id={id} logo={logo} name_company={name_company} description={description} />
      ))}
    </ul>
  );
}
