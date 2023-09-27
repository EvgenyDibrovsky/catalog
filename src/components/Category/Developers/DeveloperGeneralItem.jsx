import { useEffect, useState } from 'react';

export default function DeveloperGeneralItem({ companyId }) {
  console.log('Компонент DeveloperGeneralItem монтируется');

  const [developerData, setDeveloperData] = useState(null);

  // Загрузка данных при монтировании компонента
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/db/catalog/bd-developers/developer_${companyId}.json`);

        if (!response.ok) {
          console.error('Ошибка загрузки данных:', response.statusText);
          return;
        }

        const result = await response.json();
        console.log('Полученные данные:', result);
        setDeveloperData(result.developer_page_item);
      } catch (error) {
        console.error('Ошибка:', error);
      }
    };

    fetchData();
  }, [companyId]);

  // Если данные еще не загружены, отображаем загрузку
  if (!developerData) {
    return <div>Loading...</div>;
  }

  // Рендер компонента с загруженными данными
  return (
    <div>
      <h1>{developerData.name_company}</h1>
      {/* Отображение других данных компании */}
    </div>
  );
}
