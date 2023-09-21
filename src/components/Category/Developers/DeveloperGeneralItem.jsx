// DeveloperGeneralItem.js
import React, { useEffect, useState } from 'react';
import useCurrentLanguage from '../../../Hooks/useCurrentLanguage';

export default function DeveloperGeneralItem({ developerId }) {
  const currentLanguage = useCurrentLanguage();
  const [data, setData] = useState(null);

  useEffect(() => {
    import(`../../../db/catalog/bd-developers/${developerId}.json`)
      .then(module => {
        console.log('Загруженные данные:', module.default);
        const item = module.default[0];
        const languageSpecificData = item.developer_page_item[currentLanguage];
        console.log('Данные для текущего языка:', languageSpecificData);

        const result = {
          ...languageSpecificData,
          id: item.developer_page_item.id,
          nameCompany: item.developer_page_item.name_company,
          nipCompany: item.developer_page_item.nip,
          logoCompany: item.developer_page_item.logo,
        };
        console.log(result);
        setData(result);
      })
      .catch(error => {
        console.error('Ошибка загрузки данных:', error);
      });
  }, [developerId, currentLanguage]);

  if (!data) return null; // или <LoadingComponent /> если у вас есть компонент загрузки

  return (
    <>
      <div className="my-20">
        <h1 className="text-red-500 text-[2rem]">{data['nameCompany']}</h1>
        <h1 className="text-red-500 text-[2rem]">{data['nipCompany']}</h1>
      </div>
    </>
  );
}
