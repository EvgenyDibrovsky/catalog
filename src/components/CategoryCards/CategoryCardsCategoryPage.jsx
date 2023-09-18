import { Link, useLocation } from 'react-router-dom';
import dbCategory from '../../db/categoty.json';
import useCurrentLanguage from '../../Hooks/useCurrentLanguage';

export default function CategoryCardsHonePage() {
  const currentLanguage = useCurrentLanguage();
  const location = useLocation();

  const data = dbCategory.map(item => {
    const languageSpecificData = item.category[currentLanguage];

    return {
      ...languageSpecificData,
      id: item.category.id,
      bg: item.category.bg,
      link_page: item.category.link_page,
    };
  });

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 ">
      {data.map(item => (
        <Link to={item.link_page} key={item.id}>
          <li
            className={`flex justify-center items-center h-12 py-2 px-4  shadow-md shadow-gray-400 dark:shadow-yellow-500 duration-200 hover:shadow-sky-500  ${
              location.pathname === item.link_page ? 'shadow-sky-500 dark:shadow-sky-500 pointer-events-none' : ''
            }`}
          >
            <h3 className="  font-semibold ">{item.title}</h3>
          </li>
        </Link>
      ))}
    </ul>
  );
}
