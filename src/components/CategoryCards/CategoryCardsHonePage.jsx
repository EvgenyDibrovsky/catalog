import { Link } from 'react-router-dom';
import dbCategory from '../../db/catalog/categoty.json';
import useCurrentLanguage from '../../Hooks/useCurrentLanguage';

export default function CategoryCardsHonePage() {
  const currentLanguage = useCurrentLanguage();

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
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {data.map(item => (
        <Link to={`/catalog/${item.link_page}`} key={item.id}>
          <li
            className="p-0 h-48 bg-hero-filter bg-cover bg-center bg-no-repeat shadow-md shadow-gray-400 dark:shadow-yellow-500 duration-200 hover:p-6"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL + item.bg})`,
            }}
          >
            <div className="w-full h-full flex justify-center items-center bg-bgDark">
              <h3 className=" text-[1.5rem] text-white font-semibold ">{item.title}</h3>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}
