import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useCurrentLanguage from '../../../Hooks/useCurrentLanguage'

const DevelopersAboutPage = () => {
  const { developerId } = useParams()
  const [data, setData] = useState(null)
  const currentLanguage = useCurrentLanguage()

  useEffect(() => {
    import(`../../../db/catalog/bd-developers/developer_${developerId}.json`)
      .then(({ default: developer }) => {
        setData(developer.developer_page_item)
      })
      .catch(error => {
        console.error('Failed to load developer data', error)
      })
  }, [developerId])

  if (!data) return <div>Loading...</div>

  const {
    [currentLanguage]: {
      content: {
        title: contentTitle = 'N/A',
        description: contentDescription = 'N/A',
      } = {},
    } = {},
  } = data
  return (
    <>
      <div className=" bg-white dark:bg-darkBgContent p-4">
        <h1 className="text-black dark:text-white font-bold text-[1.2rem]">
          {contentTitle}
        </h1>
        <p className="text-black dark:text-white">{contentDescription}</p>
      </div>
    </>
  )
}
export default DevelopersAboutPage
