import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function DeveloperGeneralItem() {
  const { developerId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    import(`../../../db/catalog/bd-developers/developer_${developerId}.json`)
      .then(({ default: developer }) => {
        setData(developer.developer_page_item);
      })
      .catch(error => {
        console.error('Failed to load developer data', error);
        // Установите состояние ошибки, чтобы отобразить сообщение об ошибке пользователю
      });
  }, [developerId]);

  if (!data) return <div>Loading...</div>;

  return <div>{/* Рендерите контент, используя данные */}</div>;
}
