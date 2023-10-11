import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import useCurrentLanguage from '../../Hooks/useCurrentLanguage'

export default function CategoryCardsHomePage() {
  const [categories, setCategories] = useState([])
  const currentLanguage = useCurrentLanguage()
  const API_URL = process.env.REACT_APP_API_URL

  useEffect(() => {
    axios
      .get(`${API_URL}/api/categories`)
      .then(({ data }) => {
        setCategories(data)
      })
      .catch(error => {
        console.error('Ошибка при получении категорий:', error)
      })
  }, [API_URL])

  const data = categories.map(item => {
    const {
      [currentLanguage]: languageSpecificData,
      id,
      bg,
      link_page,
    } = item.category

    return {
      ...languageSpecificData,
      id,
      bg,
      link_page,
    }
  })

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {data.map(({ id, link_page, bg, title }) => (
        <li
          className="p-0 h-48 bg-hero-filter bg-cover bg-center bg-no-repeat hover:shadow-md hover:shadow-gray-400 dark:hover:shadow-gray-400 duration-200 hover:p-6 group"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + bg})`,
          }}>
          <Link key={id} to={`/catalog/${link_page}`}>
            <div className="w-full h-full flex justify-center items-center bg-bgDark group-hover:border-2 group-hover:border-sky-500 dark:group-hover:border-yellow-500">
              <h3 className=" text-[1.5rem] text-white font-semibold ">
                {title}
              </h3>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
