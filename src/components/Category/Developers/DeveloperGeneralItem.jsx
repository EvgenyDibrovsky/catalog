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
    <div className="flex justify-between  gap-4">
      <div className="w-full">
        <div className="flex items-center gap-4 mb-4">
          <NavLink
            to="about"
            className="py-2 px-4 border duration-200 border-sky-500 hover:bg-sky-500 hover:text-white dark:border-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-black text-black dark:text-white [&.active]:bg-sky-500 [&.active]:text-white dark:[&.active]:bg-yellow-500 dark:[&.active]:text-black"
          >
            {t('pages_category.developers.page_item.about')}
          </NavLink>
          <NavLink
            to="projects"
            className="py-2 px-4 border duration-200 border-sky-500 hover:bg-sky-500 hover:text-white dark:border-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-black text-black dark:text-white [&.active]:bg-sky-500 [&.active]:text-white dark:[&.active]:bg-yellow-500 dark:[&.active]:text-black"
          >
            {t('pages_category.developers.page_item.projects')}
          </NavLink>
          <NavLink
            to="reviews"
            className="py-2 px-4 border duration-200 border-sky-500 hover:bg-sky-500 hover:text-white dark:border-yellow-500 dark:hover:bg-yellow-500 dark:hover:text-black text-black dark:text-white [&.active]:bg-sky-500 [&.active]:text-white dark:[&.active]:bg-yellow-500 dark:[&.active]:text-black"
          >
            {t('pages_category.developers.page_item.reviews')}
          </NavLink>
        </div>
        <div className=" bg-white dark:bg-darkBgContent p-5 mb-4">
          <Outlet />
        </div>
      </div>
      <div className="max-w-[22rem]">
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
              <a href={`https://${link_site}`} target="_blank" rel="noreferrer" className="text-black dark:text-white hover:text-sky-500 dark:hover:text-yellow-500 hover:underline">
                {link_site}
              </a>
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
                {nr_tel_1 && (
                  <a href={`tel:${nr_tel_1}`} className="text-black dark:text-white hover:text-sky-500 dark:hover:text-yellow-500 hover:underline">
                    {nr_tel_1}
                  </a>
                )}
                {nr_tel_2 && (
                  <a href={`tel:${nr_tel_2}`} className="text-black dark:text-white hover:text-sky-500 dark:hover:text-yellow-500 hover:underline">
                    {nr_tel_2}
                  </a>
                )}
              </div>
            </div>
          )}

          {(email_1 || email_2) && (
            <div className="flex gap-2">
              <p className="text-black dark:text-white font-bold w-3/12">{t('pages_category.developers.page_item.email')}:</p>
              <div className="flex flex-col">
                {email_1 && (
                  <a href={`mailto:${email_1}`} className="text-black dark:text-white hover:text-sky-500 dark:hover:text-yellow-500 hover:underline">
                    {email_1}
                  </a>
                )}
                {email_2 && (
                  <a href={`mailto:${email_2}`} className="text-black dark:text-white hover:text-sky-500 dark:hover:text-yellow-500 hover:underline">
                    {email_2}
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="bg-white dark:bg-darkBgContent p-5 mb-4">
          <p> {t('pages_category.developers.page_item.contact_form')}</p>
          <form action="">
            <label className="w-full text-black dark:text-white">
              <input
                type="text"
                placeholder="Имя и Фамилия"
                required
                className="w-full h-12 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              />
            </label>

            <label className="text-black dark:text-white">
              <input
                type="email"
                placeholder="example@example.com"
                required
                className="w-full h-12 bg-white dark:bg-black border border-borderLabelForm dark:border-white px-2 rounded-md focus:outline-none mt-2"
              />
            </label>

            <label className="text-black dark:text-white">
              <textarea
                name="message"
                placeholder="Напишите сообщение"
                required
                className="w-full h-32  bg-white dark:bg-black border border-borderLabelForm dark:border-white p-2 rounded-md focus:outline-none mt-2 mb-5 resize-none"
              />
            </label>

            <button type="submit" className="btn-contact-form">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
