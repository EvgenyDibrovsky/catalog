import MetaTags from '../../../components/MetaTags/MetaTags'
import { useTranslation } from 'react-i18next'
import PageTitleCategory from 'components/PageSettings/PageTitleCategory'
import CardsListCompany from '../../../components/Category/Developers/CardsListCompany'

const DevelopersPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <MetaTags
        metaTitle={t('pages_category.developers.meta_title')}
        metaDescription={t('pages_category.developers.meta_description')}
      />
      <div>
        <div className="flex justify-center mb-4 pb-2 border-b border-sky-500 dark:border-yellow-500">
          <PageTitleCategory title={t('pages_category.developers.title')} />
        </div>
        <div>
          <CardsListCompany />
        </div>
      </div>
    </>
  )
}
export default DevelopersPage
