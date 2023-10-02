import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useCurrentLanguage from '../../../Hooks/useCurrentLanguage';
import { useTranslation } from 'react-i18next';

export default function DeveloperGeneralItem() {
  const { developerId } = useParams();
  const [data, setData] = useState(null);
  const currentLanguage = useCurrentLanguage();
  const [activeTab, setActiveTab] = useState('projects');
  const { t } = useTranslation();
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
      <div className="w-8/12 flex flex-col gap-4">
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
      <div className="w-4/12 flex flex-col gap-4">
        <div className="bg-white dark:bg-darkBgContent flex flex-col gap-2 p-5 ">
          {logo && <img src={process.env.PUBLIC_URL + logo} alt={name_company} className="h-10 object-contain mb-2 sm:mb-2 mr-auto" />}

          {name_company && <p className="text-black dark:text-white font-bold text-[1.1rem] mb-1">{name_company}</p>}

          {nip && (
            <div className="flex gap-2">
              <p className="text-black dark:text-white font-bold w-3/12">{t('pages_category.developers.page_item.nip')}:</p>
              <p className="text-black dark:text-white">{nip}</p>
            </div>
          )}
          {link_site && (
            <div className="flex gap-2">
              <p className="text-black dark:text-white font-bold w-3/12">{t('pages_category.developers.page_item.www')}:</p>
              <p className="text-black dark:text-white">{link_site}</p>
            </div>
          )}
          {address && (
            <div className="flex gap-2">
              <p className="text-black dark:text-white font-bold w-3/12">{t('pages_category.developers.page_item.address')}:</p>
              <p className="text-black dark:text-white">{address}</p>
            </div>
          )}
          {(nr_tel_1 || nr_tel_2) && (
            <div className="flex gap-2">
              <p className="text-black dark:text-white font-bold w-3/12">{t('pages_category.developers.page_item.tel')}:</p>
              <div className="flex flex-col">
                {nr_tel_1 && <p className="text-black dark:text-white">{nr_tel_1}</p>}
                {nr_tel_2 && <p className="text-black dark:text-white">{nr_tel_2}</p>}
              </div>
            </div>
          )}

          {(email_1 || email_2) && (
            <div className="flex gap-2">
              <p className="text-black dark:text-white font-bold w-3/12">{t('pages_category.developers.page_item.email')}:</p>
              <div className="flex flex-col">
                {email_1 && <p className="text-black dark:text-white">{email_1}</p>}
                {email_2 && <p className="text-black dark:text-white">{email_2}</p>}
              </div>
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
