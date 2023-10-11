import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { BsFillHouseFill, BsChevronRight } from 'react-icons/bs'
import useCurrentLanguage from '../../Hooks/useCurrentLanguage'

const Breadcrumb = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const { developerId } = useParams()
  const API_URL = process.env.REACT_APP_API_URL
  const [categories, setCategories] = useState([])
  const [developerData, setDeveloperData] = useState(null)
  const currentLanguage = useCurrentLanguage()
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

  useEffect(() => {
    if (developerId) {
      import(`../../db/catalog/bd-developers/developer_${developerId}.json`)
        .then(({ default: developer }) => {
          setDeveloperData(developer.developer_page_item)
        })
        .catch(error => {
          console.error('Failed to load developer data', error)
        })
    }
  }, [developerId])

  const pathnames = location.pathname.split('/').filter(x => x)

  return (
    <nav aria-label="breadcrumb">
      <ul className="breadcrumb flex flex-col md:flex-row md:gap-2 mb-5 ">
        {pathnames.length > 0 ? (
          <li className="breadcrumb-item flex items-center gap-2">
            <BsFillHouseFill className="w-4 h-4 text-sky-500 dark:text-yellow-500" />
            <Link to="/">{t('pages.home.title')}</Link>
          </li>
        ) : (
          <li className="breadcrumb-item active" aria-current="page">
            {t('pages.home.title')}
          </li>
        )}

        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
          const isLast = index === pathnames.length - 1
          const category = categories.find(
            cat => cat.category.link_page === name
          )

          if (category) {
            return (
              <li
                key={name}
                className={`breadcrumb-item ${
                  isLast ? 'active' : ''
                } flex items-center gap-2`}>
                <BsChevronRight className="w-3 h-3 text-slate-400 dark:text-yellow-200" />
                {isLast ? (
                  category.category[currentLanguage].title
                ) : (
                  <Link to={routeTo}>
                    {category.category[currentLanguage].title}
                  </Link>
                )}
              </li>
            )
          }

          if (name === developerId && developerData) {
            return (
              <li
                key={name}
                className={`breadcrumb-item ${
                  isLast ? 'active' : ''
                } flex items-center gap-2`}>
                <BsChevronRight className="w-3 h-3 text-slate-400 dark:text-yellow-200" />
                {developerData.name_company}
              </li>
            )
          }

          // Возвращаем стандартное значение в случае, если это не категория или developerId
          return (
            <li
              key={name}
              className={`breadcrumb-item ${
                isLast ? 'active' : ''
              } flex items-center gap-2`}>
              <BsChevronRight className="w-3 h-3 text-slate-400 dark:text-yellow-200" />
              {isLast ? (
                t(`pages.${name}.title`)
              ) : (
                <Link to={routeTo}>{t(`pages.${name}.title`)}</Link>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Breadcrumb
