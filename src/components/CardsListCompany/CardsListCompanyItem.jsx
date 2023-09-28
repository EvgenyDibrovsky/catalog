import React from 'react';

export default function CardsListCompanyItem({ logo, name_company, description, link }) {
  return (
    <li className="relative flex items-center justify-between  group  h-40 w-auto p-2 shadow-md transition-all duration-500 dark:shadow-white rounded-md overflow-hidden">
      <a href={link} className="w-full h-full ">
        <div className="relative z-10">
          <h3 className="text-black dark:text-white font-bold mb-2">{name_company}</h3>
          <p className="text-black dark:text-white"> {description}</p>
        </div>
        <img
          src={process.env.PUBLIC_URL + logo}
          alt={name_company}
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0 w-40 h-auto opacity-20 duration-200 group-hover:scale-90"
        />
      </a>
    </li>
  );
}
