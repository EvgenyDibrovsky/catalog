import React from 'react';

export default function CardsListCompanyItem({ logo, name_company, description, link }) {
  return (
    <li className="relative group h-auto w-auto p-4 shadow-md transition-all duration-500 dark:shadow-white rounded-md overflow-hidden hover:shadow-sky-500 dark:hover:shadow-yellow-500">
      <a href={link} className="w-full h-full">
        <div className="flex items-start md:items-center justify-between flex-col-reverse sm:flex-row mb-2">
          <h3 className=" text-black dark:text-white font-bold ">{name_company}</h3>

          {logo && <img src={process.env.PUBLIC_URL + logo} alt={name_company} className="h-5 w-auto mb-2 sm:mb-0" />}
        </div>
        <p className="text-black dark:text-white">{description.length > 200 ? description.substring(0, description.lastIndexOf(' ', 200)) + '...' : description}</p>
      </a>
    </li>
  );
}
