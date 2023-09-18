import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NavHeader() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center ">
      <ul className="list-disc marker:text-sky-500 dark:marker:text-yellow-500 group ">
        <li>
          <NavLink to="/about" className="duration-200 hover:text-sky-500 hover:dark:text-yellow-500 [&.active]:text-sky-500 dark:[&.active]:text-yellow-500">
            {t('nav_menu.nav_item_1')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className=" duration-200 hover:text-sky-500 hover:dark:text-yellow-500 [&.active]:text-sky-500 dark:[&.active]:text-yellow-500">
            {t('nav_menu.nav_item_2')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className=" duration-200 hover:text-sky-500 hover:dark:text-yellow-500 [&.active]:text-sky-500 dark:[&.active]:text-yellow-500">
            {t('nav_menu.nav_item_3')}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
