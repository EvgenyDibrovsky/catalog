import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import useCurrentLanguage from '../../Hooks/useCurrentLanguage'

export default function CategoryCardsHonePage() {
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
    <>
      <div className="flex items-center justify-between gap-4">
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 ">
          {data.map(({ id, link_page, title }) => (
            <li key={id} className="shadow-md">
              <NavLink
                to={`${link_page}`}
                className="flex justify-center items-center h-12 py-2 px-4 shadow-md shadow-gray-400 dark:shadow-gray-400 duration-200 hover:shadow-sky-500 dark:hover:shadow-yellow-500 [&.active]:shadow-sky-500  dark:[&.active]:shadow-yellow-500 ">
                <h3 className="font-semibold">{title}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
