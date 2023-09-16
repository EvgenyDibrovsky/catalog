import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

export default function NavHeader() {
  // const { t } = useTranslation();

  return (
    <div className="flex items-center ">
      <ul className="list-disc">
        <li>
          <Link
            to="#"
            className="duration-200 hover:text-hoverMenuHeaader hover:dark:text-yellow-500"
          >
            Link 1
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="  duration-200 hover:text-hoverMenuHeaader hover:dark:text-yellow-500 "
          >
            Link 2
          </Link>
        </li>
        <li>
          <Link
            to="#"
            className="  duration-200 hover:text-hoverMenuHeaader hover:dark:text-yellow-500 "
          >
            Link 3
          </Link>
        </li>
      </ul>
    </div>
  );
}
