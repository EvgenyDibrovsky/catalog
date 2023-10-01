import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useCurrentLanguage from '../../../Hooks/useCurrentLanguage';

export default function DeveloperGeneralItem() {
  const { developerId } = useParams();
  const [data, setData] = useState(null);
  const currentLanguage = useCurrentLanguage();

  useEffect(() => {
    import(`../../../db/catalog/bd-developers/developer_${developerId}.json`)
      .then(({ default: developer }) => {
        setData(developer.developer_page_item);
      })
      .catch(error => {
        console.error('Failed to load developer data', error);
      });
  }, [developerId]);

  if (!data) return <div>Loading...</div>;

  const {
    name_company = 'N/A',
    nip = 'N/A',
    logo,
    link_site = 'N/A',
    contacts: { address = 'N/A', nr_tel_1 = 'N/A', nr_tel_2 = 'N/A', email_1 = 'N/A', email_2 = 'N/A' } = {},
    [currentLanguage]: { content: { title: contentTitle = 'N/A', description: contentDescription = 'N/A' } = {} } = {},
  } = data;

  return (
    <div className="flex">
      <div className="w-9/12">
        <h1 className="text-black dark:text-white font-bold text-[1.2rem]">{contentTitle}</h1>
        <p className="text-black dark:text-white">{contentDescription}</p>
      </div>
      <div className="w-3/12">
        <p>{name_company}</p>
        <p>{nip}</p>
        {logo && <img src={process.env.PUBLIC_URL + logo} alt={name_company} className="h-5 w-auto mb-2 sm:mb-0" />}
        <p>{link_site}</p>
        <p>{address}</p>
        <p>{nr_tel_1}</p>
        <p>{nr_tel_2}</p>
        <p>{email_1}</p>
        <p>{email_2}</p>
      </div>
    </div>
  );
}
