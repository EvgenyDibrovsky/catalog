import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BsFillHouseFill, BsChevronRight } from 'react-icons/bs';

const Breadcrumb = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { developerId } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    if (developerId) {
      import(`../../db/catalog/bd-developers/developer_${developerId}.json`)
        .then(({ default: developer }) => {
          setData(developer.developer_page_item);
        })
        .catch(error => {
          console.error('Failed to load developer data', error);
        });
    }
  }, [developerId]);

  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav aria-label="breadcrumb">
      <ul className="breadcrumb flex flex-col md:flex-row md:gap-2 mb-5 ">
        {pathnames.length > 0 ? (
          <li className="breadcrumb-item flex items-center gap-2">
            <BsFillHouseFill className="w-4 h-4 text-sky-500 dark:text-yellow-500" />
            <Link to="/">{t('pages.home.title')}</Link>
          </li>
        ) : (
          <li className="breadcrumb-item active" aria-current="page">
            {t('pages.home.title')}
          </li>
        )}

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          // Если последний элемент пути является developerId, используйте имя компании
          if (isLast && name === developerId && data) {
            return (
              <li key={name} className="breadcrumb-item active flex items-center gap-2" aria-current="page">
                <BsChevronRight className="w-3 h-3  text-slate-400 dark:text-yellow-200" />
                {data.name_company}
              </li>
            );
          }

          const possiblePrefixes = ['pages', 'pages_category', 'pages_category_item', 'name_company'];
          const prefix = possiblePrefixes.find(prefix => i18n.exists(`${prefix}.${name}.title`)) || 'pages';
          const translationKey = `${prefix}.${name}.title`;

          return isLast ? (
            <li key={name} className="breadcrumb-item active flex items-center gap-2" aria-current="page">
              <BsChevronRight className="w-3 h-3  text-slate-400 dark:text-yellow-200" />
              {t(translationKey)}
            </li>
          ) : (
            <li key={name} className="breadcrumb-item flex items-center gap-2">
              <BsChevronRight className="w-3 h-3  text-slate-400 dark:text-yellow-200" />
              <Link to={routeTo}>{t(translationKey)}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
