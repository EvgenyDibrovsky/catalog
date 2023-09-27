import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BsFillHouseFill, BsChevronRight } from 'react-icons/bs';

const Breadcrumb = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <nav aria-label="breadcrumb">
      <ul className="breadcrumb flex gap-4">
        {pathnames.length > 0 ? (
          <li className="breadcrumb-item flex items-center gap-2">
            <BsFillHouseFill className="w-4 h-4 text-black dark:text-yellow-500" />
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
          const prefix = index === 2 ? 'pages_category' : 'pages';
          const translationKey = `${prefix}.${name}.title`;

          return isLast ? (
            <li key={name} className="breadcrumb-item active flex items-center gap-2" aria-current="page">
              <BsChevronRight className="w-3 h-3  text-slate-600 dark:text-yellow-200" />
              {t(translationKey)} {/* Использование сформированного ключа */}
            </li>
          ) : (
            <li key={name} className="breadcrumb-item flex items-center gap-2">
              <BsChevronRight className="w-3 h-3  text-slate-600 dark:text-yellow-200" />
              <Link to={routeTo}>{t(translationKey)}</Link> {/* Использование сформированного ключа */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
