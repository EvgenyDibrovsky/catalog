import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useCurrentLanguage from '../../../Hooks/useCurrentLanguage'; // предполагая, что у вас есть такой хук

export default function DeveloperGeneralItem() {
  const { developerId } = useParams();
  const [data, setData] = useState(null);
  const currentLanguage = useCurrentLanguage(); // предполагая, что этот хук возвращает текущий язык, например, "EN"

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

  const contentTitle = data[currentLanguage]?.content?.title || 'No title available';
  const contentDescription = data[currentLanguage]?.content?.description || 'No description available';

  return (
    <div>
      <h1>{contentTitle}</h1>
      <p>{contentDescription}</p>
    </div>
  );
}
