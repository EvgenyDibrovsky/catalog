import { NavLink } from 'react-router-dom';
import useCurrentLanguage from '../../Hooks/useCurrentLanguage';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CategoryCardsHonePage() {
  const [categories, setCategories] = useState([]);
  const currentLanguage = useCurrentLanguage();

  useEffect(() => {
    // Получите категории из вашего API
    axios
      .get('/api/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Ошибка при получении категорий:', error);
      });
  }, []);

  const data = categories.map(item => {
    const languageSpecificData = item.category[currentLanguage];

    return {
      ...languageSpecificData,
      id: item.category.id,
      bg: item.category.bg,
      link_page: item.category.link_page,
    };
  });

  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 ">
          {data.map(item => (
            <li key={item.id} className="shadow-md">
              <NavLink
                to={item.link_page}
                className="flex justify-center items-center h-12 py-2 px-4 shadow-md shadow-gray-400 dark:shadow-gray-400 duration-200 hover:shadow-sky-500 dark:hover:shadow-yellow-500 [&.active]:shadow-sky-500  dark:[&.active]:shadow-yellow-500 "
              >
                <h3 className="font-semibold">{item.title}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
