import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NavHeader() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center ">
      <ul className="list-disc">
        <li>
          <Link
            to="/about"
            className="duration-200 hover:text-hoverMenuHeaader hover:dark:text-yellow-500"
          >
            {t('nav_menu.nav_item_1')}
          </Link>
        </li>
        <li>
          <Link
            to="/catalog"
            className=" duration-200 hover:text-hoverMenuHeaader hover:dark:text-yellow-500 "
          >
            {t('nav_menu.nav_item_2')}
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className=" duration-200 hover:text-hoverMenuHeaader hover:dark:text-yellow-500 "
          >
            {t('nav_menu.nav_item_3')}
          </Link>
        </li>
      </ul>
    </div>
  );
}
