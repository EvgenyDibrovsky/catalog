import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useCurrentLanguage from '../../../Hooks/useCurrentLanguage';

export default function DeveloperGeneralItem() {
  const { developerId } = useParams();
  const [data, setData] = useState(null);
  const currentLanguage = useCurrentLanguage();
  const [activeTab, setActiveTab] = useState('projects');

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
    <div className="flex gap-4">
      <div className="w-9/12 flex flex-col gap-4">
        <div className=" bg-white dark:bg-darkBgContent p-5">
          <h1 className="text-black dark:text-white font-bold text-[1.2rem]">{contentTitle}</h1>
          <p className="text-black dark:text-white">{contentDescription}</p>
        </div>
        <div>
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 ${activeTab === 'projects' ? 'bg-sky-500 dark:bg-yellow-500 text-white dark:text-black' : 'bg-gray-200 text-black'}`}
              onClick={() => setActiveTab('projects')}
            >
              Проекты
            </button>
            <button className={`px-4 py-2 ${activeTab === 'reviews' ? 'bg-sky-500  dark:bg-yellow-500 text-white dark:text-black' : 'bg-gray-200 text-black'}`} onClick={() => setActiveTab('reviews')}>
              Отзывы
            </button>
          </div>
          <div className="bg-white dark:bg-darkBgContent p-5">
            {activeTab === 'projects' && (
              <div>
                <p>Контент для Проекты</p>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <p>Контент для Отзывы</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-3/12 flex flex-col gap-4">
        <div className="bg-white dark:bg-darkBgContent p-5 ">
          {logo && <img src={process.env.PUBLIC_URL + logo} alt={name_company} className="h-5 w-auto mb-2 sm:mb-0" />}
          {name_company && <p className="text-black dark:text-white font-bold">{name_company}</p>}
          {nip && (
            <div className="flex gap-2">
              <p className="text-black dark:text-white font-bold">Nip:</p>
              <p className="text-black dark:text-white">{nip}</p>
            </div>
          )}
          {link_site && (
            <div className="flex gap-2">
              <p className="text-black dark:text-white font-bold">Сайт:</p>
              <p className="text-black dark:text-white">{link_site}</p>
            </div>
          )}
          {address && (
            <div className="flex gap-2">
              <p className="text-black dark:text-white font-bold">Адрес:</p>
              <p className="text-black dark:text-white">{address}</p>
            </div>
          )}
          {nr_tel_1 && (
            <div className="flex gap-2">
              <p className="text-black dark:text-white font-bold">Тел:</p>
              <p className="text-black dark:text-white">{nr_tel_1}</p>
            </div>
          )}
          {nr_tel_2 && (
            <div className="flex gap-2">
              <p className="text-black dark:text-white font-bold">Тел:</p>
              <p className="text-black dark:text-white">{nr_tel_2}</p>
            </div>
          )}
          {email_1 && (
            <div className="flex gap-2">
              <p className="text-black dark:text-white font-bold">Email:</p>
              <p className="text-black dark:text-white">{email_1}</p>
            </div>
          )}
          {email_2 && (
            <div className="flex gap-2">
              <p className="text-black dark:text-white font-bold">Email:</p>
              <p className="text-black dark:text-white">{email_2}</p>
            </div>
          )}
        </div>
        <div className="bg-white dark:bg-darkBgContent p-5 ">
          <h3>Написать сообшение</h3>
        </div>
      </div>
    </div>
  );
}
