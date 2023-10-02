import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

export default function DeveloperGeneralItem() {
  const { developerId } = useParams();
  const [data, setData] = useState(null);
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

  const { name_company = 'N/A', nip = 'N/A', logo, link_site = 'N/A', contacts: { address = 'N/A', nr_tel_1 = 'N/A', nr_tel_2 = 'N/A', email_1 = 'N/A', email_2 = 'N/A' } = {} } = data;

  return (
    <div className="flex gap-4">
      <div className="w-8/12">
        <div className="flex items-center gap-4 mb-4">
          <NavLink
            to="about"
            className="py-2 px-4 border duration-200 border-sky-500 hover:bg-sky-500 hover:text-white dark:border-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-black text-black dark:text-white [&.active]:bg-sky-500 [&.active]:text-white dark:[&.active]:bg-yellow-500 dark:[&.active]:text-black"
          >
            О компании
          </NavLink>
          <NavLink
            to="projects"
            className="py-2 px-4 border duration-200 border-sky-500 hover:bg-sky-500 hover:text-white dark:border-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-black text-black dark:text-white [&.active]:bg-sky-500 [&.active]:text-white dark:[&.active]:bg-yellow-500 dark:[&.active]:text-black"
          >
            Проекты
          </NavLink>
          <NavLink
            to="reviews"
            className="py-2 px-4 border duration-200 border-sky-500 hover:bg-sky-500 hover:text-white dark:border-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-black text-black dark:text-white [&.active]:bg-sky-500 [&.active]:text-white dark:[&.active]:bg-yellow-500 dark:[&.active]:text-black"
          >
            Отзывы
          </NavLink>
        </div>
        <div className=" bg-white dark:bg-darkBgContent p-5 mb-4">
          <Outlet />
        </div>
      </div>
      <div className="w-4/12">
        <div className="bg-white dark:bg-darkBgContent flex flex-col gap-2 p-5 mb-4">
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
        <div className="bg-white dark:bg-darkBgContent p-5 mb-4">
          <h3>Написать сообшение</h3>
        </div>
      </div>
    </div>
  );
}
